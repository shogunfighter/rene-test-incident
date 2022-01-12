import React, { lazy, Suspense } from 'react';

const LazyIncident = lazy(() => import('./Incident'));

const Incident = props => (
  <Suspense fallback={null}>
    <LazyIncident {...props} />
  </Suspense>
);

export default Incident;
