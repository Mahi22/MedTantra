import React from "react";
import classNames from "classnames";

import { withHelpersModifiers } from "./../../bulma";

export const Panel = props => {
  const className = classNames("panel", props.className); // eslint-disable-line

  return <nav {...props} className={className} />;
};

export default withHelpersModifiers(Panel);
