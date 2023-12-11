import React from 'react';

import ColorItem from '../ColorItem/ColorItem';

import { group, heading, content } from './ColorGroup.css';

export interface ColorGroupProps {
  name: string;
  data: [];
}

const ColorGroup = ({ name, data }: ColorGroupProps) => {
  // TODO: cleanup
  console.log(name, data);

  if (name.includes('Rgb')) return null;

  return (
    <section className={group}>
      <h2 className={heading}>{name}</h2>

      <div className={content}>
        {!!data.length &&
          data.map(({ name, color }) => {
            return <ColorItem name={name} color={color} />;
          })}
      </div>
    </section>
  );
};

export default ColorGroup;
