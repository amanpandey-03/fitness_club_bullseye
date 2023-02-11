import { TableBody, TableHead ,TableCell,Table,TableRow} from "@mui/material";
import {getUsers} from '../service/api' 
import { useEffect,useState } from "react";

const UserList =  () =>{
 
    const [user, setUsers] = useState()

    useEffect(()=> {
        getUserDetails();
    },[])

    const getUserDetails = async () =>{
        let response = await getUsers();
        console.log(response); 
    }
    return(
        <Table> 
            <TableHead>
                <TableRow>
                    <TableCell> Id </TableCell>    
                    <TableCell> Name </TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>

                </TableRow>
            </TableHead>

            <TableBody> 
            
            </TableBody>
        </Table>
        
    )
}

export default UserList;