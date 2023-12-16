import { NAVIGATION } from './globals';

export const getCollectionSlug = (name) =>
  NAVIGATION.find((entry) => entry.title === name)?.slug;

export const getCollectionName = (slug) =>
  NAVIGATION.find((entry) => entry.slug === slug)?.title;
