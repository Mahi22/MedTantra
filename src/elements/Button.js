import React from "react";
import classNames from "classnames";

import {
  removeStateProps,
  removeColorProps,
  removeLoadingProps,
  removeSizeProps,
  getStateModifiers,
  getColorModifiers,
  getLoadingModifiers,
  getSizeModifiers,
  withHelpersModifiers
} from "../bulma";

import { combineModifiers, getHTMLProps } from "../helpers";

export const Button = props => {
  const className = classNames("button", props.className, {
    "is-link": props.isLink,
    "is-outlined": props.isOutlined,
    "is-inverted": props.isInverted,
    "is-static": props.isStatic,
    ...combineModifiers(
      props,
      getStateModifiers,
      getColorModifiers,
      getLoadingModifiers,
      getSizeModifiers
    )
  });

  const { render, isLink, isOutlined, isInverted, isStatic, ...rest } = props;
  const HTMLProps = getHTMLProps(
    rest,
    removeStateProps,
    removeColorProps,
    removeLoadingProps,
    removeSizeProps,
  );

  if (render) return render({ ...HTMLProps, className });

  // eslint-disable-next-line
  const anchor = (<a {...HTMLProps} role="button" className={className} />);

  const button = (
    <button {...HTMLProps} type={props.type || "button"} className={className} />
  );

  return props.href ? anchor : button;
};

export default withHelpersModifiers(Button);
