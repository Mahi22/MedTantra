import React from "react";
import classNames from "classnames";

import {
  getActiveModifiers,
  removeActiveModifiers,
  withHelpersModifiers,
} from "../../bulma";

import { getHTMLProps } from "../../helpers";

export const Modal = props => {
  const className = classNames(
    "modal",
    {
      ...getActiveModifiers(props),
    },
    props.className, // eslint-disable-line
  );

  const HTMLProps = getHTMLProps(props, removeActiveModifiers);

  return (
    <div {...HTMLProps} className={className} />
  );
};

export default withHelpersModifiers(Modal);
