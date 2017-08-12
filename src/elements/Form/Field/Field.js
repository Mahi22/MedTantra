import React from "react";
import classNames from "classnames";

import {
  isRight,
  isCentered,
  isFullWidth,
  withHelpersModifiers
} from "../../../bulma";

import { isOption } from "../../../helpers";

const getModifier = (modifier, helper, isDirection) => {
  if (modifier === true) {
    return { [`${helper}`]: true };
  } else if (typeof modifier === "string") {
    return isDirection(modifier)
      ? { [`${helper} ${helper}-${modifier}`]: true }
      : {};
  }

  return {};
};

export const Field = props => {
  const className = classNames(
    "field",
    {
      ...getModifier(
        props.isGrouped,
        "is-grouped",
        isOption(isRight, isCentered)
      ),
      ...getModifier(
        props.hasAddons,
        "has-addons",
        isOption(isRight, isCentered, isFullWidth)
      ),
      "is-horizontal": props.isHorizontal
    },
    props.className
  );
  const { isGrouped, hasAddons, isHorizontal, ...HTMLProps } = props;

  return <div {...HTMLProps} className={className} />;
};

export default withHelpersModifiers(Field);
