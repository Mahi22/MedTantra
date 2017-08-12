import React from "react";
import classNames from "classnames";

import {
  getActiveModifiers,
  removeActiveModifiers,
  withHelpersModifiers,
} from "../../bulma";

import { getHTMLProps } from "../../helpers";

export const NavRight = props => {
  const className = classNames(
    "nav-right",
    {
      "nav-menu": props.isMenu,  // eslint-disable-line
      ...getActiveModifiers(props),
    },
    props.className,  // eslint-disable-line
  );

  const { isMenu, ...rest } = props; // eslint-disable-line
  const HTMLProps = getHTMLProps(rest, removeActiveModifiers);

  return (
    <div {...HTMLProps} className={className} />
  );
};

export default withHelpersModifiers(NavRight);
