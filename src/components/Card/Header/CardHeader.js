import React from "react";
import classNames from "classnames";

import { withHelpersModifiers } from "../../../bulma";

export const CardHeader = props => {
  const className = classNames("card-header", props.className);  // eslint-disable-line

  return (
    <header {...props} className={className} />
  );
};

export default withHelpersModifiers(CardHeader);
