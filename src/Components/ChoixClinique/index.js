import * as React from 'react';
import './designClinique.css';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeStep, editeStep } from '../../REDUX/Step/actions';
import { STEP0, STEP2 } from '../../Constants/steps';
import ItemListView from '../Globals/ItemListView';
import { allFieldsSet, getActuelStepById } from '../../Helpers';
import { useDimension } from '../../Hooks/dimensions';


export default function ChoixClinique() {
  const { innerWidth } = useDimension()
  const steps = useSelector(state => state.StepReducer.steps);
  const [clinique, setClinique] = React.useState(getActuelStepById(steps, STEP0)?.inputs?.selectedClinique);
  const activeStep = useSelector(state => state.StepReducer.activeStepIndex);
  const dispatcher = useDispatch()
  const onPostClinique = clinique => {
    setClinique(clinique)
  }

  const onGoNext = () => {
    const data = {
      selectedClinique: clinique
    }
    dispatcher(editeStep({ key: STEP0, inputs: data }))
  }

  return (
    <>
      <ItemListView
        onPostClinique={onPostClinique}
        preSelectedClinique={getActuelStepById(steps, STEP0)?.inputs?.selectedClinique}
        label={getActuelStepById(steps, activeStep)?.outputs?.thirdTitle} forMotif={true} />
     <div style={{ display: innerWidth < 525 && "flex", justifyContent: innerWidth < 525 && "center", width: "100%" }}>
        <div style={{ display: innerWidth < 525 && "flex", flexDirection: innerWidth < 525 && "column-reverse", width: innerWidth < 525 && "90%" }}>
          <Button className='btn_retour'
            style={{
              marginLeft: innerWidth > 525 && 10,
              borderRadius: 25,
              border: "2px solid #04B7C9",
              fontSize: 18,
              fontWeight: "700",
              width: innerWidth > 525 ? "250px" : "100%",
              height: 50,
              backgroundColor: "white",
              borderColor: "#04b7c9",
              color: "#04b7c9"
            }}
            variant="outlined"
            onClick={() => {
              dispatcher(changeStep({ step: STEP0, subStep: STEP0 }))
            }}>RETOUR</Button>
          <Button className='btn_next'
            style={{
              borderRadius: 25,
              marginBottom: innerWidth < 525 && 10,
              width: innerWidth > 525 ? "250px" : "100%",
              height: 50,
              fontSize: 18,
              fontWeight: "700",
              backgroundColor: !allFieldsSet([clinique]) ? "gray" : "#04b7c9"
            }}
            variant="contained"
            onClick={() => {
              if (allFieldsSet([clinique])) {
                onGoNext();
                dispatcher(changeStep({ step: STEP0, subStep: STEP2 }))
              }
            }}>SUIVANT</Button>
        </div>
      </div>
    </>
  );
}
