import React, { useState, useEffect } from 'react';
import AccountApi from '@Api/account';
import accountSchema from './AccountSchema';
import { AgGridReact } from 'ag-grid-react';

const FCLLayout = {
  OneColumn: 'OneColumn',
  TwoColumnsStartExpanded: 'TwoColumnsStartExpanded',
  TwoColumnsMidExpanded: 'TwoColumnsMidExpanded',
  ThreeColumnsMidExpanded: 'ThreeColumnsMidExpanded',
  ThreeColumnsEndExpanded: 'ThreeColumnsEndExpanded',
  ThreeColumnsStartExpandedEndHidden: 'ThreeColumnsStartExpandedEndHidden',
  ThreeColumnsMidExpandedEndHidden: 'ThreeColumnsMidExpandedEndHidden',
  MidColumnFullScreen: 'MidColumnFullScreen',
  EndColumnFullScreen: 'EndColumnFullScreen'
};

function AccountGrid({ t, utils, changeLayout, objectPageRef }) {
  const [accounts, setAccounts] = useState([]);

  function onStartColumnClick(row) {
    objectPageRef.current.changeAccount(row);
    changeLayout(FCLLayout.TwoColumnsStartExpanded);
  }

  useEffect(async () => {
    const { payload } = await AccountApi.getAccounts({
      size: 100,
      page: 0
    });
    setAccounts(
      payload.data.map(i => {
        i.createdAt = utils.formatDate(i.createdAt);
        i.country = 'vietnam';
        return i;
      })
    );
  }, []);
  function headerCheckboxSelection(params) {
    return params.columnApi.getRowGroupColumns().length === 0;
  }

  const gridOptions = {
    onGridReady: params => {
      params.api.sizeColumnsToFit();
      // gridApi.current = params.api
    },
    columnDefs: JSON.parse(JSON.stringify(accountSchema)).map(i => {
      i.headerName = t(i.headerName);
      if (i.field === 'id') {
        i.headerCheckboxSelection = headerCheckboxSelection;
      }
      return i;
    }),
    rowData: accounts,
    animateRows: true,
    defaultColDef: {
      width: 150,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      resizable: true
    },
    pagination: true,
    rowSelection: 'multiple',
    onRowClicked: e => {
      onStartColumnClick(e.data);
    },
    allowDragFromColumnsToolPanel: true
  };

  return (
    <AgGridReact {...gridOptions} style={{ overflowX: 'hidden' }}></AgGridReact>
  );
}

export default AccountGrid;
