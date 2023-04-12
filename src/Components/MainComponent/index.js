import * as React from 'react';
import './Modaldesign.css';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import PriseRDVWrapper from './PriseRDVWrapper';
import ComptePatientWrapper from './ComptePatientWrapper';
import { Box } from '@mui/material';
import { useDimension } from '../../Hooks/dimensions';


export default function MainComponent() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { innerWidth, innerHeight } = useDimension()


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    width: innerWidth > 500 ? '75%' : "100%",
    height: innerWidth > 500 ? 90.05 * parseInt(innerHeight) / 100 : parseInt(innerHeight) * 100 / 100,
    bgcolor: 'white',
    borderRadius: 1,
    border: '1px solid #DDD',
    overflowY: "scroll",
    boxShadow: 24,
    p: 0
  };

  return (
    <div>
      <Button onClick={handleOpen}>Start</Button>
      <Modal
        disableAutoFocus={true}
        disableEscapeKeyDown={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <PriseRDVWrapper open={open} />
        </Box>
      </Modal>
    </div>
  );
}