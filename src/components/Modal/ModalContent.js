import React from "react";
import classNames from "classnames";

import {
  withHelpersModifiers,
} from "../../bulma";

export const ModalContent = props => {
  const className = classNames("modal-content", props.className);  // eslint-disable-line

  return (
    <div {...props} className={className} />
  );
};

export default withHelpersModifiers(ModalContent);
