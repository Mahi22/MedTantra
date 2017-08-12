import React from "react";
import classNames from "classnames";

import { withHelpersModifiers } from "../../../bulma";

export const CardHeader = props => {
  const className = classNames("card-header-title", props.className);

  return (
    <div {...props} className={className} />
  );
};

export default withHelpersModifiers(CardHeader);
