import React from 'react';
import NavBar from '../../../NavBar';
import { Grid } from '@mui/material';
import styles from './styles';

const Wrapper = () => {
    return (
        <Grid container height={'100%'}>
            <Grid item md={3}>
                <NavBar />
            </Grid>
            
            <Grid item md={9} sx={styles.container}>
                {/* Les autres composants */}
            </Grid>
        </Grid>
    )
}

export default Wrapper;