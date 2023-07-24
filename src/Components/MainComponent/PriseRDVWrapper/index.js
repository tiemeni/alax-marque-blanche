import { Box, Grid, Step, StepConnector, stepConnectorClasses, StepLabel, Stepper, styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import Payment from '../../Payment';
import Motif from "../../Motif"
import ChoixClinique from '../../ChoixClinique';
import ChoixPraticien from '../../ChoixPraticien';
import ChoixDate from '../../DateRdv';
import { STEP0, STEP1, STEP2, STEP3, STEP4 } from '../../../Constants/steps';
import { getActuelStepById, transformStepIntoNumber, transformStepIntoTab } from '../../../Helpers';
import Auth from '../../Auth';
import { useDimension } from '../../../Hooks/dimensions';

export default function PriseRDVWrapper({ open }) {
    const { innerWidth, innerHeight } = useDimension()
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

    console.log(innerHeight)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: innerWidth > 678 ? '70%' : "100%",
        height: innerWidth > 500 ? 80.05 * parseInt(innerHeight) / 100 : parseInt(innerHeight) * 90 / 100,
        // height: "auto",
        bgcolor: 'background.paper',
        border: '1px solid #DDD',
        boxShadow: 10,
        overflowY: "scroll",
        p: 4,
    };

    const steps = [
        'Renseignements',
        'RDV disponibles',
        'Vos informations',
        'Paiement',
        'Récapitulatif',
    ];

    const QontoConnector = styled(StepConnector)(({ theme }) => ({
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
            top: 10,
            left: 'calc(-50% + 11px)',
            right: 'calc(50% + 11px)',
        },
        [`&.${stepConnectorClasses.active}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                borderColor: '#04B7C9',
            },
        },
        [`&.${stepConnectorClasses.completed}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                borderColor: '#04B7C9',
            },
        },
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
            borderTopWidth: 3,
            borderRadius: 1,
        },
    }));
    return (
        <Box width={"100%"}>
            <Box
                display={"flex"}
                overflowY={'scroll'}
                flexDirection={'column'}
                justifyContent={"center"}
                height={parseInt(innerHeight) * 15 / 100}>
                {innerWidth > 680 ? <Stepper connector={<QontoConnector />} activeStep={0} alternativeLabel>
                    {steps.map((label, i) => (
                        <Step active={transformStepIntoTab(actualStep).indexOf(i) !== -1} key={label}>
                            <StepLabel color='#04b7c9'>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper> :
                    <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center', marginLeft: 20 }}>
                        <div style={{
                            color: 'white',
                            backgroundColor: "#04b7c9",
                            width: 30,
                            height: 30,
                            display: 'flex',
                            alignItems: "center",
                            borderRadius: 50,
                            justifyContent: 'center'
                        }}>{transformStepIntoNumber(actualStep)}</div>
                        <div style={{ marginLeft: 15 }}>{steps[transformStepIntoNumber(actualStep) - 1]}</div>
                    </div>
                }
            </Box>
            <Grid
                height={parseInt(innerHeight) * 70 / 100}
                class="box_centre" container spacing={0.5}>
                <Grid paddingRight={5} paddingLeft={5} xs={12} >
                    {RenderBody()}
                </Grid>
            </Grid>
        </Box>
    )
}
