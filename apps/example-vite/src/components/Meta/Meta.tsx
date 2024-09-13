import styles from './meta.module.css';

const year = new Date().getFullYear();

const Meta = () => {
  return (
    <footer className={styles.root}>
      Design System Starter - Example Vite TS |{' '}
      <a
        href="https://github.com/XOP"
        title="XOP Github"
      >
        XOP
      </a>{' '}
      2023 - {year}
    </footer>
  );
};

export default Meta;
