import React from "react";
import classNames from "classnames";

import { withHelpersModifiers } from "../../bulma";

export const Nav = props => {
  const className = classNames(
    "nav",
    {
      "has-shadow": props.hasShadow   // eslint-disable-line
    },
    props.className  // eslint-disable-line
  );

  const {
    hasShadow,  // eslint-disable-line
    ...HTMLProps
  } = props;

  return (
    <nav {...HTMLProps} className={className} />
  );
};

export default withHelpersModifiers(Nav);
