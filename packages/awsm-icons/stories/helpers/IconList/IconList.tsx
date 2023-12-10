import React from 'react';

import { ul, li } from './IconList.css';

import IconItem, { IconItemProps } from '../IconItem/IconItem';

export interface IconListProps {
  data: IconItemProps[];
}

const IconList = ({ data }: IconListProps) => {
  return (
    <ul className={`${ul} sb-unstyled`}>
      {data.map((item) => (
        <li className={li} key={item.name}>
          <IconItem {...item} />
        </li>
      ))}
    </ul>
  );
};

export default IconList;
