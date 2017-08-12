import React from "react";
import classNames from "classnames";

import {
  getSizeModifiers,
  removeSizeProps,
  isLeft,
  isRight,
  removeAlignmentProps,
  withHelpersModifiers
} from "../bulma";
import { getHTMLProps, isOption } from "../helpers";

export const checkIcon = props => {
  const isAlignOption = isOption(isLeft, isRight);
  const className = classNames(
    "checkicon",
    {
      ...(isAlignOption(props.isAlign)
        ? { [`is-${props.isAlign}`]: true }
        : {}),
      ...getSizeModifiers(props)
    },
    props.className
  );

  const HTMLProps = getHTMLProps(props, removeAlignmentProps, removeSizeProps);
 /* eslint-disable */
  return (
    <div {...HTMLProps} className={className}>
       Some
    </div>);
};

export default withHelpersModifiers(checkIcon);
