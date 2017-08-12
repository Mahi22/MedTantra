import React from "react";
import classNames from "classnames";

import { withHelpersModifiers } from "../../../bulma";

export const CardFooter = props => {
  const className = classNames("card-footer", props.className);  // eslint-disable-line

  return (
    <footer {...props} className={className} />
  );
};

export default withHelpersModifiers(CardFooter);
