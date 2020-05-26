import React, { useContext, useEffect , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Input } from '@material-ui/core';
import styled from 'styled-components';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Container = styled(TableContainer)`
  width:100%;
  display:flex;
  height:100%;
  margin-top:40px;
  overflow-x:unset;
`;

const ETable= styled(Table)`
`;

const ETableHead = styled(TableHead)`
  width:600px;
`;

export default  ({qty}) => {
  const classes = useStyles();
  // const listArray = 
  const x = Number(qty.value);  

  const list= JSON.parse(sessionStorage.getItem("cart"));

  return (
    <Container component={Paper}>
      <ETable  aria-label="spanning table">
        <ETableHead>
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
        </ETableHead>
        {list.map((p) => {
          var [value,setValue] = useState(0);
          return (
            <TableBody>
              <TableRow key={p.id}>
                <TableCell>{p.productname}</TableCell>
                <TableCell align="right">
                  <Input
                    style={{ width: 40 }}
                    type="number"
                    onChange={(e) => {
                      value = Number(e.target.value);
                      return setValue(value);
                    }}
                  />
                </TableCell>
                <TableCell style={{ width: 100 }} align="right">{p.price * value}원</TableCell>
              </TableRow>
            </TableBody>
          );
        })}
        
      </ETable>
    </Container>
  );
}