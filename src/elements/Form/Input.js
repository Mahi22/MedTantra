import React from "react";
import classNames from "classnames";

import { default as Help } from "./Help";  // eslint-disable-line
import {
  getColorModifiers,
  getSizeModifiers,
  getStateModifiers,
  removeColorProps,
  removeSizeProps,
  removeStateProps,
  withHelpersModifiers
} from "./../../bulma";

import { combineModifiers, getHTMLProps } from "./../../helpers";

const Input = props => {
  const className = classNames("input", {
    ...combineModifiers(
      props,
      getColorModifiers,
      getSizeModifiers,
      getStateModifiers,
      getStateModifiers
    )
  },
  props.className);

  const { errorText, ...rest } = props;  // eslint-disable-line

  const HTMLProps = getHTMLProps(rest, removeColorProps, removeSizeProps, removeStateProps);

  let errorElement = (<noscript />);
  if (errorText) {
    errorElement = (<Help isColor="danger">{errorText}</Help>);
  }

  return (
    <div>
      <input {...HTMLProps} className={className} type={props.type || "text"} />
      {errorElement}
    </div>
  );
};

export default withHelpersModifiers(Input);
