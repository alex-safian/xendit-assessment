import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@components/Header";
import { BrowserRouter as Router } from "react-router-dom";

it("renders", () => {
  const { asFragment } = render(
    <Router>
      <Header />
    </Router>
  );
  expect(asFragment()).toMatchSnapshot();
});
