import React from "react";
import { render } from "@testing-library/react";
import UniversityThumbnail from "@components/UniversityThumbnail";

const university = {
  name: "university name",
  website: "http://example.com",
  country: "United State",
};

describe("University Thumbnail", () => {
  it("displays University thumbnail", () => {
    const { getByTestId, getByTitle } = render(
      <UniversityThumbnail
        name={university.name}
        website={university.website}
        country={university.country}
      />
    );

    const thumbnail = getByTitle(university.name);
    expect(thumbnail).toBeTruthy();

    expect(getByTestId("name")).toHaveTextContent(university.name);

    expect(getByTestId("country")).toHaveTextContent(university.country);

    expect(getByTestId("website")).toHaveTextContent(university.website);
    expect(getByTestId("website")).toHaveAttribute("href", university.website);
  });
});
