import { PlopTypes } from '@turbo/gen';

const CATEGORIES = [
  'Form',
  'Navigation',
  'Feedback',
  'Content',
  'Status',
  'Data',
  'Overlay',
  'Date & Time',
];

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('awsm-ui-component', {
    description: 'Scaffolds a new UI Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the NAME of the component?',
      },
      {
        type: 'list',
        name: 'category',
        message: 'What is the CATEGORY of the component?',
        choices: CATEGORIES,
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/awsm-ui/src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/ui-component-core.hbs',
      },
      {
        type: 'add',
        path: 'packages/awsm-ui/src/components/{{pascalCase name}}/{{pascalCase name}}.css.ts',
        templateFile: 'templates/ui-component-css.hbs',
      },
      {
        type: 'add',
        path: 'packages/awsm-ui/src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/ui-component-stories.hbs',
      },
      {
        type: 'add',
        path: 'packages/awsm-ui/src/components/{{pascalCase name}}/index.ts',
        template:
          "export { default as {{pascalCase name}} } from './{{pascalCase name}}';",
      },
      {
        type: 'append',
        path: 'packages/awsm-ui/src/components/index.ts',
        template:
          "export { {{pascalCase name}} } from './{{pascalCase name}}';",
      },
    ],
  });
}
