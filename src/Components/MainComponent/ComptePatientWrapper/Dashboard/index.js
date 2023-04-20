import React from 'react';
import { Avatar, Divider, Grid, Link, Typography } from '@mui/material';
import styles from './style';
import { notifications } from '../../../../Helpers/defaultData';
import colors from '../../../../Constants/colors';

const Notification = ({ content }) => {
    const textColor = content.type === 'cancel' ? colors.danger : colors.primaryColor;

    return (
        <Grid item xs={12} sx={styles.card}>
            <Grid item xs={12} sx={{ ...styles.flex, justifyContent: 'space-between' }} mt={2}>
                <Typography sx={{ ...styles.size, color: textColor }}>
                    {content.text}
                </Typography>
                <Link sx={{ ...styles.size, ...styles.details }}>Afficher les détails</Link>
            </Grid>
            <Grid item xs={12} mt={1}>
                <Typography sx={{ ...styles.size, ...styles.messages }}>{content.message}</Typography>
            </Grid>
        </Grid>
    )
}

const Dashboard = () => {
    return (
        <Grid container>
            <Grid item md={12}>
                <Typography sx={styles.pageTitle}>Accueil</Typography>
            </Grid>
            <Grid item xs={12} sx={{ ...styles.flex, alignItems: 'flex-start' }} className='h-container' mt={2}>
                <Grid item md={5} sm={12} sx={styles.listes}>
                    <Grid item xs={12} sx={{ ...styles.flex, justifyContent: 'center' }}>
                        <Grid item xs={4} sx={styles.stat}>
                            <Typography sx={styles.number}>3</Typography>
                            <Typography sx={styles.label}>A venir</Typography>
                        </Grid>

                        <Divider orientation="vertical" variant="middle" flexItem />

                        <Grid item xs={4} sx={styles.stat}>
                            <Typography sx={styles.number}>3</Typography>
                            <Typography sx={styles.label}>Reporté</Typography>
                        </Grid>

                        <Divider orientation="vertical" variant="middle" flexItem />

                        <Grid item xs={4} sx={styles.stat}>
                            <Typography sx={styles.number}>3</Typography>
                            <Typography sx={styles.label}>Terminé</Typography>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} mt={2}>
                        <Typography sx={{ ...styles.size, ...styles.next }}>Prochain rendez-vous</Typography>
                    </Grid>

                    <Grid item xs={12} sx={styles.rdvCard} mt={1}>
                        <Grid item xs={12} sx={{ ...styles.flex }}>
                            <Grid item xs={8}>
                                <Typography sx={{ ...styles.size, ...styles.nom }}>Dr. Tiemeni Happi</Typography>
                                <Typography sx={{ ...styles.size, ...styles.specialite }}>(Ophtalmologie)</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Avatar sx={{ float: 'right' }} />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} mt={1}>
                            <Grid item xs={12}>
                                <Typography sx={{ ...styles.size }}>Clinique FOUDA</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ ...styles.flex, gap: 1 }} mt={0.5}>
                                <Grid item xs={8}>
                                    <Typography sx={{ ...styles.size }}>Ven, 23 Avril 2023</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography sx={{ ...styles.size }}>12:30</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item md={7} sm={12} sx={styles.notifications}>
                    <Grid item xs={12}>
                        <Grid item xs={12}>
                            <Typography sx={styles.title}>Notifications</Typography>
                            <Divider sx={styles.divider} />
                        </Grid>
                        <Grid item xs={12} className='notifications-list'>
                            {notifications.map((notif) => <Notification key={notif.id} content={notif} />)}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Dashboard;