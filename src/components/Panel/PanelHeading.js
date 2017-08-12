import React from "react";
import classNames from "classnames";

import { withHelpersModifiers } from "./../../bulma";

export const PanelHeading = props => {
  const className = classNames("panel-heading", props.className);  // eslint-disable-line

  return <p {...props} className={className} />;
};

export default withHelpersModifiers(PanelHeading);
