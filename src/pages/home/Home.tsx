import React from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row"  alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='title'>Welcome!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='title'>How you're feeling right now?</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button className='button' variant="outlined">Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/z54AgWQ.gif" className="gif"  />
                </Grid>
                <Grid xs={12} className='posts'>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;