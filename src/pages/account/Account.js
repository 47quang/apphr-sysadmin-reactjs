import React, { useEffect, useState } from 'react';
import AccountApi from '@Api/account';
import { AgGridReact } from 'ag-grid-react';
import accountSchema from './AccountSchema';

function Account({ t }) {
  const [accounts, setAccounts] = useState([]);

  useEffect(async () => {
    const { payload } = await AccountApi.getAccounts({
      size: 100,
      page: 0,
    });
    setAccounts(
      payload.data.map((i) => {
        i.country = 'VietNam';
        return i;
      })
    );
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ width: '100%', height: 800 }}>
      <AgGridReact
        columnDefs={JSON.parse(JSON.stringify(accountSchema)).map((i) => {
          i.headerName = t(i.headerName);
          return i;
        })}
        rowData={accounts}
      ></AgGridReact>
    </div>
  );
}

export default Account;
