import { FlexibleColumnLayout } from '@ui5/webcomponents-react';
import React, { useRef, useState } from 'react';
import AccountGrid from './AccountGrid';
import AccountObjectPage from './AccountObjectPage';

function Account({ utils, t }) {
  const gridRef = useRef();
  const objectPageRef = useRef();
  const [layout, setLayout] = useState('OneColumn');

  function changeLayout(layout) {
    setLayout(layout);
  }

  return (
    <FlexibleColumnLayout
      style={{ height: 850 }}
      layout={layout}
      startColumn={
        <div className="ag-theme-alpine" style={{ width: '100%', height: 850 }}>
          <AccountGrid
            t={t}
            utils={utils}
            changeLayout={changeLayout}
            forwardedRef={gridRef}
            objectPageRef={objectPageRef}
          ></AccountGrid>
        </div>
      }
      midColumn={
        <div style={{ border: '1px solid #babfc7', boxSizing: 'border-box' }}>
          <AccountObjectPage
            t={t}
            utils={utils}
            gridRef={gridRef}
            changeLayout={changeLayout}
            forwardedRef={objectPageRef}
          ></AccountObjectPage>
        </div>
      }
      endColumn={<div></div>}
    />
  );
}

export default Account;
