import React, { useEffect, useState } from 'react';
import AccountApi from '@Api/account';
import { AgGridReact } from 'ag-grid-react';
import accountSchema from './AccountSchema';
import { FlexibleColumnLayout } from '@ui5/webcomponents-react';
import ObjectPageAccount from './ObjectPageAccount';

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

function AllAccount({ t, utils }) {
  const [layout, setLayout] = useState(FCLLayout.OneColumn);
  const [selectedRow, setSelectedRow] = useState({});

  const onStartColumnClick = row => {
    setSelectedRow(row);
    setLayout(FCLLayout.TwoColumnsStartExpanded);
  };

  const [accounts, setAccounts] = useState([]);
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
    getRowNodeId: d => d._id,
    allowDragFromColumnsToolPanel: true
  };

  return (
    <FlexibleColumnLayout
      style={{
        height: 800
      }}
      layout={layout}
      startColumn={
        <div className="ag-theme-alpine" style={{ width: '100%', height: 800 }}>
          <AgGridReact {...gridOptions}></AgGridReact>
        </div>
      }
      midColumn={
        <div>
          <ObjectPageAccount data={selectedRow} />
        </div>
      }
      endColumn={<div></div>}
    />
  );
}

export default AllAccount;
