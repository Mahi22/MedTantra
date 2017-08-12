import React from "react";
import classNames from "classnames";

import { withHelpersModifiers } from "../../../bulma";

export const CardFooterItem = props => {
  const className = classNames("card-footer-item", props.className);   // eslint-disable-line

  const { render, ...HTMLProps } = props;   // eslint-disable-line

  if (render) return render({ ...HTMLProps, className });

  return (
    <div {...HTMLProps} className={className} />
  );
};

export default withHelpersModifiers(CardFooterItem);
