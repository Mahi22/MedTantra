import React from "react";
import classNames from "classnames";

import {
  getActiveModifiers,
  removeActiveModifiers,
  withHelpersModifiers
} from "../../bulma";
import { getHTMLProps } from "../../helpers";

export const PanelBlock = props => {
  const className = classNames(
    "panel-block",
    {
      "is-wrapped": props.isWrapped,  // eslint-disable-line
      ...getActiveModifiers(props)
    },
    props.className  // eslint-disable-line
  );

  const { render, isWrapped, isLabel, ...rest } = props; // eslint-disable-line
  const HTMLProps = getHTMLProps(rest, removeActiveModifiers);

  if (render) return render({ ...HTMLProps, className });

  if (isLabel) return <label {...HTMLProps} className={className} />;  // eslint-disable-line

  const element = props.href ? "a" : "div";  // eslint-disable-line

  return React.createElement(element, { ...HTMLProps, className });
};

export default withHelpersModifiers(PanelBlock);
