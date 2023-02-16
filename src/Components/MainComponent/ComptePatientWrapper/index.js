import { Fade, Grid, Stepper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import '../Modaldesign.css';
import Login from '../../Auth/Login';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import background from './images/img4.jpg';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';

export default function ComptePatientWrapper({ open }) {

    const style = {
        position: 'absolute',
        top: '40%',
        bottom: '0%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        height: '55%',
        bgcolor: '#ddd',
        border: '0px solid #DDD',
        boxShadow: '2px, 1px, 2px, red',
        p: 4,
        marginTop: '5%',
        marginBottom: '5%',
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      function BootstrapDialogTitle(props) {
        const { children, onClose, ...other } = props;
      
        return (
          <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
              <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            ) : null}
          </DialogTitle>
        );
      }
      
      BootstrapDialogTitle.propTypes = {
        children: PropTypes.node,
        onClose: PropTypes.func.isRequired,
      };
        

    return (
        <Fade in={open}>
            
            <Box sx={style} style={{ paddingTop: 300, backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "120%" }}>
                <Grid container spacing={0.5}>
                    <Grid item xs={3}>
                    
                    </Grid>
                    <Grid item xs={6}>
                    <Item><Login /></Item>
                    </Grid>
                    <Grid item xs={3}>
                    
                    </Grid>
                </Grid>
            </Box>
        </Fade>
        
        
    )
}
