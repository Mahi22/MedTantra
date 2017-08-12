import React from "react";
import classNames from "classnames";

import { withHelpersModifiers } from "../bulma";

export const Columns = props => {
  const className = classNames(
    "columns",
    {
      "is-mobile": props.isMobile,
      "is-desktop": props.isDesktop,
      "is-gapless": props.isGapless,
      "is-grid": props.isGrid,
      "is-multiline": props.isMultiline,
      "is-vcentered": props.isVCentered,
      "is-centered": props.isCentered
    },
    props.className
  );
  const {
    isMobile,
    isDesktop,
    isGapless,
    isGrid,
    isMultiline,
    isVCentered,
    isCentered,
    ...HTMLProps
  } = props;

  return <div {...HTMLProps} className={className} />;
};

export default withHelpersModifiers(Columns);
