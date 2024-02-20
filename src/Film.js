import React from "react";


import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";


const  Film = (props) => {
    const {films} = props

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
                    Title
                    </TableCell>

                      <TableCell  
                        sx={{
                        fontSize: '17px', 
                        fontWeight: 'bold' 
                        }}
                    >
                    Episode ID
                    </TableCell>

                    <TableCell  
                        sx={{
                        fontSize: '17px', 
                        fontWeight: 'bold' 
                        }}
                    >
                    Director
                    </TableCell>

                    <TableCell  
                        sx={{
                        fontSize: '17px', 
                        fontWeight: 'bold' 
                        }}
                    >Producer
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>

                  {films?.map((film) => (
                 <TableRow key={film.title}>
                    <TableCell  size="small">{film.title}</TableCell>
                     <TableCell  size="small">{film.episodeId}</TableCell>
                    <TableCell  size="small">{film.director}</TableCell>
                   <TableCell  size="small">{film.producer}</TableCell>
                </TableRow>
         ))}
               
            </TableBody>
        </Table>
    
    );
  }

  export default Film

