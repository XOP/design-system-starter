import React from 'react';

import { item, icon, iconPrimary, iconSecondary } from './IconItem.css';

export interface IconItemProps {
  name: string;
  element: JSX.ElementType;
}

const IconItem = ({ name, element }: IconItemProps) => {
  const Icon = element as JSX.ElementType;

  return (
    <div className={item}>
      <div>{name}</div>
      <div className={icon}>
        <Icon />
      </div>
      <div className={iconPrimary}>
        <Icon />
      </div>
      <div className={iconSecondary}>
        <Icon />
      </div>
    </div>
  );
};

export default IconItem;
