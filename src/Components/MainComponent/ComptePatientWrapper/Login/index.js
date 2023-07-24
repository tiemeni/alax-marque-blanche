import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Login from '../../../Auth/Login';
import { checkEmailValidity, checkPassValidity } from '../../../Auth';
import styles from './styles';

export default function ComptePatientWrapper() {

    return (
        <Grid container height={'100%'}>
            <Grid item md={4} sm={5} sx={styles.leftPanel} className='left-panel'>
                <Typography sx={styles.pageTitle}>Compte<br/>patient</Typography>
            </Grid>
            <Grid item md={8} sm={7} xs={12} sx={styles.rightPanel}>
                <Login checkEmail={checkEmailValidity} checkPass={checkPassValidity} />
            </Grid>
        </Grid>
    );
}