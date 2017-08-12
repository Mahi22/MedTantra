import React from "react";
import classNames from "classnames";

import {
  getActiveModifiers,
  removeActiveModifiers,
  withHelpersModifiers
} from "./../../bulma";

import { getHTMLProps } from "./../../helpers";

export function Tab({ tag = "li", ...props }) {  // eslint-disable-line
  const className =
    classNames(
      {
        ...getActiveModifiers(props)
      },
      props.className   // eslint-disable-line
    ) || undefined;

  const HTMLProps = getHTMLProps(props, removeActiveModifiers);

  return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = withHelpersModifiers(Tab);
export default HOC;
