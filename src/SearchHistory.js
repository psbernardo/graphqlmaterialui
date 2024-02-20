import React from "react";


import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";



const  SearchHistory = (props) => {
    const { keyList,searchHistoryLoading } = props
    console.log(keyList)
      if (searchHistoryLoading) return "Loading...";
    return (
      
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell  
                    sx={{
                        fontSize: '17px',  
                        fontWeight: 'bold'
                        }}
                    >
                   Search Keyword
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {keyList?.map((key) => (
                <TableRow key={key}>
                    <TableCell  size="small">{key}</TableCell>
                </TableRow>
                 ))}
               
              
            </TableBody>
        </Table>
    
    );
}




  export default SearchHistory

