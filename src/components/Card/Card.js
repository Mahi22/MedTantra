import React from 'react';
import classNames from 'classnames';

import { withHelpersModifiers } from '../../bulma';

export const Card = props => {
  const className = classNames("card", props.className); // eslint-disable-line

  return <div {...props} className={className} />;
};

export default withHelpersModifiers(Card);
