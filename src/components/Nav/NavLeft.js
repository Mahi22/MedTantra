import React from "react";
import classNames from "classnames";

import { withHelpersModifiers } from "../../bulma";

export const NavLeft = props => {
  const className = classNames("nav-left", props.className);  // eslint-disable-line

  return (
    <div {...props} className={className} />
  );
};

export default withHelpersModifiers(NavLeft);
