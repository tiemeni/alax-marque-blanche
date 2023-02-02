import { Button, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import './payment.css';
import PaymentGroupCard from './PaymentGroupCard';
import { mobilePayment, creditCard } from '../../Helpers/defaultData';
import InfosRdv from './InfosRdv';

const Payment = () => {
    return (
        <Container>
            <Grid class="container-title">
                <p className='container-title_text'>Sélectionnez un moyen de paiement</p>
            </Grid>
            <Grid className='container-flex' container>
                <Grid item style={{ padding: 0, paddingRight: 10 }} md={4} xs={12}>
                    <Box className='info-container'>
                        <h5 id='title'>Important:</h5>
                        <p className='paragraph'>Votre compte sera débité d’un montant de <strong>5000 Fcfa</strong>. Le dit montant fait office de frais de rendez-vous et est non-remboursable.</p>
                        <p className='paragraph info'>Vous recevrez un message de confirmation à la fin de l'opération.</p>
                    </Box>
                    <InfosRdv />
                    <Grid container>
                        <Grid style={{ display: 'flex', justifyContent: 'center' }} item xs={12}>
                            <Button variant='outlined' className='input-box_button' >
                                <p className='info-btn_back'>Retour</p>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid style={{ padding: 0 }} item md={8} xs={12}>
                    <PaymentGroupCard paymentMethods={mobilePayment} />
                    <PaymentGroupCard paymentMethods={creditCard} />
                </Grid>
            </Grid >
        </Container >
    )
}

export default Payment;