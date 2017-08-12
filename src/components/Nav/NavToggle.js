import React from "react";
import classNames from "classnames";

import {
  getActiveModifiers,
  removeActiveModifiers,
  withHelpersModifiers,
} from "../../bulma";

import { getHTMLProps } from "../../helpers";

export const NavToggle = props => {
  const className = classNames(
    "nav-toggle",
    {
      ...getActiveModifiers(props),
    },
    props.className,   // eslint-disable-line
  );

  const { children, ...HTMLProps } = getHTMLProps(props, removeActiveModifiers);

  return (
    <span {...HTMLProps} className={className}>
      <span />
      <span />
      <span />
    </span>
  );
};

export default withHelpersModifiers(NavToggle);
