import * as React from "react";
import { Select, Spin } from "antd";
import { getUniversitiesByCountry } from "@api/index";
import Layout from "@components/Layout";
import { LoadingOutlined } from "@ant-design/icons";
import { UniversityType } from "types/index";
import { useLocation, useHistory } from "react-router-dom";
import { getCountryParams, isEndOfPage } from "@utils/index";
import UniversityThumbnailSkeleton from "@components/UniversityThumbnailSkeleton";
import UniversityThumbnail from "@components/UniversityThumbnail";
import { COUNTRIES_OPTION } from "@constants/index";

let universitiesList: UniversityType[] = [];
const limit = 30;
let totalPage: number;

const Home: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const [universities, setUniversities] = React.useState<UniversityType[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [nextPageLoading, setNextPageLoading] = React.useState(false);
  const { country } = getCountryParams();

  const updateURL = (country: string, page = 1) => {
    history.push({
      search: `?country=${country}&page=${page}`,
    });
  };

  const handleSortByChange = (value: string) => {
    // Remove all universities
    setLoading(true);
    setUniversities([]);
    universitiesList = [];
    updateURL(value);
  };

  const fetchUniversities = async (country = "malaysia") => {
    const { page } = getCountryParams();

    const startAt = page === 1 ? 0 : limit * (page - 1);

    if (universitiesList.length > 0) {
      const endAt =
        page < totalPage ? startAt + limit - 1 : universitiesList.length - 1;

      setUniversities((state) => {
        return [...state, ...universitiesList.slice(startAt, endAt)];
      });
      setLoading(false);
      setNextPageLoading(false);
      return;
    }

    await getUniversitiesByCountry(country).then(({ data }) => {
      if (data.length === 0) {
        return history.replace("/404");
      }

      universitiesList.push(...data);
      totalPage = Math.ceil(universitiesList.length / limit);
      const endAt =
        page <= totalPage ? startAt + limit - 1 : universitiesList.length;
      setUniversities([...universitiesList.slice(startAt, endAt)]);

      setLoading(false);
      setNextPageLoading(false);
    });
  };

  const trackScrolling = () => {
    const { country, page } = getCountryParams();
    const wrappedElement: HTMLElement | null = document.getElementById("root");
    if (wrappedElement && isEndOfPage(wrappedElement) && !nextPageLoading) {
      const nextPage = (page ? page : 1) + 1;

      if (country === null || nextPage > totalPage) {
        return;
      }

      setNextPageLoading(true);

      updateURL(country, nextPage);
    }
  };

  React.useEffect(() => {
    setLoading(true);
    document.addEventListener("scroll", trackScrolling);

    return () => {
      document.removeEventListener("scroll", trackScrolling);
    };
  }, []);

  React.useEffect(() => {
    const { country } = getCountryParams();

    if (country) {
      fetchUniversities(country);
      return;
    }

    // Sort by release date desc by default
    updateURL("malaysia", 1);
  }, [location.search]);

  return (
    <Layout className="min-h-screen md:bg-gray-100">
      <section className="container flex flex-col items-start bg-white round py-4 md:px-8 md:py-11 mb-6">
        <label className="mb-4">
          <span className="block font-bold mb-2">Sort By: </span>
          <Select
            options={COUNTRIES_OPTION}
            defaultValue={country ? country : "malaysia"}
            id="sort-by"
            dropdownClassName="capitalize "
            className="w-52 capitalize "
            onChange={handleSortByChange}
            disabled={loading}
          />
        </label>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full">
          {loading
            ? [...Array(30).keys()].map((item, index) => (
                <UniversityThumbnailSkeleton key={index} />
              ))
            : universities.map((university: UniversityType) => (
                <UniversityThumbnail
                  key={university.name}
                  name={university.name}
                  country={university.country}
                  website={university.web_pages[0]}
                />
              ))}
        </div>

        {nextPageLoading && (
          <div className="flex justify-center w-full mt-8">
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 35 }} spin />}
            />
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Home;
