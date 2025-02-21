import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';

import { Spinner } from '@/shared/ui';

/**
 * App router component
 */
const AppRouter = () => {
  // Home page
  const Home = React.lazy(() => import('../pages/home'));

  return (
    <React.Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Suspense>
  );
};

export default AppRouter;
