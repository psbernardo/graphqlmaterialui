import React from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Vehicle from './Vehicle';
import Film from './Film';

const  People = (props) => {
    const { People } = props

    return (
      
        <Paper  sx={{
        marginBottom:'20px'
        
      }}>
          <Table>
            <TableHead>
              <TableRow key={"Fields"}>
                <TableCell  sx={{
                    fontSize: '20px', 
                     fontWeight: 'bold'
                    }}>
                    Fields
                </TableCell>
                <TableCell  sx={{
                    fontSize: '20px',  
                       fontWeight: 'bold'
                    }}>
                    Values
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={"Name"}>
                <TableCell size="small">Name</TableCell>
                <TableCell size="small">{People.name}</TableCell>
              </TableRow>
               <TableRow key={"Height"}>
                <TableCell size="small">Height</TableCell>
                <TableCell size="small">{People.height}</TableCell>
              </TableRow>
              <TableRow key={"Gender"}>
                <TableCell size="small">Gender</TableCell>
                <TableCell size="small">{People.gender}</TableCell>
              </TableRow>
                <TableRow  key={"HairColor"}>
                <TableCell size="small">Hair Color</TableCell>
                <TableCell size="small">{People.hairColor}</TableCell>
              </TableRow>
             
                <TableRow  key={"Vehicles"}> 
                    <TableCell>Vehicles</TableCell>
                  <TableCell colSpan="2">
                  <Vehicle vehicles={People?.vehicles}/>
                  </TableCell>
                </TableRow>

              <TableRow  key={"birthYear"}>
                <TableCell size="small">Birth Year</TableCell>
                <TableCell size="small">{People.birthYear}</TableCell>
              </TableRow>


                <TableRow  key={"Films"}>
                  <TableCell>Films</TableCell>
                  <TableCell colSpan="2">
                      <Film films={People?.films}></Film>
                  </TableCell>
                </TableRow>

              <TableRow  key={"Created"}>
                <TableCell size="small">Created</TableCell>
                <TableCell >{People.created}</TableCell>
              </TableRow>

             
            </TableBody>
          </Table>
        </Paper>
    
    );
  }

  export default People

