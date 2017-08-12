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

export const Icon = props => {
  const isAlignOption = isOption(isLeft, isRight);
  const className = classNames(
    "icon",
    {
      ...(isAlignOption(props.isAlign)
        ? { [`is-${props.isAlign}`]: true }
        : {}),
      ...getSizeModifiers(props)
    },
    props.className
  );

  const HTMLProps = getHTMLProps(props, removeAlignmentProps, removeSizeProps);

  return <span {...HTMLProps} className={className} />;
};

export default withHelpersModifiers(Icon);
