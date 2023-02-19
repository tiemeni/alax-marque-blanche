import * as React from 'react';
import './Modaldesign.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import PriseRDVWrapper from './PriseRDVWrapper';
import ComptePatientWrapper from './ComptePatientWrapper';



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
        {1 ? <PriseRDVWrapper open={open} /> :
          <ComptePatientWrapper open={open} />}
      </Modal>
    </div>
  );
}