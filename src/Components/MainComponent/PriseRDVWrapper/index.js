import { Box, Fade, Grid, Step, StepLabel, Stepper } from '@mui/material'
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux';
import Payment from '../../Payment';
import Motif from "../../Motif"
import ChoixClinique from '../../ChoixClinique';
import ChoixPraticien from '../../ChoixPraticien';

export default function PriseRDVWrapper({ open }) {

    const actualStep = useSelector(state => state.StepReducer.activeStepIndex);
    const RenderBody = () => {
        let result;
        switch (1) {
            case 0:
                result = <Motif />; break;
            case 1:
                result = <ChoixClinique />; break;
            case 2:
                result = <ChoixPraticien />; break;
            case 3:
                result = <Payment />; break;
            default:
                result = null
        }
        return result;
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        height: '85%',
        bgcolor: 'background.paper',
        border: '1px solid #DDD',
        boxShadow: 10,
        p: 4,
    };

    const steps = [
        'Renseignements',
        'RDV disponibles',
        'Vos informations',
        'Paiement',
        'Récapitulatif',
    ];

    return (
        <Fade in={open}>
            <Box sx={style}>
                <Stepper activeStep={0} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Grid class="box_centre" container spacing={0.5}>
                    <Grid xs={12} >
                        {RenderBody()}
                    </Grid>
                </Grid>
            </Box>
        </Fade>
    )
}
