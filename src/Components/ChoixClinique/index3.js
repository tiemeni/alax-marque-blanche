import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import './designClinique.css';
import {Typography} from '@mui/material';
import Grid from '@mui/system/Unstable_Grid';

export default function BasicList() {
  return (
    <Box sx={{ width: '100%', overflow: 'visible', maxWidth: 960, height: 100, bgcolor: 'background.paper' }}>
     <Grid className='boxClinique' container>
     <Typography className='texteClinique' sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            <b>Sélectionner une clinique</b>
      </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Clinique" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Clinique" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Clinique2" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Clinique2" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Clinique2" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Clinique2" />
            </ListItemButton>
          </ListItem>
        </List>
        </Grid>
        <Divider />

      
    </Box>
  );
}