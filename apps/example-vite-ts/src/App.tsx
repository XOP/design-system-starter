import { Provider } from 'jotai';

import Cabin from './components/Cabin/Cabin';
import Controls from './components/Controls/Controls';
import Panel from './components/Panel/Panel';
import Space from './components/Space/Space';

function App() {
  return (
    <Provider>
      <main>
        <Space />
        <Cabin />
        <Panel />
        <Controls />
      </main>
    </Provider>
  );
}

export default App;
