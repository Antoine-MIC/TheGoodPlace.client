import {useEffect,useState} from 'react'
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  
function Coffee() {
  const[data,setData] = useState([])
  useEffect(() => {
    axios.get('https://goodplacewebservice20220714145722.azurewebsites.net/api/Data/lastRecords/70B3D54750100259/')
    .then(res => {
      console.log("",res.data)
      setData(res.data)
    })
    .catch(err => console.log(err))
  },[])

const title = data.map((data,index) => {
  return(
          <tr>
            <th>{data.container}</th>
          </tr>
  )
})

const value = data.map((data,index) => {
    return(
            <tr>
              <th>{data.value}</th>
            </tr>
    )
  })

  return (
    <div className="Coffee">
        <h1>Coworking</h1>
        <center>
        <table>
    <thead>
            <th colspan="2"></th>
    </thead>
    <tbody>
            <td>{title}</td>
            <td>{value}</td>
    </tbody>
</table>
</center>
    </div>
  );
}

export default Coffee;
