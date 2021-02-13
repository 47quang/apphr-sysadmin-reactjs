import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import QHeaderTable from './QHeaderTable';

function QTable({ gridOptions }) {
  const { actions } = gridOptions;
  return (
    <>
      <QHeaderTable actions={actions}></QHeaderTable>
      <AgGridReact {...gridOptions}></AgGridReact>
    </>
  );
}

export default QTable;
