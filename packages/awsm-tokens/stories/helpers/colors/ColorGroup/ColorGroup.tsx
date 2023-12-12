import React from 'react';

import ColorItem from '../ColorItem/ColorItem';

import {
  group,
  subgroup,
  heading,
  subheading,
  content,
  subcontent,
} from './ColorGroup.css';

import { ColorTokensData } from '../Colors/Colors';

const ColorGroup = ({ name: groupName, data }: ColorTokensData) => {
  if (groupName.includes('Rgb')) return null;

  return (
    <section className={group}>
      <h2 className={heading}>{groupName}</h2>

      <div className={content}>
        {data &&
          data.length &&
          data.map(({ name, color, data: nestedData }) => {
            if (nestedData) {
              return (
                <section className={subgroup}>
                  <h3 className={subheading}>{name}</h3>
                  <div className={subcontent}>
                    {nestedData.map(
                      ({ name: nestedName, color: nestedColor }) => {
                        return (
                          <ColorItem
                            name={`color.${groupName}.${name}.${nestedName}`}
                            color={nestedColor}
                          />
                        );
                      },
                    )}
                  </div>
                </section>
              );
            }

            if (color) {
              return (
                <ColorItem name={`color.${groupName}.${name}`} color={color} />
              );
            }
          })}
      </div>
    </section>
  );
};

export default ColorGroup;
