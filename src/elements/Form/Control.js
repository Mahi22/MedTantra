import React from "react";
import classNames from "classnames";

import {
  getLoadingModifiers,
  removeLoadingProps,
  isLeft,
  isRight,
  withHelpersModifiers
} from "../../bulma";

import { isOption, getHTMLProps } from "../../helpers";

const isDirection = isOption(isLeft, isRight);

const getModifier = modifier => {
  if (modifier === true) {
    return { "has-icons-left has-icons-right": true };
  } else if (typeof modifier === "string") {
    return isDirection(modifier) ? { [`has-icons-${modifier}`]: true } : {};
  } else if (Array.isArray(modifier)) {
    return modifier
      .map(str => str.toLowerCase().trim())
      .reduce(
        (init, option) =>  // eslint-disable-line
          isDirection(option)
            ? { ...init, [`has-icons-${option}`]: true }
            : init,
        {}
      );
  }

  return {};
};

export const Control = props => {
  const className = classNames(
    "control",
    {
      ...getModifier(props.hasIcons),
      "is-expanded": props.isExpanded,
      ...getLoadingModifiers(props)
    },
    props.className
  );
  const { hasIcons, isExpanded, ...rest } = props;

  const HTMLProps = getHTMLProps(rest, removeLoadingProps);

  return <div {...HTMLProps} className={className} />;
};

export default withHelpersModifiers(Control);
