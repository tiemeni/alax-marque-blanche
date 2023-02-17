import { Box, Fade, Grid, Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import Payment from '../../Payment';
import Motif from "../../Motif"
import ChoixClinique from '../../ChoixClinique';
import ChoixPraticien from '../../ChoixPraticien';
import ChoixDate from '../../DateRdv';
import { STEP0, STEP1, STEP2, STEP3, STEP4 } from '../../../Constants/steps';
import { getActuelStepById } from '../../../Helpers';
import Login from '../../Auth/Login';
import Register from '../../Auth/Register';
import Auth from '../../Auth';
import PaymentGroupCard from '../../Payment/PaymentGroupCard';
import { VisibilityRounded } from '@mui/icons-material';

export default function PriseRDVWrapper({ open }) {
    const allSteps = useSelector(state => state.StepReducer.steps)
    const actualStep = useSelector(state => state.StepReducer.activeStepIndex);
    const RenderBody = () => {
        let result;
        switch (actualStep) {
            case STEP0:
                switch (getActuelStepById(allSteps, STEP0)?.subStep) {
                    case STEP0:
                        result = <Motif />; break;
                    case STEP1:
                        result = <ChoixClinique />; break;
                    case STEP2:
                        result = <ChoixPraticien />; break;
                    default:
                        return null
                }; break;
            case STEP1:
                result = <ChoixDate />; break;
            case STEP2:
                switch (getActuelStepById(allSteps, STEP2)?.subStep) {
                    case STEP0:
                        result = <Auth />; break;
                    default:
                        return null
                }; break;
            case STEP3:
                result = <Payment />; break;
            case STEP4:
                result = <p>recap</p>; break;
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
