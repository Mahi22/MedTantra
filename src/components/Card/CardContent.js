import React from 'react';
import classNames from 'classnames';

import { withHelpersModifiers } from '../../bulma';

export const CardContent = props => {
  const className = classNames("card-content", props.className);  // eslint-disable-line

  return (
    <div {...props} className={className} />
  );
};

export default withHelpersModifiers(CardContent);
