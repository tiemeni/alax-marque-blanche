import { Grid, Box } from "@mui/material"
import './infosRdv.css';

const InfosRdv = () => {
    return (
        <Box mb={4} className='info-container_bottom'>
            <Grid container spacing={2} mb={2}>
                <Grid item xs={3}><p className='info-container_bottom-label'>Patient:</p></Grid>
                <Grid item xs={9}>
                    <p className='info-container_bottom-item'>M. John Doe</p>
                </Grid>
            </Grid>
            <Grid container spacing={2} mb={2}>
                <Grid item xs={3}>
                    <p className='info-container_bottom-label'>Centre:</p>
                </Grid>
                <Grid item xs={9}><p className='info-container_bottom-item'>Clinique FOUDA</p></Grid>
            </Grid>
            <Grid container spacing={2} mb={2}>
                <Grid item xs={3}><p className='info-container_bottom-label'>Praticien:</p></Grid>
                <Grid item xs={9}>
                    <p className='info-container_bottom-item'>Dr. Tiemani Happi</p>
                </Grid>
            </Grid>
            <Grid container spacing={2} mb={2}>
                <Grid item xs={3}>
                    <p className='info-container_bottom-label'>Motif:</p>
                </Grid>
                <Grid item xs={9}>
                    <p className='info-container_bottom-item'>Motif du rendez-vous N°1</p>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <p className='info-container_bottom-label'>Date:</p>
                </Grid>
                <Grid item xs={9}>
                    <p className='info-container_bottom-item'>
                        Lundi, 30 Jan 2023 à 14h45
                    </p>
                </Grid>
            </Grid>
        </Box>
    )
}

export default InfosRdv;