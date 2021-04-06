import React from "react";
import cx from "classnames";
import { truncate } from "@utils/index";

type Props = {
  className?: string;
  name: string;
  website: string;
  country: string;
};

const UniversityThumbnail: React.FC<Props> = ({
  name,
  website,
  country,
  className,
}: Props) => {
  return (
    <div
      className={cx(
        "rounded shadow overflow-hidden flex flex-col px-4 py-2",
        className
      )}
      title={name}
    >
      <h2 className="text-sm pb-4" data-testid="name">
        <span className="font-bold">Name: </span>
        {truncate(name, 40)}
      </h2>
      <h2 className="text-sm pb-4" data-testid="country">
        <span className="font-bold">Country: </span>
        {country}
      </h2>
      <a
        className="text-sm text-blue-800 mt-auto"
        href={website}
        data-testid="website"
      >
        {website}
      </a>
    </div>
  );
};

UniversityThumbnail.defaultProps = {
  className: "",
};

export default UniversityThumbnail;
