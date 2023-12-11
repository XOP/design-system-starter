import React from 'react';

import * as Icons from '../../../lib/icons';

import IconList from '../IconList/IconList';
import ListHeader from '../ListHeader/ListHeader';

import { root } from './Iconography.css';

const dictionary = Object.entries(Icons).map(([name, Element]) => ({
  name,
  element: Element,
}));

const Iconography = () => {
  return (
    <div className={`${root} sb-unstyled`}>
      <ListHeader data={['Name', 'Default', 'Primary', 'Secondary']} />
      <IconList data={dictionary} />
    </div>
  );
};

export default Iconography;
