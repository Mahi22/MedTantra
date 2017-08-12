import React from "react";
import classNames from "classnames";

import { withHelpersModifiers } from "../../../bulma";

export const FieldBody = props => {
  const className = classNames("field-body", props.className);  // eslint-disable-line

  return <div {...props} className={className} />;
};

export default withHelpersModifiers(FieldBody);
