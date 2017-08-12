import React from "react";
import classNames from "classnames";

import { withHelpersModifiers } from "./../../bulma";

export const PanelIcon = props => {
  const className = classNames("panel-icon", props.className);  // eslint-disable-line

  return <span {...props} className={className} />;
};

export default withHelpersModifiers(PanelIcon);
