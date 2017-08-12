import React from "react";
import classNames from "classnames";

import { withHelpersModifiers } from "../../bulma";

export const NavCenter = props => {
  const className = classNames("nav-center", props.className);  // eslint-disable-line

  return (
    <div {...props} className={className} />
  );
};

export default withHelpersModifiers(NavCenter);
