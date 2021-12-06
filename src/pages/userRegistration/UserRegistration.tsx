import React from 'react'
import Grid from '@mui/material/Grid'
import { Box, Typography, Button, TextField} from '@material-ui/core'
import { Link } from 'react-router-dom';

import './UserRegistration.css';

function UserRegistration() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='bgimg2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form>
                        <Typography variant="h3" gutterBottom align='center' color="textPrimary" component='h3' className="text2">Register</Typography>
                        <TextField id="name" label="name" variant="outlined" name="name" margin="normal" fullWidth />
                        <TextField id="user" label="user" variant="outlined" name="user" margin="normal" fullWidth />
                        <TextField id="password" label="password" variant="outlined" name="password" margin="normal" type="password" fullWidth />
                        <TextField id="confirm password" label="confirm password" variant="outlined" name="confirm password" margin="normal" type="password" fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant="contained" color="secondary" className='btnCancel'>
                                    Cancel
                                </Button>
                                <Button type='submit' variant="contained" color="primary">
                                    Register
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    )
}

export default UserRegistration
