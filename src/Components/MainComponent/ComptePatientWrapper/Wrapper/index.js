import React from 'react';
import NavBar from '../../../NavBar';
import { Box, Button, Grid } from '@mui/material';
import styles from './styles';
import ListeRdv from '../ListeRdv';
import Profil from '../Profil';
import { ReactComponent as AddIcon } from '../../../../Assets/svgs/Union.svg';
import Settings from '../Settings';
import Dashboard from '../Dashboard';
import { useSelector } from 'react-redux';
import * as screens from '../../../../Constants/steps';

const Wrapper = () => {
    const stepAccount = useSelector(state => state.StepReducer.stepAccount);

    const children = () => {
        let result;
        switch (stepAccount) {
            case screens.ACCUEIL:
                result = <Dashboard />;
                break;
            case screens.RDV:
                result = <ListeRdv />;
                break;
            case screens.PROFIL:
                result = <Profil />;
                break;
            case screens.PARAMETRE:
                result = <Settings />;
                break;
            default:
                return null
        }
        return result;
    }

    return (
        <Grid container height={'100%'}>
            <Grid item xs={2}>
                <NavBar />
            </Grid>

            <Grid item xs={10} sx={styles.container}>
                <Grid item md={12}>
                    <Box sx={styles.close}></Box>
                </Grid>

                {children()}

                <Button sx={styles.add}>
                    <AddIcon />
                </Button>
            </Grid>
        </Grid>
    )
}

export default Wrapper;