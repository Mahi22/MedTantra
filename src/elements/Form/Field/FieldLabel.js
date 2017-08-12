import * as React from "react";
import * as classNames from "classnames";

import {
  getSizeModifiers,
  removeSizeProps,
  withHelpersModifiers
} from "../../../bulma";

import { getHTMLProps } from "../../../helpers";

export const FieldLabel = props => {
  const className = classNames(
    "field-label",
    {
      "is-normal": props.isNormal,
      ...getSizeModifiers(props)
    },
    props.className
  );
  const { isNormal, ...rest } = props;

  const HTMLProps = getHTMLProps(rest, removeSizeProps);

  return <div {...HTMLProps} className={className} />;
};

export default withHelpersModifiers(FieldLabel);
