import { useEffect, useMemo, useState } from 'react';

import { atom, useAtom } from 'jotai';

import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import { loadEmittersPlugin } from '@tsparticles/plugin-emitters';
import { loadEmittersShapeSquare } from '@tsparticles/plugin-emitters-shape-square';
import { loadLifeUpdater } from '@tsparticles/updater-life';

import type { ISourceOptions } from '@tsparticles/engine';

import styles from './space.module.css';

export const shipSpeed = atom<number>(15);

const Space = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine, false);
      await loadEmittersShapeSquare(engine, false);
      await loadEmittersPlugin(engine, false);
      await loadLifeUpdater(engine, false);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const [speed] = useAtom(shipSpeed);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: '#010101',
      },
      particles: {
        number: {
          value: 120,
        },
        color: {
          value: '#ffffff',
        },
        life: {
          count: 1,
          duration: {
            value: 6,
          },
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: 1,
        },
        size: {
          value: 3,
        },
        move: {
          enable: true,
          speed: speed,
          decay: 0.01,
          direction: 'outside',
          straight: true,
          outModes: 'destroy',
          trail: {
            enable: true,
            length: 12,
            fill: {
              color: '#000000',
            },
          },
        },
      },
      emitters: [
        {
          position: {
            x: 50,
            y: 45,
          },
          size: {
            width: 96,
            height: 36,
          },
          rate: {
            quantity: 10,
            delay: 0.1,
          },
        },
      ],
    }),
    [speed]
  );

  if (init) {
    return (
      <Particles
        id="space"
        options={options}
      />
    );
  }

  return <div className={styles.root} />;
};

export default Space;
