import React from "react";
import classNames from "classnames";

import { withHelpersModifiers } from "../bulma";

export const Box = props => {
  const className = classNames("box", props.className);  // eslint-disable-line

  return (
    <div {...props} className={className} />
  );
};

export default withHelpersModifiers(Box);
