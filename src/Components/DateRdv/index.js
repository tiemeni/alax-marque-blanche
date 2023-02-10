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
import { useDispatch } from 'react-redux';
import { changeStep, createStep } from '../../REDUX/Step/actions';
import { STEP0, STEP1, STEP2 } from '../../Constants/steps';



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
  const dispatcher = useDispatch()
  return (
    <Box className='boxClinique'
      sx={{ width: '100%', height: 200, bgcolor: 'background.paper' }}
    >
      <Typography className='texteClinique' sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        <b>Sélectionnez une date de rendez-vous</b>
      </Typography>
      <Grid className='boxlist' container spacing={0.5}>
        <Grid xs={12}>
          <FixedSizeList
            height={200}
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
            dispatcher(changeStep({ step: STEP0, subStep: STEP2 }))
          }}>RETOUR</Button>

        </Grid>
        <Grid class="box_btn_next" xs={6}>

          <Button class="btn_next" variant="contained" onClick={() => {
            let step = {
              subStep: "sub-step-0",
              outputs: {
                firstTitle: "Vous devez confirmer votre identité",
              },
              inputs: {
                selectedMotif: null,
                selectedRegion: null,
                selectedVille: null,
              }
            }
            dispatcher(createStep({ key: STEP2, step }))
            dispatcher(changeStep({ step: STEP2, subStep: STEP0 }))
          }}>SUIVANT</Button>

        </Grid>
      </Grid>
    </Box>
  );
}
