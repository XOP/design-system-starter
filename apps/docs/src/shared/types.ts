import type { ComponentProps, JSXElementConstructor } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

type AllProps =
  | keyof React.JSX.IntrinsicElements
  | JSXElementConstructor<unknown>;

export type ComponentStruct = Meta<ComponentProps<AllProps>>;

export type Story = StoryObj<ComponentProps<AllProps>>;
export type Stories = Record<string, Story>;
export type StoriesCollection = Array<[string, Story | undefined]>;
