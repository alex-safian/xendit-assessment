import { truncate, getCountryParams } from "@utils/index";

test("Truncate", () => {
  const mockTruncate = jest.fn().mockImplementation(truncate);
  mockTruncate("title");
  expect(mockTruncate).toHaveBeenCalled();

  expect(mockTruncate("title")).toEqual("title");
});

test("Get Country Params", () => {
  const url = "http://domain.com";
  const location = new URL(url);
  location.search = "?country=malaysia&page=1";

  delete window.location;
  window.location = location;

  const { country, page } = getCountryParams();
  expect(country).toEqual("malaysia");
  expect(page).toEqual(1);
});
