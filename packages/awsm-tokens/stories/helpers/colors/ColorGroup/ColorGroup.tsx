import React from 'react';

import ColorItem from '../ColorItem/ColorItem';

import { group, subgroup, heading, subheading, content, subcontent } from './ColorGroup.css';

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
          data.map(({ name, color, data: nestedData }) => {
            if (nestedData) {
              return (
                <section className={subgroup}>
                  <h3 className={subheading}>{name}</h3>
                  <div className={subcontent}>
                    {nestedData.map(({ name, color }) => {
                      return <ColorItem name={name} color={color} />;
                    })}
                  </div>
                </section>
              );
            }

            return <ColorItem name={name} color={color} />;
          })}
      </div>
    </section>
  );
};

export default ColorGroup;
