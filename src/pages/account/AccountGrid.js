import AccountApi from '@Api/account';
import { AgGridReact } from 'ag-grid-react';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';

const accountSchema = [
  {
    headerName: 'Id',
    field: 'id',
    sortable: true,
    filter: true,
    checkboxSelection: true
  },
  {
    headerName: 'Country',
    field: 'country'
  },
  {
    headerName: 'Email',
    field: 'email'
  },
  {
    headerName: 'Address',
    field: 'address'
  },
  {
    headerName: 'Sub domain',
    field: 'subDomain'
  },
  {
    headerName: 'Status',
    field: 'status'
  },
  {
    headerName: 'Tax code',
    field: 'taxCode'
  },
  {
    headerName: 'Created at',
    filter: 'agDateColumnFilter',
    field: 'createdAt'
    // flex: 1 // fill the remaining empty space of the grid
  }
];

function AccountGrid({ t, utils, changeLayout, objectPageRef, forwardedRef }) {
  const [accounts, setAccounts] = useState([]);
  const [rowSelection, setRowSelection] = useState('multiple');
  const gridApi = useRef();

  function onStartColumnClick(row) {
    objectPageRef.current.changeAccount(row);
    setRowSelection('single');
    changeLayout('TwoColumnsStartExpanded');
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

  function deselectAll() {
    gridApi.current.deselectAll();
  }

  useImperativeHandle(
    forwardedRef,
    () => ({
      setRowSelection,
      deselectAll
    }),
    []
  );

  const gridOptions = {
    onGridReady: params => {
      params.api.sizeColumnsToFit();
      gridApi.current = params.api;
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
    rowSelection,
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
