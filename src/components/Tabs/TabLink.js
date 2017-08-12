import React from "react";

import { withHelpersModifiers } from "./../../bulma";

export function TabLink({ tag = "a", render, ...props }) {
  if (render) return render({ ...props });

  return React.createElement(tag, props);
}

const HOC = withHelpersModifiers(TabLink);
export default HOC;
