import React, { useEffect, useState } from "react";
import { Alert, AlertProps, Button, Form, Input } from "antd";
import Layout from "@components/Layout";
import { subscribe } from "@api/index";

type MessageType = null | {
  type: AlertProps["type"];
  content: string;
};

const Newsletter: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const [message, setMessage] = useState<MessageType>();

  const onFinish = async (data: { email: string }) => {
    console.log("data :>> ", data);
    setLoading(true);
    setMessage(null);
    subscribe(data.email)
      .then((res) => {
        setMessage({ content: res.data.message, type: "success" });
      })
      .catch((res) => {
        setMessage({ content: res.error, type: "error" });
      })
      .finally(() => {
        setLoading(false);
        form.resetFields();
      });
  };

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <Layout className="min-h-screen md:bg-gray-100">
      <section className="container flex flex-col items-start bg-white round py-4 md:px-8 md:py-11 mb-6">
        <Form form={form} layout="inline" onFinish={onFinish} className="mb-4">
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
              },
            ]}
          >
            <Input type="email" placeholder="enter your email" />
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
                Newsletter
              </Button>
            )}
          </Form.Item>
        </Form>

        {message != null && (
          <Alert
            className="mt-4"
            type={message.type}
            closable
            message={message.content}
          />
        )}
      </section>
    </Layout>
  );
};

export default Newsletter;
