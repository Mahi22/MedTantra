import React from "react";
import classNames from "classnames";

import {
  getSizeModifiers,
  removeSizeProps,
  withHelpersModifiers,
} from "../../bulma";

import { getHTMLProps } from "../../helpers";

export const ModalClose = props => {
  const className = classNames(
    "modal-close",
    {
      ...getSizeModifiers(props)
    },
    props.className  // eslint-disable-line
  );

  const { render, ...rest } = props;  // eslint-disable-line
  const HTMLProps = getHTMLProps(rest, removeSizeProps);

  if (render) return render({ ...HTMLProps, className });

  return (
    <button {...HTMLProps} className={className} />
  );
};

export default withHelpersModifiers(ModalClose);
