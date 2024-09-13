import { useAtom } from 'jotai';

import Switch from '@ds-starter/ui/components/Switch/Switch';

import { shipSpeed } from '../Space/Space';

const SpeedToggle = () => {
  const [speed, setSpeed] = useAtom(shipSpeed);

  const speedLabel = (speed: number) => {
    return speed > 10 ? 'Hyperdrive' : 'Coasting';
  };

  const handleChange = () => {
    const nextSpeed = speed > 10 ? 2 : 15;

    setSpeed(nextSpeed);
  };

  return (
    <Switch
      onChange={handleChange}
      defaultSelected
    >
      {speedLabel(speed)}
    </Switch>
  );
};

export default SpeedToggle;
