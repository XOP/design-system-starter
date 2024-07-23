import { useState, useEffect } from 'react';

import { setExampleState } from '../../store/store';
import { EXAMPLE_STATE } from '../../shared/globals';

import type { ComponentStruct, Story } from '../types';

export const useStoryLoad = (
  name: string,
  componentName: string,
  dir: string | undefined,
): [ComponentStruct, Story, boolean] => {
  const componentDir = dir || componentName;

  const [data, setData] = useState<Story>({});
  const [struct, setStruct] = useState<Story>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function load() {
      const { [name]: _data } = await import(
        `../../../../../packages/dss-ui/src/components/${componentDir}/${componentName}.stories.tsx`
      );

      const { default: _struct } = await import(
        `../../../../../packages/dss-ui/src/components/${componentDir}/${componentName}.stories.tsx`
      );

      setIsLoading(false);
      setData(_data);
      setStruct(_struct);

      setExampleState(EXAMPLE_STATE.idle);
    }

    load();
  }, [name, componentDir, componentName]);

  return [struct, data, isLoading];
};
