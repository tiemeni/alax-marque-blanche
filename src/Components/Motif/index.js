import { Button } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { STEP0, STEP1 } from '../../Constants/steps';
import { getActuelStepById } from '../../Helpers';
import { changeStep, editeStep } from '../../REDUX/Step/actions';
import ItemListView from '../Globals/ItemListView';

const Motif = () => {
    const steps = useSelector(state => state.StepReducer.steps);
    const activeStep = useSelector(state => state.StepReducer.activeStepIndex);
    const dispatcher = useDispatch();
    const [motif, setMotif] = useState();
    const [ville, setVille] = useState();
    const [region, setRegion] = useState();
    const handlePostMotif = (motif) => {
        console.log(motif)
        setMotif(motif)
    }
    const handlePostVille = (ville) => {
        console.log(ville)
        setVille(ville)
    }
    const handlePostRegion = (region) => {
        console.log(region)
        setRegion(region)
    }
    const onGoNext = () => {
        const data = {
            selectedMotif: motif,
            selectedRegion: region,
            selectedVille: ville
        }
        dispatcher(editeStep({ key: STEP0, inputs: data }));
    }

    return (
        <div>
            <div style={{ width: "100%", display: "flex", flexDirection: 'row' }}>
                <div style={{ width: "50%", marginTop: 8 }}>
                    <ItemListView
                        label={getActuelStepById(steps, STEP0)?.outputs?.firstTitle}
                        handlePostMotif={handlePostMotif} forMotif={true} />
                </div >
                <div style={{ width: "50%" }}>
                    <ItemListView
                        label={getActuelStepById(steps, STEP0)?.outputs?.secondTitle}
                        handlePostVille={handlePostVille} forRegion={true} />
                    <ItemListView handlePostRegion={handlePostRegion} forCity={true} />
                </div>
            </div>
            <div style={{
                display: "flex",
                marginTop: "30px",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Button
                    className='btn-submit'
                    variant='contained'
                    onClick={() => {
                        // let step = {
                        //     subStep: STEP0,
                        //     outputs: {
                        //         firstTitle: "Selectionnez le creaneau qui vous convient",
                        //     },
                        //     inputs: {
                        //         selectedMotif: null,
                        //         selectedRegion: null,
                        //         selectedVille: null,
                        //     }
                        // }
                        // dispatcher(createStep({ key: STEP1, step }))
                        dispatcher(changeStep({ step: STEP0, subStep: STEP1 }))
                        onGoNext()
                    }}>
                    <p className='login-text'>Suivant</p>
                </Button>
            </div>
        </div>
    )
}
export default Motif;