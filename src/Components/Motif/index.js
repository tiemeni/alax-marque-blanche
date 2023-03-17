import { Button } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { STEP0, STEP1 } from '../../Constants/steps';
import { allFieldsSet, getActuelStepById } from '../../Helpers';
import { useDimension } from '../../Hooks/dimensions';
import { changeStep, editeStep } from '../../REDUX/Step/actions';
import ItemListView from '../Globals/ItemListView';

const Motif = () => {
    const { innerWidth } = useDimension()
    const steps = useSelector(state => state.StepReducer.steps);
    const dispatcher = useDispatch();
    const [motif, setMotif] = useState(getActuelStepById(steps, STEP0)?.inputs?.selectedMotif);
    const [ville, setVille] = useState(getActuelStepById(steps, STEP0)?.inputs?.selectedVille);
    const [region, setRegion] = useState(getActuelStepById(steps, STEP0)?.inputs?.selectedRegion);
    const handlePostMotif = (motif) => {
        setMotif(motif)
    }
    const handlePostVille = (ville) => {
        setVille(ville)
    }
    const handlePostRegion = (region) => {
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
            <div style={{ width: "100%", display: "flex", flexDirection: innerWidth > 500 ? 'row' : 'column' }}>
                <div style={{ width: innerWidth > 500 ? "50%" : "100%", marginTop: 8 }}>
                    <ItemListView
                        preSelectedMotif={getActuelStepById(steps, STEP0)?.inputs?.selectedMotif}
                        label={getActuelStepById(steps, STEP0)?.outputs?.firstTitle}
                        handlePostMotif={handlePostMotif} forMotif={true} />
                </div >
                <div style={{ width: innerWidth > 500 ? "50%" : "100%" }}>
                    <ItemListView
                        preSelectedRegion={getActuelStepById(steps, STEP0)?.inputs?.selectedRegion}
                        label={getActuelStepById(steps, STEP0)?.outputs?.secondTitle}
                        handlePostVille={handlePostVille} forRegion={true} />
                    <ItemListView
                        preSelectedVille={getActuelStepById(steps, STEP0)?.inputs?.selectedVille}
                        handlePostRegion={handlePostRegion} forCity={true} />
                </div>
            </div>
            <div style={{
                display: "flex",
                marginTop: "3%",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Button
                    className={!allFieldsSet([motif, ville, region]) ? "btn-submit-disabled" : 'btn-submit'}
                    variant='contained'
                    onClick={() => {
                        if (allFieldsSet([motif, ville, region])) {
                            dispatcher(changeStep({ step: STEP0, subStep: STEP1 }))
                            onGoNext()
                        }
                    }}>
                    <p className='login-text'>Suivant</p>
                </Button>
            </div>
        </div>
    )
}
export default Motif;