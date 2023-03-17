import * as React from 'react';
import './designDate.css';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeStep, createStep, editeStep } from '../../REDUX/Step/actions';
import { STEP0, STEP1, STEP2 } from '../../Constants/steps';
import ItemListView from '../Globals/ItemListView';
import { allFieldsSet, getActuelStepById } from '../../Helpers';
import { outputs } from '../../Constants/outputsLabelForFirstStep';
import { useDimension } from '../../Hooks/dimensions';


export default function ChoixDate() {
  const { innerWidth } = useDimension()
  const steps = useSelector(state => state.StepReducer.steps);
  const [creneau, setCreneau] = React.useState(getActuelStepById(steps, STEP1)?.inputs?.selectedCreneau)
  const activeStep = useSelector(state => state.StepReducer.activeStepIndex);
  const dispatcher = useDispatch()
  const onPostCreneau = creneau => {
    setCreneau(creneau);
  }
  const onGoNext = () => {
    const data = {
      selectedCreneau: creneau
    }
    dispatcher(editeStep({ key: STEP1, inputs: data }))
  }
  return (
    <>
      <ItemListView
        onPostCreneau={onPostCreneau}
        preSelectedCreneau={getActuelStepById(steps, STEP1)?.inputs?.selectedCreneau}
        label={getActuelStepById(steps, activeStep)?.outputs?.fifthTitle} forMotif={true} />
      <div style={{ display: innerWidth < 500 && "flex", justifyContent: innerWidth < 500 && "center", width: "100%" }}>
        <div style={{ display: innerWidth < 500 && "flex", flexDirection: innerWidth < 500 && "column-reverse", width: innerWidth < 500 && "90%" }}>
          <Button className='btn_retour'
            style={{
              marginLeft: innerWidth > 500 && 10,
              borderRadius: 25,
              border: "2px solid #04B7C9",
              fontSize: 18,
              fontWeight: "700",
              width: innerWidth > 500 ? "250px" : "100%",
              height: 50,
              backgroundColor: "white",
              borderColor: "#04b7c9",
              color: "#04b7c9"
            }} variant="outlined"
            onClick={() => {
              dispatcher(changeStep({ step: STEP0, subStep: STEP2 }))
            }}>RETOUR</Button>
          <Button className='btn_next'
            style={{
              borderRadius: 25,
              marginBottom: innerWidth < 500 && 10,
              width: innerWidth > 500 ? "250px" : "100%",
              fontWeight: "700",
              height: 50,
              fontSize: 18,
              backgroundColor: allFieldsSet([creneau]) ? "#04b7c9" : "gray"
            }}
            variant="contained"
            onClick={() => {
              let step = {
                subStep: STEP0,
                outputs: outputs,
                inputs: {
                  firstConnexion: true,
                  email: null,
                  nom: null,
                  birthday: null,
                  phone: null,
                  conditionAccepted: false,
                  civilite: 1
                }
              }
              if (allFieldsSet([creneau])) {
                onGoNext()
                dispatcher(createStep({ key: STEP2, step }))
                dispatcher(changeStep({ step: STEP2, subStep: STEP0 }))
              }
            }}>SUIVANT</Button>
        </div>
      </div>
    </>
  );
}
