import { Box, Fade, Grid, Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'
import Payment from '../../Payment';

export default function PriseRDVWrapper({ open }) {

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
                    <Grid xs={12}>
                        <Payment />
                    </Grid>
                </Grid>
            </Box>
        </Fade>
    )
}
