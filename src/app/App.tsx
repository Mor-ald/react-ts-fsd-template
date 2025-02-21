import AppRouter from './AppRouter';
import { DefaultLayout } from './layout/DefaultLayout';

/**
 * App component
 */
const App = () => {
  return (
    <DefaultLayout>
      <AppRouter />
    </DefaultLayout>
  );
};

export default App;
