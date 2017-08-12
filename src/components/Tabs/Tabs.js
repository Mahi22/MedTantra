import React from "react";
import classNames from "classnames";

import {
  removeAlignmentProps,
  removeSizeProps,
  getAlignmentModifiers,
  getSizeModifiers,
  withHelpersModifiers
} from "./../../bulma";
import { combineModifiers, getHTMLProps } from "./../../helpers";

export function Tabs({ tag = "div", ...props }) {
  const className = classNames(
    "tabs",
    {
      "is-boxed": props.isBoxed,
      "is-toggle": props.isToggle,
      ...combineModifiers(props, getAlignmentModifiers, getSizeModifiers)
    },
    props.className
  );

  const { isBoxed, isToggle, ...rest } = props;
  const HTMLProps = getHTMLProps(rest, removeAlignmentProps, removeSizeProps);

  return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = withHelpersModifiers(Tabs);
export default HOC;
