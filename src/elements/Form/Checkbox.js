import React from "react";
import classNames from "classnames";

import { withHelpersModifiers } from "../../bulma";

export const Checkbox = props => {
  const wrapperClassName = classNames("checkbox", props.className);  // eslint-disable-line

  const { children, className, ...HTMLProps } = props;  // eslint-disable-line

  // eslint-disable-next-line
  return (<label className={wrapperClassName} disabled={HTMLProps.disabled}>
    <input {...HTMLProps} type="checkbox" />
    <span>{children}</span>
  </label>
  );
};

export default withHelpersModifiers(Checkbox);
