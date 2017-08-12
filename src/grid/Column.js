import React from "react";
import classNames from "classnames";

import {
  getHorizontalSizeModifiers, removeHorizontalSizeProps,
  getSizeModifiers, removeSizeProps,
  getOffsetModifiers, removeOffsetProps,
} from "./grid";

import { withHelpersModifiers } from "../bulma";

import { getHTMLProps, combineModifiers } from "../helpers";

export const Column = props => {
  const className = classNames(
    "column",
    {
      ...combineModifiers(
        props,
        getHorizontalSizeModifiers,
        getSizeModifiers,
        getOffsetModifiers,
      )
    },
    props.className,   // eslint-disable-line
  );

  const HTMLProps = getHTMLProps(
    props,
    removeHorizontalSizeProps,
    removeSizeProps,
    removeOffsetProps,
  );

  return (
    <div {...HTMLProps} className={className} />
  );
};

export default withHelpersModifiers(Column);
