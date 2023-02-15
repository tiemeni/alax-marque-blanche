import { Button, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import './payment.css';
import PaymentGroupCard from './PaymentGroupCard';
import { mobilePayment, creditCard } from '../../Helpers/defaultData';
import InfosRdv from './InfosRdv';
import CreditCard from './CreditCard';
import { useDispatch, useSelector } from 'react-redux';
import { MASTER_CARD, VISA } from '../../Constants/typePayments';
import { changeStep } from '../../REDUX/Step/actions';
import { STEP0, STEP2 } from '../../Constants/steps';
import MobilePaymentForm from './MobilePayments';

const Payment = () => {
    const selectedCard = useSelector(state => state.CommonReducer.displayedCardTitle);
    const dispatcher = useDispatch()

    return (
        <Container>
            <Grid class="container-title">
                <p className='container-title_text'>Sélectionnez un moyen de paiement</p>
            </Grid>
            <Grid className='container-flex' container>
                <Grid item style={{ padding: 0, paddingRight: 10, marginTop: 15 }} md={4} xs={12}>
                    <Box className='info-container'>
                        <h5 id='title'>Important:</h5>
                        <p className='paragraph'>Votre compte sera débité d’un montant de <strong>5000 Fcfa</strong>. Le dit montant fait office de frais de rendez-vous et est non-remboursable.</p>
                        <p className='paragraph info'>Vous recevrez un message de confirmation à la fin de l'opération.</p>
                    </Box>
                    <InfosRdv />
                    <Grid container>
                        <Grid style={{ display: 'flex', justifyContent: 'center' }} item xs={12}>
                            <Button variant='outlined' onClick={() => {
                                dispatcher(changeStep({ step: STEP2, subStep: STEP0 }))
                            }} className='input-box_button' >
                                <p className='info-btn_back'>Retour</p>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid style={{ padding: 0 }} item md={8} xs={12}>
                    {(selectedCard === VISA || selectedCard === MASTER_CARD) ?
                        <CreditCard selectedCard={selectedCard} /> : !selectedCard ?
                            <>
                                <PaymentGroupCard selectedCard={selectedCard} paymentMethods={mobilePayment} />
                                <PaymentGroupCard selectedCard={selectedCard} paymentMethods={creditCard} />
                            </> :
                            <MobilePaymentForm selectedCard={selectedCard} />
                    }
                </Grid>
            </Grid >
        </Container >
    )
}

export default Payment;