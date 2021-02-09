export default [
  {
    headerName: 'Id',
    field: 'id',
    sortable: true,
    filter: true,
    checkboxSelection: true,
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
