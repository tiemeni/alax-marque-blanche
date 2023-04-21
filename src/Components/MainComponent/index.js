import * as React from 'react';
import './Modaldesign.css';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import PriseRDVWrapper from './PriseRDVWrapper';
import ComptePatientWrapper from './ComptePatientWrapper';
import { Box, Fab } from '@mui/material';
import { useDimension } from '../../Hooks/dimensions';
import Wrapper from './ComptePatientWrapper/Wrapper';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import colors from '../../Constants/colors';
import { IS_MOBILE } from '../../Hooks/isMobile';
import { useDispatch, useSelector } from 'react-redux';
import { isComptePatient } from '../../REDUX/Common/actions';




export default function MainComponent() {
  const [open, setOpen] = React.useState(false);
  const dispatcher = useDispatch()
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { innerWidth, innerHeight } = useDimension();
  const [isMobile] = React.useState(IS_MOBILE())
  const isComptePatientActive = useSelector(state => state.CommonReducer.isComptePatientActive)



  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    width: innerWidth > 500 ? '75%' : "100%",
    height: innerWidth > 500 ? 90.05 * parseInt(innerHeight) / 100 : parseInt(innerHeight) * 100 / 100,
    bgcolor: 'white',
    borderRadius: 1,
    border: 'none',
    overflowY: "scroll",
    boxShadow: 24,
    p: 0,
  };

  React.useEffect(() => {

  }, [isComptePatientActive])

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
        <Box>
          <Box sx={{...style}}>
            {!isComptePatientActive ? <PriseRDVWrapper open={true} /> : <Wrapper />}
            {(innerWidth > 500) && <div style={{ position: "absolute", right: 10, bottom: 10, display: 'flex', flexDirection: "column-reverse" }}>
              <Fab onClick={() => dispatcher(isComptePatient())} sx={{mt: 2, backgroundColor: colors.primaryColor, width: 40, height: 40 }} aria-label="add">
                {!isComptePatientActive ? <AccountCircleOutlinedIcon sx={{ color: "white" }} /> :
                  <ArrowBackOutlinedIcon sx={{ color: "white" }} />}
              </Fab>
              <Fab sx={{ backgroundColor: colors.primaryColor, width: 40, height: 40 }} aria-label="add">
                <QuestionMarkOutlinedIcon sx={{ color: "white", }} />
              </Fab>
            </div>}
          </Box>
          {/* {(innerWidth <= 500) && <div style={{ position: "absolute", right: 10, bottom: 10, }}>
            <Fab sx={{ backgroundColor: colors.primaryColor }} aria-label="add">
              <AccountCircleOutlinedIcon sx={{ color: "white" }} />
            </Fab>
            <Fab sx={{ backgroundColor: colors.primaryColor, ml: 2 }} aria-label="add">
              <QuestionMarkOutlinedIcon sx={{ color: "white", }} />
            </Fab>
          </div>} */}
        </Box>
      </Modal>
    </div>
  );
}