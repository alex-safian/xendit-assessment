import React from "react";
import cx from "classnames";
import Header from "@components/Header";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const { children, className } = props;

  return (
    <div className={cx(className)}>
      <Header />
      <div className="pt-32">{children}</div>
    </div>
  );
};

export default Layout;
