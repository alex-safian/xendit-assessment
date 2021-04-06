import React, { useEffect, useState } from "react";
import { Alert, Button, Form, Input, Select } from "antd";
import { findUniversitiesByCountryName } from "@api/index";
import Layout from "@components/Layout";
import { UniversityType } from "types/index";
import UniversityThumbnail from "@components/UniversityThumbnail";
import { COUNTRIES_OPTION } from "@constants/index";

const Search: React.FC = () => {
  const [universities, setUniversities] = React.useState<UniversityType[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const [error, setError] = useState<string>();

  const onFinish = async (data: { name: string; country: string }) => {
    setLoading(true);
    findUniversitiesByCountryName(data.name, data.country)
      .then(({ data }) => {
        if (data.length === 0) {
          setError("The university does not exists");
          return;
        }

        setUniversities([...data]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <Layout className="min-h-screen md:bg-gray-100">
      <section className="container flex flex-col items-start bg-white round py-4 md:px-8 md:py-11 mb-6">
        <Form
          form={form}
          name="customized_form_controls"
          layout="inline"
          onFinish={onFinish}
          initialValues={{ country: "malaysia" }}
          className="mb-4"
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please enter university!",
              },
            ]}
          >
            <Input placeholder="enter university name" />
          </Form.Item>
          <Form.Item
            name="country"
            label="Country"
            valuePropName="country"
            rules={[
              {
                required: true,
                message: "Please enter university!",
              },
            ]}
          >
            <Select
              options={COUNTRIES_OPTION}
              defaultValue="malaysia"
              dropdownClassName="capitalize "
              className="w-52 capitalize"
            />
          </Form.Item>
          <Form.Item shouldUpdate>
            {() => (
              <Button
                htmlType="submit"
                className="w-full"
                loading={loading}
                disabled={
                  !!form.getFieldsError().filter(({ errors }) => errors.length)
                    .length || loading
                }
              >
                Search
              </Button>
            )}
          </Form.Item>
        </Form>

        {error && (
          <Alert className="mt-4" type="error" closable message={error} />
        )}

        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full">
          {universities.length > 0 &&
            [...universities]
              .slice(0, 100)
              .map((university: UniversityType) => (
                <UniversityThumbnail
                  key={university.name}
                  name={university.name}
                  country={university.country}
                  website={university.web_pages[0]}
                />
              ))}
        </div>
      </section>
    </Layout>
  );
};

export default Search;
