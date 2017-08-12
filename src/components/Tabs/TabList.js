import React from "react";
import classNames from "classnames";

import {
  isLeft,
  isCenter,
  isRight,
  removeAlignmentProps,
  withHelpersModifiers
} from "./../../bulma";
import { isOption, getHTMLProps } from "./../../helpers";

const isAlignOption = isOption(isLeft, isCenter, isRight);

export function TabList({ tag = "ul", ...props }) {
  const className =
    classNames(
      {
        ...(isAlignOption(props.isAlign)
          ? { [`is-${props.isAlign}`]: true }
          : {})
      },
      props.className
    ) || undefined;

  const HTMLProps = getHTMLProps(props, removeAlignmentProps);

  return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = withHelpersModifiers(TabList);
export default HOC;
