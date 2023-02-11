import { FormControl, FormGroup, Input, InputLabel,Button, Typography,styled} from "@mui/material";
import { useState } from "react";
import {addUser} from '../service/api' 
import "./AddUser.css"




 const InputField = styled(FormGroup)`
 width:50%;
 height:100%;
 margin:auto;
 & > div {margin:10px}
 & > h5 {margin:auto;margin-top:20px}
 ;
  `

const initialValues={
    name:" ",
    username:" ", 
    email: " ",
    phone: " ",
}


const AddUser =  () =>{
    const [user,SetUser]=useState(initialValues)

    const onValueChange = (e) => {
    console.log(e.target.name   , e.target.value)
    SetUser({...user,[e.target.name] : e.target.value})  
    console.log(user)
    }

    const addUserDetails = async() => { 
    await addUser(user);
    }


    return( 
    <div className="userForm">
        <InputField>
        <Typography variant="h5">Fitness Club Registration</Typography>     
            <FormControl>
            <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name"/>
            </FormControl>

            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username"/>
            </FormControl>

            <FormControl>
                <InputLabel variant="Outlined">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email"/>
            </FormControl>

            <FormControl>
                <InputLabel variant="Outlined">Phone number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone"/> 
            </FormControl>

            <FormControl>
                <Button onClick= {() => addUserDetails()}  variant="contained"> Add User</Button>
            </FormControl>

            
            <a href="/UserList"><Button   onClick= {() => addUserDetails() }   variant="contained">Show Users</Button></a>
            

        </InputField>
    </div>
    )
}

export default AddUser;