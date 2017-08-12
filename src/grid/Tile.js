import React from "react";
import classNames from "classnames";

import { getHorizontalSizeModifiers, removeHorizontalSizeProps } from "./grid";
import { withHelpersModifiers } from "../bulma";
import { getHTMLProps } from "../helpers";

export const Tile = props => {
  const className = classNames(
    "tile",
    {
      "is-ancestor": props.isAncestor,
      "is-child": props.isChild,
      "is-parent": props.isParent,
      "is-vertical": props.isVertical,
      ...getHorizontalSizeModifiers(props)
    },
    props.className
  );

  const { render, isAncestor, isChild, isParent, isVertical, ...rest } = props;

  const HTMLProps = getHTMLProps(rest, removeHorizontalSizeProps);

  if (render) return render({ ...HTMLProps, className });

  return <div {...HTMLProps} className={className} />;
};

export default withHelpersModifiers(Tile);
