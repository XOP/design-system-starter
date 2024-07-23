import { useStoryLoad } from '../../shared/hooks/useStoryLoad.ts';

import SourceCode from '../SourceCode/SourceCode.tsx';

import styles from './ExampleContent.module.css';

interface ExampleContentProps {
  name: string;
  componentName: string;
  componentDir?: string;
}

const ExampleContent = (props: ExampleContentProps) => {
  const { name, componentName, componentDir } = props;

  const [struct, data, isLoading] = useStoryLoad(
    name,
    componentName,
    componentDir
  );

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <span className={styles.loading_body} />
        <span className={styles.loading_actions} />
      </div>
    );
  }

  if (!data) return;
  if (data?.parameters?.hidden) return;

  const { component: AnyComponent } = struct;
  const Component = AnyComponent as JSX.ElementType;

  // biome-ignore lint: *
  let Variant: any;

  if (data.render) {
    if (data.args) {
      const Template = data.render as JSX.ElementType;

      Variant = () => <Template {...data.args} />;
    } else {
      Variant = data.render;
    }
  } else if (Component) {
    Variant = () => <Component {...data.args} />;
  }

  if (!Variant) return;

  const exampleContent = (
    <>
      <div className={styles.example}>
        <div className={styles.content}>
          <Variant />
        </div>
      </div>
      <div className={styles.code}>
        <SourceCode>{Variant()}</SourceCode>
      </div>
    </>
  );

  return <div className={styles.root}>{exampleContent}</div>;
};

export default ExampleContent;
