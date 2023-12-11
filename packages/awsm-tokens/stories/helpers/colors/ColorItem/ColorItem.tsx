import React from 'react';

import { item, tokenName } from './ColorItem.css';

export interface ColorItemProps {
  name: string;
  color: string;
}

const ColorItem = ({ name, color }: ColorItemProps) => {
  if (typeof color !== 'string') return null;
  if (color.includes('-rgb')) return null;

  const refinedName = color.slice(4, -1);
  
  return (
    <div className={item} style={{ backgroundColor: color }}>
      <div className={tokenName}>{name}</div>
      <div className={tokenName}>{refinedName}</div>
    </div>
  );
};

export default ColorItem;
