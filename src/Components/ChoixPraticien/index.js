import * as React from 'react';
import './designPraticien.css';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { STEP0, STEP1 } from '../../Constants/steps';
import { changeStep, createStep, editeStep } from '../../REDUX/Step/actions';
import ItemListView from '../Globals/ItemListView';
import { allFieldsSet, getActuelStepById } from '../../Helpers';
import { outputs } from '../../Constants/outputsLabelForFirstStep';
import { getWindowSize } from '../../Hooks/dimensions';


export default function ChoixPraticien() {
  const { innerWidth } = getWindowSize()
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
<<<<<<< HEAD
    <Box className='boxClinique'
      sx={{ width: '100%', height: 200, bgcolor: 'background.paper' }}
    >
      <Typography className='texteClinique' sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        <b>Sélectionner un Praticien</b>
      </Typography>
      <Grid className='boxlist' container spacing={0.5}>
        <Grid xs={12}>
          <FixedSizeList
            height={400}
            width={'100%'}
            marginLeft={'0%'}
            itemSize={46}
            itemCount={10}
            overscanCount={5}

          >
            {renderRow}
          </FixedSizeList>
        </Grid>
      </Grid>
      <Grid container spacing={0.5}>

        <Grid class="box_btn_retour" xs={6}>

          <Button class="btn_retour" variant="contained" onClick={() => {
            dispatcher(changeStep({ step: STEP0, subStep: STEP1 }))
          }}>RETOUR</Button>

        </Grid>
        <Grid class="box_btn_next" xs={6}>

          <Button class="btn_next" variant="contained" onClick={() => {
            let step = {
              subStep: STEP0,
              outputs: {
                firstTitle: "Selectionnez un moyen de paiement",
              },
              inputs: {
                selectedMotif: null,
                selectedRegion: null,
                selectedVille: null,
=======
    <>
      <ItemListView
        onPostPraticien={onPostPraticien}
        preSelectedPraticien={getActuelStepById(steps, STEP0)?.inputs?.selectedPraticien}
        label={getActuelStepById(steps, activeStep)?.outputs?.fourthTitle} forMotif={true} />
      <div style={{ display: innerWidth < 500 && "flex", justifyContent: innerWidth < 500 && "center", width: "100%" }}>
        <div style={{ display: innerWidth < 500 && "flex", flexDirection: innerWidth < 500 && "column", width: "100%" }}>
          <Button
            className='btn_retour'
            style={{
              marginLeft: innerWidth > 500 && 10,
              marginBottom: innerWidth < 500 && 10,
              borderRadius: 25,
              border: "2px solid #04B7C9",
              fontSize: 18,
              fontWeight: "700",
              width: innerWidth > 500 ? "250px" : "100%",
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
              width: innerWidth > 500 ? "250px" : "100%",
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
>>>>>>> 74fbafb75bb9c5850ed2bd5de8c31b520ba3ca73
              }
              if (allFieldsSet([praticien])) {
                onGoNext();
                dispatcher(createStep({ key: STEP1, step }))
                dispatcher(changeStep({ step: STEP1, subStep: STEP0 }))
              }
            }}>SUIVANT</Button>
        </div>
      </div>
    </>
  );
}
