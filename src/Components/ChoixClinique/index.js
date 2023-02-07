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
        <ListItemText primary={`Clinique N°`} />
      </ListItemButton>
    </ListItem>
  );
}

export default function ChoixClinique() {
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
                
                <Button class="btn_retour" variant="contained">RETOUR</Button>
                
            </Grid>
            <Grid class="box_btn_next" xs={6}>
                
                <Button class="btn_next" variant="contained">SUIVANT</Button>
                
            </Grid>
      </Grid>
    </Box>
  );
}
