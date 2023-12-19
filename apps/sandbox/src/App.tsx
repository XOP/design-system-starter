import { useState } from 'react';

import Button from '@awsm/ui/components/Button/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button onPress={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </div>
  );
}

export default App;
