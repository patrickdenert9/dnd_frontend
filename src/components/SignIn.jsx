import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React, { useRef } from 'react'

const SignIn = () => {
    const username = useRef();
    const password = useRef();

    async function submit() {
        const url = "http://localhost:8080/users/login"

        const request = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username.current.value,
                password: password.current.value,
            })
        }

        const response = await fetch(url, request);

        const jwt = await response.text();
        localStorage.setItem("jwt",jwt);               //save jwt to localstorage
        
        username.current.value = "";
        password.current.value = "";
    }

  return (
    <Box sx={{ display: "flex", margin:'auto', width:"50%" ,height:"75%", alignItems: "center", justifyContent:'center'}}>
        <Paper sx={{ height:"90%", width:"90%"}} elevation={12}>
            <Typography margin="5%" variant='h4' textAlign="center">Sign In</Typography>
            <TextField sx={{ margin:"5%", width:"90%"}} required type='text' label="username" inputRef={username}/>
            <br />
            <TextField sx={{ margin:"5%", width:"90%"}} required type='password' label="password" inputRef={password}/>
            <br />
            <Button sx={{ backgroundColor:"green", margin:"5%", width:"90%"}} variant='contained' onClick={submit}>Sign In</Button>
        </Paper>
  </Box>);
  
}

export default SignIn