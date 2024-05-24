export const NAVIGATION_KEYS = {
  core: 'core',
  patterns: 'patterns',
  components: 'components',
} as const;

export const NAVIGATION = [
  {
    slug: NAVIGATION_KEYS.core,
    title: 'Core',
  },
  {
    slug: NAVIGATION_KEYS.patterns,
    title: 'Patterns',
  },
  {
    slug: NAVIGATION_KEYS.components,
    title: 'Components',
  },
];

export const COMPONENT_NAVIGATION = [
  {
    slug: '',
    title: 'Examples',
  },
  {
    slug: 'usage',
    title: 'Usage',
  },
];

export const COMPONENT_GROUPS = {
  form: 'Form',
  navigation: 'Navigation',
  feedback: 'Feedback',
  content: 'Content',
  status: 'Status',
  data: 'Data',
  overlay: 'Overlay',
  datetime: 'Date & Time',
};

export const COMPONENT_GROUPS_ORDER = [
  COMPONENT_GROUPS.form,
  COMPONENT_GROUPS.navigation,
  COMPONENT_GROUPS.feedback,
  COMPONENT_GROUPS.content,
  COMPONENT_GROUPS.status,
  COMPONENT_GROUPS.data,
  COMPONENT_GROUPS.overlay,
  COMPONENT_GROUPS.datetime,
];

export const DEFAULT = 'default';

export const EXAMPLE_SORT_KEYS = [
  'base',
  'color',
  'size',
  'variant',
  'disabled',
  'with',
];

export const EXAMPLE_STATE = {
  loading: 'loading',
  idle: 'idle',
} as const;

export const LS_PREFIX = 'dss';
export const LS_KEY_META = 'meta';

export const SIDEBAR_STATE = {
  opened: 'opened',
  closed: 'closed',
} as const;

export const COLOR_THEME = {
  light: 'light',
  dark: 'dark',
} as const;
