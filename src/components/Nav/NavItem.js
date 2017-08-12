import React from "react";
import classNames from "classnames";

import { getActiveModifiers, removeActiveModifiers, withHelpersModifiers } from "../../bulma";

import { getHTMLProps } from "../../helpers";

export const NavItem = props => {
  const className = classNames(
    "nav-item",
    {
      "is-tab": props.isTab,  // eslint-disable-line
      "is-brand": props.isBrand, // eslint-disable-line
      ...getActiveModifiers(props),
    },
  );

  const {
    render, // eslint-disable-line
    isTab, // eslint-disable-line
    isBrand, // eslint-disable-line
    ...rest
  } = props;

  const HTMLProps = getHTMLProps(rest, removeActiveModifiers);

  if (render) return render({ ...HTMLProps, className });

  const element = props.href ? "a" : "div"; // eslint-disable-line

  return React.createElement(element, { ...HTMLProps, className });
};

export default withHelpersModifiers(NavItem);
