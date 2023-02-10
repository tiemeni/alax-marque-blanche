import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import { Typography } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid';
import './designClinique.css';
import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { changeStep } from '../../REDUX/Step/actions';
import { STEP0, STEP2 } from '../../Constants/steps';



function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem className='list' style={style} key={index} component="div" disablePadding>
      <ListItemButton >
        <ListItemText primary={`Clinique N°`} />
      </ListItemButton>
    </ListItem>
  );
}

export default function ChoixClinique() {

  const dispatcher = useDispatch()

  return (
    <Box className='boxClinique'
      sx={{ width: '100%', height: 200, bgcolor: 'background.paper' }}
    >
      <Typography className='texteClinique' sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        <b>Sélectionner une clinique</b>
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
            dispatcher(changeStep({ step: STEP0, subStep: STEP0 }))
          }}>RETOUR</Button>

        </Grid>
        <Grid class="box_btn_next" xs={6}>
          <Button class="btn_next" variant="contained" onClick={() => {
            dispatcher(changeStep({ step: STEP0, subStep: STEP2 }))
          }}>SUIVANT</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
