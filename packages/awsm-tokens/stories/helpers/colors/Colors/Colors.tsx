import React from 'react';

import { tokens } from '../../../../dist/tokens.esm';

import ColorGroup from '../ColorGroup/ColorGroup';

import { root } from './Colors.css';

const { color } = tokens;

export interface ColorTokenData {
  name: string;
  color: string;
}
export interface ColorGroupData {
  name: string;
  color?: string;
  data?: ColorTokenData[];
}
export interface ColorTokensData {
  name: string;
  data: ColorGroupData[];
}

const dictionary = Object.entries(color).reduce<ColorTokensData[]>(
  (acc, [group, groupObj]) => {
    let groupData;

    if (typeof groupObj === 'string') {
      groupData = [
        {
          name: group,
          color: groupObj,
        },
      ];
    } else {
      groupData = Object.entries(groupObj).map(([colorKey, colorValue]) => {
        let data;

        if (typeof colorValue === 'string') {
          data = {
            color: colorValue,
          };
        } else {
          const colorData = Object.entries(colorValue).map(
            ([deepKey, deepValue]) => ({
              name: deepKey,
              color: deepValue,
            }),
          );

          data = {
            data: colorData,
          };
        }

        return {
          name: colorKey,
          ...data,
        };
      });
    }

    return [
      ...acc,
      {
        name: group,
        data: groupData,
      },
    ];
  },
  [],
);

const Colors = () => {
  return (
    <div className={`${root} sb-unstyled`}>
      {dictionary.map(({ name, data }) => {
        return <ColorGroup name={name} data={data} />;
      })}
    </div>
  );
};

export default Colors;
