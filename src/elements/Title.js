import React from "react";
import classNames from "classnames";

import {
  getHeadingElement,
  getHeadingModifiers,
  removeHeadingProps,
  withHelpersModifiers
} from "./../bulma";
import { getHTMLProps } from "./../helpers";

export const Title = props => {
  const className = classNames(
    "title",
    {
      ...getHeadingModifiers(props)
    },
    props.className  // eslint-disable-line
  );

  const HTMLProps = getHTMLProps(props, removeHeadingProps);

  if (props.isParagraph) return <p {...HTMLProps} className={className} />;  // eslint-disable-line

  const element = getHeadingElement(props);

  return React.createElement(element, { ...HTMLProps, className });
};

export default withHelpersModifiers(Title);
