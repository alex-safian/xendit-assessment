import React from "react";
import Layout from "@components/Layout";
import { ReactComponent as FaveLogo } from "@assets/img/xendit.svg";

const About: React.FC = () => {
  return (
    <Layout>
      <section className="mb-4 mt-4 container flex flex-col">
        <a href="https://myfave.com/" className="self-center">
          <FaveLogo className="max-w-full" width="400" />
        </a>
        <p className="text-xl mt-7">
          This is an assessment for Fave which is done by Alireza Safian. It is
          Single Page Application and shows a sortable list of universities and
          their details.
        </p>
        <p className="mt-4">
          <a
            className="font-bold underline hover:text-red"
            target="_blank"
            href="/ASSIGNMENT.md"
            download
          >
            ASSIGNMENT.md
          </a>
        </p>
      </section>
    </Layout>
  );
};

export default About;
