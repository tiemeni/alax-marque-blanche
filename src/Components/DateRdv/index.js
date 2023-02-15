import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import { Typography } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid';
import './designDate.css';
import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeStep, createStep, editeStep } from '../../REDUX/Step/actions';
import { STEP0, STEP1, STEP2 } from '../../Constants/steps';
import ItemListView from '../Globals/ItemListView';
import { getActuelStepById } from '../../Helpers';
import { outputs } from '../../Constants/outputsLabelForFirstStep';



function renderRow(props) {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  const { index, style } = props;

  return (
    <ListItem className='list' style={style} key={index} component="div" disablePadding>
      <ListItemButton >
        <ListItemText primary={`Date de RDV N°`} />
      </ListItemButton>
    </ListItem>
  );
}

export default function ChoixDate() {
  const [creneau, setCreneau] = React.useState()
  const steps = useSelector(state => state.StepReducer.steps);
  const activeStep = useSelector(state => state.StepReducer.activeStepIndex);
  const dispatcher = useDispatch()
  const onPostCreneau = creneau => {
    console.log(creneau);
    setCreneau(creneau);
  }
  const onGoNext = () => {
    const data = {
      selectedCreneau: creneau
    }
    dispatcher(editeStep({ key: STEP1, inputs: data }))
  }
  return (
    <Box className='boxClinique'
      sx={{ width: '100%', height: 200, bgcolor: 'background.paper' }}
    >
      <ItemListView
        onPostCreneau={onPostCreneau}
        label={getActuelStepById(steps, activeStep)?.outputs?.fifthTitle} forMotif={true} />
      <Button className='btn_retour'
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
        }} variant="outlined"
        onClick={() => {
          dispatcher(changeStep({ step: STEP0, subStep: STEP2 }))
        }}>RETOUR</Button>
      <Button className='btn_next'
        style={{
          borderRadius: 25,
          width: "250px",
          fontWeight: "700",
          height: 50,
          fontSize: 18,
          backgroundColor: "#04b7c9"
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
          onGoNext()
          dispatcher(createStep({ key: STEP2, step }))
          dispatcher(changeStep({ step: STEP2, subStep: STEP0 }))
        }}>SUIVANT</Button>
    </Box>
  );
}
