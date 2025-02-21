import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@/entities/theme/index.ts';
import App from './App.tsx';
import { rootStore } from './rootStore.ts';
import { BrowserRouter } from 'react-router-dom';

import '@/shared/base.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ReduxProvider store={rootStore}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ReduxProvider>
    </BrowserRouter>
  </StrictMode>,
);
