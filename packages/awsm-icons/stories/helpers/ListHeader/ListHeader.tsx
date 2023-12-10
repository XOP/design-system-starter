import React from 'react';

import { header, item } from './ListHeader.css';

export interface IconListProps {
  data: string[];
}

const ListHeader = ({ data }: IconListProps) => {
  return (
    <div className={header}>
      {data.map((value) => (
        <div className={item} key={value}>{value}</div>
      ))}
    </div>
  );
};

export default ListHeader;
