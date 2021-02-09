export default [
  {
    headerName: 'Id',
    field: 'id',
    sortable: true,
    filter: true,
    checkboxSelection: true,
    floatingFilter: true,
  },
  {
    headerName: 'Country',
    field: 'country',
    floatingFilter: true,
  },
  {
    headerName: 'Email',
    field: 'email',
    floatingFilter: true,
  },
  {
    headerName: 'Address',
    floatingFilter: true,
    field: 'address',
  },
  {
    headerName: 'Sub domain',
    floatingFilter: true,
    field: 'subDomain',
  },
  {
    headerName: 'Status',
    floatingFilter: true,
    field: 'status',
  },
  {
    headerName: 'Tax code',
    floatingFilter: true,
    field: 'taxCode',
  },
  {
    headerName: 'Created at',
    filter: 'agDateColumnFilter',
    floatingFilter: true,
    field: 'createdAt',
    // flex: 1 // fill the remaining empty space of the grid
  },
];
