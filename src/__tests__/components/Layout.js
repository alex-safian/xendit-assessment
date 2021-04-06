import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Layout from "@components/Layout";
import { BrowserRouter as Router } from "react-router-dom";

it("renders", () => {
  const { asFragment } = render(
    <Router>
      <Layout>content</Layout>
    </Router>
  );
  expect(asFragment()).toMatchSnapshot();
});
