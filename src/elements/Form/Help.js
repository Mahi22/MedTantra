import React from "react";
import classNames from "classnames";

import {
  getColorModifiers,
  removeColorProps,
  withHelpersModifiers
} from "../../bulma";

import { getHTMLProps } from "../../helpers";

export const Help = props => {
  const className = classNames(
    "help",
    {
      ...getColorModifiers(props)
    },
    props.className
  );

  const HTMLProps = getHTMLProps(props, removeColorProps);

  return <p {...HTMLProps} className={className} />;
};

export default withHelpersModifiers(Help);
