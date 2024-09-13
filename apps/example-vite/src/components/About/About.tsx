import { useState } from 'react';

import Button from '@ds-starter/ui/components/Button/Button';
import IconX from '@ds-starter/icons/lib/IconX';

import styles from './about.module.css';

const About = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        className={styles.trigger}
        variant="ghost"
        color="neutral"
        size="regular"
        aria-label="Open About"
        onPress={() => {
          setIsOpen(true);
        }}
      >
        About the App
      </Button>
      <aside
        className={styles.root}
        data-is-open={isOpen}
      >
        <section className={styles.content}>
          <h2>About the App</h2>
          <p>
            This Example Application is the part of the{' '}
            <a
              href="https://github.com/XOP/design-system-starter"
              title="Design System Starter (DSS) Template"
            >
              Design System Starter (DSS) Template
            </a>{' '}
            family.
          </p>

          <p>Explore parts of DSS:</p>
          <ul>
            <li>
              <a
                href="https://ds-starter-storybook.vercel.app/"
                title="DSS Storybook"
              >
                DSS Storybook
              </a>
            </li>
            <li>
              <a
                href="https://ds-starter-docs.vercel.app/"
                title="DSS Documentation Website"
              >
                DSS Docs Website
              </a>
            </li>
            <li>
              <a
                href="https://ds-starter-app-vite.vercel.app/"
                title="DSS Example Application"
              >
                DSS Example Application
              </a>
            </li>
          </ul>

          <p>NPM packages:</p>
          <ul>
            <li>
              <a
                href="https://www.npmjs.com/package/@ds-starter/fonts"
                title="@ds-starter/fonts"
              >
                @ds-starter/fonts
              </a>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/@ds-starter/icons"
                title="@ds-starter/icons"
              >
                @ds-starter/icons
              </a>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/@ds-starter/tokens"
                title="@ds-starter/tokens"
              >
                @ds-starter/tokens
              </a>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/@ds-starter/ui"
                title="@ds-starter/ui"
              >
                @ds-starter/ui
              </a>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/@ds-starter/tsconfig"
                title="@ds-starter/tsconfig"
              >
                @ds-starter/tsconfig
              </a>
            </li>
          </ul>

          <p>Github:</p>
          <ul>
            <li>
              <a
                href="https://github.com/XOP/design-system-starter"
                title="DSS Monorepo"
              >
                DSS Monorepo
              </a>
            </li>
          </ul>

          <Button
            className={styles.close}
            variant="ghost"
            color="accent"
            size="regular"
            aria-label="Close About"
            onPress={() => {
              setIsOpen(false);
            }}
          >
            <IconX />
          </Button>
        </section>
      </aside>
    </>
  );
};

export default About;
