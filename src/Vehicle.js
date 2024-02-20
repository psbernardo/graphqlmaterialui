import React from "react";


import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";


const  Vehicle = (props) => {
  const { vehicles } = props


  
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
                    Vehicle Name
                    </TableCell>

                    <TableCell  
                        sx={{
                        fontSize: '17px', 
                        fontWeight: 'bold' 
                        }}
                    >
                    Model
                    </TableCell>

                    <TableCell  
                        sx={{
                        fontSize: '17px', 
                        fontWeight: 'bold' 
                        }}
                    >Value 1
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {vehicles?.map((vehicle) => (
                <TableRow key={vehicle?.name}>
                    <TableCell  size="small">{vehicle?.name}</TableCell>
                    <TableCell size="small"> {vehicle?.model}</TableCell>
                
                </TableRow>
         ))}
               
              
            </TableBody>
        </Table>
    
    );
  }

  export default Vehicle

