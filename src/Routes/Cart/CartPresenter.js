import React, { useContext, useEffect , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Input from '../../Component/Input';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


export default  ({qty}) => {
  const classes = useStyles();
  // const listArray = 
  const x = Number(qty.value);  

  const list= JSON.parse(sessionStorage.getItem("cart"));

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={2}>
              상세정보
            </TableCell>
            <TableCell align="right">가격</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>상품명</TableCell>
            <TableCell align="center" style={{ width: 200 }}>
              수량
            </TableCell>
            <TableCell align="right">가격</TableCell>
          </TableRow>
        </TableHead>
        {list.map((p) => (
          <TableBody>
            <TableRow key={p.id}>
              <TableCell>{p.productname}</TableCell>
              <TableCell align="right">
                <Input key="1" id="price1" style={{ width: 10 }} {...qty} />
              </TableCell>
              <TableCell align="right">{p.price}원</TableCell>
            </TableRow>
          </TableBody>
        ))}
      </Table>
      <button />
    </TableContainer>
  );
}