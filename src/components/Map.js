import {useEffect,useState} from 'react'
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function Map() {
  const[data,setData] = useState([])
  useEffect(() => {
    axios.get('https://goodplacewebservice20220714145722.azurewebsites.net/api/Data')
    .then(res => {
      console.log("",res.data)
      setData(res.data)
    })
    .catch(err => console.log(err))
  },[])

const arr = data.map((data,index) => {
  return(
          <tr>
            <th>{data.devEUI}</th>
            <th>{data.devType}</th>
            <th>{data.deviceName}</th>
            <th>{data.container}</th>
            <th>{data.value}</th>
          </tr>
  )
})

  return (
    <div className="Map">
      <header className="App-header">
       
        <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <tr>
          <th>devEUI</th>
            <th>devType</th>
            <th>deviceName</th>
            <th>container</th>
            <th>value</th>
          </tr>
    {arr}

        </Table>
        </TableContainer>
      </header>
    </div>
  );
}

export default Map;
