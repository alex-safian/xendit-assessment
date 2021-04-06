import React from "react";
import { render } from "@testing-library/react";
import UniversityThumbnailSkeleton from "@components/UniversityThumbnailSkeleton";

describe("University Thumbnail Skeleton", () => {
  it("displays university thumbnail skeleton", () => {
    const { getAllByRole } = render(<UniversityThumbnailSkeleton />);

    expect(getAllByRole("list")).toHaveLength(1);
    expect(getAllByRole("listitem")).toHaveLength(3);
  });
});
