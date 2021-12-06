import React, {useState, ChangeEvent} from 'react';
import { Box, Typography, TextField, Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import Grid from '@mui/material/Grid';


function Login() {

    const [userLogin, setUserLogin] = useState<UserLogin>({
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            token: ''
        }
        )

function updatedModel(e: ChangeEvent<HTMLInputElement>) {

    setUserLogin({
        ...userLogin,
        [e.target.name]: e.target.value
    })
}

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log('userLogin' + userLogin);

}

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom align='center' color="textPrimary" component='h3' className="text">Login</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="user" label="user" variant="outlined" name="usuario" margin="normal" fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="password" label="password" variant="outlined" name="password" margin="normal" type="password" fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                            <Button type='submit' variant="contained" color="primary">
                                Sign In
                            </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom>Don't have an account yet?</Typography>
                        </Box>
                        <Link to='/userregistration'>
                            <Typography variant="subtitle1" gutterBottom align='center' className='text'>Sign up</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className="bgimg">
            </Grid>
        </Grid>
    )
}

export default Login;

