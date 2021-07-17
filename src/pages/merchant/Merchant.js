import { withStyles, makeStyles } from '@material-ui/core/styles';
import { fetchMerchants } from '../../stores/actions/merchant';
import TableContainer from '@material-ui/core/TableContainer';
import { useDispatch, useSelector } from 'react-redux';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import React, { useEffect } from 'react';
import { CButton, CIcon } from '@coreui/react';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

function Merchant(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const merchants = useSelector(state => state.merchant.merchants);
  useEffect(() => {
    dispatch(fetchMerchants());
  }, []);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell
                style={{ border: '1px solid #d4d3d3', boxSizing: 'border-box' }}
              >
                Id
              </StyledTableCell>
              <StyledTableCell
                style={{ border: '1px solid #d4d3d3', boxSizing: 'border-box' }}
              >
                Code
              </StyledTableCell>
              <StyledTableCell
                style={{ border: '1px solid #d4d3d3', boxSizing: 'border-box' }}
              >
                Tên
              </StyledTableCell>
              <StyledTableCell
                style={{ border: '1px solid #d4d3d3', boxSizing: 'border-box' }}
              >
                Username
              </StyledTableCell>
              <StyledTableCell
                style={{ border: '1px solid #d4d3d3', boxSizing: 'border-box' }}
              >
                Điện thoại
              </StyledTableCell>
              <StyledTableCell
                style={{ border: '1px solid #d4d3d3', boxSizing: 'border-box' }}
              >
                Email
              </StyledTableCell>
              <StyledTableCell
                style={{ border: '1px solid #d4d3d3', boxSizing: 'border-box' }}
              >
                Địa chỉ
              </StyledTableCell>
              <StyledTableCell
                style={{ border: '1px solid #d4d3d3', boxSizing: 'border-box' }}
              >
                Mã số thuế
              </StyledTableCell>
              <StyledTableCell
                style={{ border: '1px solid #d4d3d3', boxSizing: 'border-box' }}
              >
                Hành động
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {merchants.map(row => (
              <StyledTableRow key={row.id} style={{ boxSizing: 'border-box' }}>
                <StyledTableCell
                  style={{
                    border: '1px solid #d4d3d3',
                    boxSizing: 'border-box'
                  }}
                  component="th"
                  scope="row"
                >
                  {row.id}
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    border: '1px solid #d4d3d3',
                    boxSizing: 'border-box'
                  }}
                >
                  {row.code}
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    border: '1px solid #d4d3d3',
                    boxSizing: 'border-box'
                  }}
                >
                  {row.name}
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    border: '1px solid #d4d3d3',
                    boxSizing: 'border-box'
                  }}
                >
                  {row.username}
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    border: '1px solid #d4d3d3',
                    boxSizing: 'border-box'
                  }}
                >
                  {row.phone}
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    border: '1px solid #d4d3d3',
                    boxSizing: 'border-box'
                  }}
                >
                  {row.email}
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    border: '1px solid #d4d3d3',
                    boxSizing: 'border-box'
                  }}
                >
                  {row.address}
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    border: '1px solid #d4d3d3',
                    boxSizing: 'border-box'
                  }}
                >
                  {row.taxCode}
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    border: '1px solid #d4d3d3',
                    boxSizing: 'border-box'
                  }}
                >
                  <CButton
                    size="sm"
                    className="btn-facebook btn-brand mr-1 mb-1"
                    onClick={() => props.history.push(`merchant/${row.id}`)}
                  >
                    Xem
                  </CButton>
                  <CButton size="sm" className="btn-youtube btn-brand mr-1">
                    Xóa
                  </CButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Merchant;
