import { Fade, Grid, Stepper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import '../Modaldesign.css';


export default function ComptePatientWrapper({ open }) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        height: '85%',
        bgcolor: 'white',
        border: '1px solid #DDD',
        boxShadow: 10,
        p: 4,
    };

    return (
        <Fade in={open}>
            <Box sx={style} style={{boxShadow: 10}}>
                <Grid class="box_centre" container spacing={0.5}>
                  hi
                </Grid>
            </Box>
        </Fade>
    )
}
