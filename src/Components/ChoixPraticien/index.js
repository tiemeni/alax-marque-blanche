import * as React from 'react';
import Box from '@mui/material/Box';
import './designPraticien.css';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { STEP0, STEP1 } from '../../Constants/steps';
import { changeStep, createStep, editeStep } from '../../REDUX/Step/actions';
import ItemListView from '../Globals/ItemListView';
import { allFieldsSet, getActuelStepById } from '../../Helpers';
import { outputs } from '../../Constants/outputsLabelForFirstStep';


export default function ChoixPraticien() {
  const steps = useSelector(state => state.StepReducer.steps);
  const [praticien, setPraticien] = React.useState(getActuelStepById(steps, STEP0)?.inputs?.selectedPraticien)
  const activeStep = useSelector(state => state.StepReducer.activeStepIndex);
  const dispatcher = useDispatch()
  const onPostPraticien = praticien => {
    setPraticien(praticien);
  }
  const onGoNext = () => {
    const data = {
      selectedPraticien: praticien
    }
    dispatcher(editeStep({ key: STEP0, inputs: data }))
  }

  return (
    <Box className='boxClinique'
      sx={{ width: '100%', height: 200, bgcolor: 'background.paper' }}
    >
      <ItemListView
        onPostPraticien={onPostPraticien}
        preSelectedPraticien={getActuelStepById(steps, STEP0)?.inputs?.selectedPraticien}
        label={getActuelStepById(steps, activeStep)?.outputs?.fourthTitle} forMotif={true} />
      <Button
        className='btn_retour'
        style={{
          marginLeft: 10,
          borderRadius: 25,
          border: "2px solid #04B7C9",
          fontSize: 18,
          fontWeight: "700",
          width: "250px",
          height: 50,
          backgroundColor: "white",
          borderColor: "#04b7c9",
          color: "#04b7c9"
        }}
        variant="outlined"
        onClick={() => {
          dispatcher(changeStep({ step: STEP0, subStep: STEP1 }))
        }}>RETOUR</Button>
      <Button className='btn_next'
        style={{
          borderRadius: 25,
          width: "250px",
          fontSize: 18,
          fontWeight: "700",
          height: 50,
          backgroundColor: allFieldsSet([praticien]) ? "#04b7c9" : "gray"
        }}
        variant="contained"
        onClick={() => {
          let step = {
            subStep: STEP0,
            outputs: outputs,
            inputs: {
              selectedCreneau: getActuelStepById(steps, STEP1)?.inputs?.selectedCreneau
            }
          }
          if (allFieldsSet([praticien])) {
            onGoNext();
            dispatcher(createStep({ key: STEP1, step }))
            dispatcher(changeStep({ step: STEP1, subStep: STEP0 }))
          }
        }}>SUIVANT</Button>
    </Box>
  );
}
