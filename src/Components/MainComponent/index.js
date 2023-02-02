import * as React from 'react';
import './Modaldesign.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Grid from '@mui/system/Unstable_Grid';
import DateRdv from '../DateRdv';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '800px',
  height: '400px',
  bgcolor: 'background.paper',
  border: '1px solid #DDD',
  boxShadow: 10,
  p: 4,
};



const steps = [
    'Renseignements',
    'RDV disponibles',
    'Vos informations',
    'Paiement',
    'Récapitulatif',
  ];

export default function MainComponent() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Ouvrir la modale</Button>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <Stepper activeStep={0} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Grid class="box_centre" container spacing={0.5}>
            <Grid  xs={12}>
            <DateRdv />
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
        </Fade>
      </Modal>
    </div>
  );
}