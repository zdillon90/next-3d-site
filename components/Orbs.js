import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/3gBEp9mMnQr0xxJF/scene.splinecode" />
      </Suspense>
    </div>
  );
}
