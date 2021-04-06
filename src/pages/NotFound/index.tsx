import React from "react";
import { Link } from "react-router-dom";
import Layout from "@components/Layout";
import { ReactComponent as Image404 } from "@assets/img/404.svg";

const NotFound: React.FC = () => (
  <Layout>
    <div className="flex flex-col items-center">
      <Image404 className="max-w-sm" />
      <Link to="/">
        Let&apos;s go <span className="text-red">Home</span>
      </Link>
    </div>
  </Layout>
);

export default NotFound;
