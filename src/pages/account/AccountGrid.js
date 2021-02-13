import { AgGridReact } from 'ag-grid-react';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccounts } from '@Action/account';
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
  const gridApi = useRef();
  const dispatch = useDispatch();
  const accounts = useSelector(state =>
    state.account.accounts.map(acc => {
      acc.createdAt = utils.formatDate(acc.createdAt);
      acc.country = 'Viet Nam';
      return acc;
    })
  );

  console.log(accounts);

  const [rowSelection, setRowSelection] = useState('multiple');

  function onStartColumnClick(row) {
    objectPageRef.current.changeAccount(row);
    setRowSelection('single');
    changeLayout('TwoColumnsStartExpanded');
  }

  useEffect(() => {
    dispatch(fetchAccounts({ size: 100, page: 0 }));
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleResize(e) {
    if (e) e.preventDefault();
    if (gridApi.current) gridApi.current.sizeColumnsToFit();
  }

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
      gridApi.current = params.api;
      params.api.sizeColumnsToFit();
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
