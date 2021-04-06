import React from "react";
import cx from "classnames";
import { ReactComponent as Logo } from "@assets/img/xendit.svg";
import { ReactComponent as LoadingSvg } from "@assets/img/loading.svg";

type Props = {
  className?: string;
  show?: boolean;
  hideLogo?: boolean;
};

const Loading: React.FC<Props> = (props) => {
  const { className, show } = props;

  return (
    <>
      {show && (
        <div data-testid="loading" className={cx("flex flex-col", className)}>
          {!props.hideLogo && <Logo className="mb-4 max-w-sm" />}
          <LoadingSvg />
        </div>
      )}
    </>
  );
};

Loading.defaultProps = {
  className: "",
  show: true,
  hideLogo: false,
};

export default Loading;
