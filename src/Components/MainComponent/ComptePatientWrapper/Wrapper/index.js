import React from 'react';
import NavBar from '../../../NavBar';
import { Box, Button, Grid } from '@mui/material';
import styles from './styles';
import ListeRdv from '../ListeRdv';
import Profil from '../Profil';
import { ReactComponent as AddIcon } from '../../../../Assets/svgs/Union.svg';
import Settings from '../Settings';
import DetailRdv from '../DetailRDV';

const Wrapper = () => {
    return (
        <Grid container height={'100%'}>
            <Grid item xs={2}>
                <NavBar />
            </Grid>
            <Grid item xs={10} sx={styles.container}>
                <Grid item md={12}>
                    <Box sx={styles.close}></Box>
                </Grid>
                <Grid>
                    <DetailRdv />
                </Grid>
                <Button sx={styles.add}>
                    <AddIcon />
                </Button>
            </Grid>
        </Grid>
    )
}

export default Wrapper;