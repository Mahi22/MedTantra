import React from "react";
import classNames from "classnames";

import {
  withHelpersModifiers,
} from "../../bulma";

export const ModalBackground = props => {
  const className = classNames("modal-background", props.className);  // eslint-disable-line

  const { children, ...HTMLProps } = props; // eslint-disable-line

  return (
    <div {...HTMLProps} className={className} />
  );
};

export default withHelpersModifiers(ModalBackground);
