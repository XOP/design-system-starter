import { Provider } from 'jotai';

import About from './components/About/About';
import Cabin from './components/Cabin/Cabin';
import Controls from './components/Controls/Controls';
import Meta from './components/Meta/Meta';
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
        <About />
        <Meta />
      </main>
    </Provider>
  );
}

export default App;
