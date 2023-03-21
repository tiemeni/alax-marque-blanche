import * as React from 'react';
import './Modaldesign.css';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import PriseRDVWrapper from './PriseRDVWrapper';
import ComptePatientWrapper from './ComptePatientWrapper';
import AccueilPatient from './AccueilPatient';


export default function MainComponent() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>Start</Button>
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
        {0 ? <PriseRDVWrapper open={open} /> :
          <AccueilPatient open={open} />
        
        }
      </Modal>
    </div>
  );
}