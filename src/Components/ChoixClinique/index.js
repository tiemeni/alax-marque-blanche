import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import { Typography } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid';
import './designClinique.css';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeStep, editeStep } from '../../REDUX/Step/actions';
import { STEP0, STEP2 } from '../../Constants/steps';
import ItemListView from '../Globals/ItemListView';
import { getActuelStepById } from '../../Helpers';


export default function ChoixClinique() {
  const [clinique, setClinique] = React.useState();
  const steps = useSelector(state => state.StepReducer.steps);
  const activeStep = useSelector(state => state.StepReducer.activeStepIndex);
  const dispatcher = useDispatch()
  const onPostClinique = clinique => {
    console.log(clinique)
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
        label={getActuelStepById(steps, activeStep)?.outputs?.thirdTitle} forMotif={true} />
      <Button className='btn_retour'
        style={{
          marginLeft: 10,
          borderRadius: 25,
          width: "250px",
          border: "2px solid #04B7C9",
          fontSize: 18,
          fontWeight: "700",
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
          width: "250px",
          height: 50,
          fontSize: 18,
          fontWeight: "700",
          backgroundColor: "#04b7c9"
        }}
        variant="contained"
        onClick={() => {
          onGoNext();
          dispatcher(changeStep({ step: STEP0, subStep: STEP2 }))
        }}>SUIVANT</Button>
    </>
  );
}
