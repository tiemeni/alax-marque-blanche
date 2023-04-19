import React from 'react';
import { Avatar, Button, Divider, FormControlLabel, Grid, InputAdornment, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import styles from './styles';
import { ReactComponent as ProfileIcon } from '../../../../Assets/svgs/Profile_2.svg';
import { ReactComponent as PhoneIcon } from '../../../../Assets/svgs/Call.svg';
import { ReactComponent as CalendarIcon } from '../../../../Assets/svgs/Calendar.svg';
import { ReactComponent as MailIcon } from '../../../../Assets/svgs/Message_2.svg';

const Profil = () => {
    return (
        <Grid container>
            <Grid item md={12}>
                <Typography sx={styles.pageTitle}>Profil</Typography>
            </Grid>
            <Grid item md={12} sx={styles.form} className='patient-form-profil'>

                <Grid item xs={12} sx={styles.flexEnd}>
                    <Button sx={styles.save}>
                        <Typography>Enregistrer</Typography>
                    </Button>
                </Grid>

                <Grid item xs={12} mt={1}>
                    <Divider sx={styles.sectionTitle}>Informations personnelles</Divider>
                </Grid>

                <Grid item md={12} mt={1} sx={styles.flex} className='personal-info'>
                    <Grid item md={6} xs={12}>
                        <Grid item xs={12}>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="M" control={<Radio />} label="M." />
                                <FormControlLabel value="Mme" control={<Radio />} label="Mme" />
                            </RadioGroup>
                        </Grid>

                        <Grid item xs={12} sx={styles.flex} mt={2}>
                            <TextField
                                size='small'
                                label='Nom'
                                fullWidth InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <ProfileIcon />
                                        </InputAdornment>
                                    ),
                                }} />
                            <TextField
                                size='small'
                                label='Prénom'
                                fullWidth InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <ProfileIcon />
                                        </InputAdornment>
                                    ),
                                }} />
                        </Grid>

                        <Grid item xs={12} mt={3}>
                            <TextField
                                size='small'
                                label='Date de naissance'
                                fullWidth InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CalendarIcon />
                                        </InputAdornment>
                                    ),
                                }} />
                        </Grid>
                    </Grid>

                    <Grid className='patient-avatar' item md={6} sx={{ ...styles.flex, justifyContent: 'center' }} >
                        <Avatar sx={styles.avatar}>TH</Avatar>
                    </Grid>
                </Grid>

                <Grid item xs={12} mt={3} mb={3}>
                    <Divider sx={styles.sectionTitle}>Contacts</Divider>
                </Grid>

                <Grid item xs={12} sx={styles.flex} mt={3} className='contact-info'>
                    <Grid item md={6} xs={12} mb={2}>
                        <Grid item xs={12}>
                            <TextField
                                size='small'
                                type={'email'}
                                label='Adresse mail'
                                fullWidth InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MailIcon />
                                        </InputAdornment>
                                    ),
                                }} />
                        </Grid>

                        <Grid item xs={12} mt={3}>
                            <TextField
                                size='small'
                                label='Localisation'
                                fullWidth InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MailIcon />
                                        </InputAdornment>
                                    ),
                                }} />
                        </Grid>
                    </Grid>

                    <Grid item md={6} xs={12} mb={2}>
                        <Grid item xs={12}>
                            <TextField
                                size='small'
                                type={'email'}
                                label='Téléphone'
                                fullWidth InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PhoneIcon />
                                        </InputAdornment>
                                    ),
                                }} />
                        </Grid>

                        <Grid item xs={12} mt={3}>
                            <TextField
                                size='small'
                                label='Téléphone'
                                fullWidth InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PhoneIcon />
                                        </InputAdornment>
                                    ),
                                }} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Profil;