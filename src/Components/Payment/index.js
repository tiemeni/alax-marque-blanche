import { Button, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import './payment.css';
import PaymentGroupCard from './PaymentGroupCard';
import { mobilePayment, creditCard } from '../../Helpers/defaultData';
import aboutIcon from "../../Assets/Images/about.png"
import InfosRdv from './InfosRdv';
import CreditCard from './CreditCard';
import { useDispatch, useSelector } from 'react-redux';
import { MASTER_CARD, VISA } from '../../Constants/typePayments';
import { changeStep } from '../../REDUX/Step/actions';
import { STEP0, STEP2 } from '../../Constants/steps';
import MobilePaymentForm from './MobilePayments';
import { useDimension } from '../../Hooks/dimensions';

const Payment = () => {
    const selectedCard = useSelector(state => state.CommonReducer.displayedCardTitle);
    const { innerWidth } = useDimension()
    const dispatcher = useDispatch()

    React.useEffect(() => {

    }, [selectedCard])

    return (
        <Container>
            <Grid class="container-title" textAlign={"center"} margin={"20px 0px"}>
                <p className='container-title_text'>Sélectionnez un moyen de paiement</p>
            </Grid>
            <Grid item md={12} className='container-flex' container>
                {((!selectedCard && innerWidth < 500) || (innerWidth >= 500)) ?
                    <Grid item style={{ padding: 0, paddingRight: 10, marginTop: 15 }} md={4} xs={12}>
                        <Box className='info-container'>
                            <h5 id='title'>Important:</h5>
                            <p className='paragraph'>Votre compte sera débité d’un montant de <strong>5000 Fcfa</strong>. Le dit montant fait office de frais de rendez-vous et est non-remboursable.</p>
                            <p className='paragraph info'>
                                <img src={aboutIcon} alt='' style={{ height: 15, width: 15 }} />
                                <span style={{ marginLeft: 10 }}>Vous recevrez un message de confirmation à la fin de l'opération.</span>
                            </p>
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
                    </Grid> : <></>}
                <Grid style={{ padding: 0, height: "fit-content", }} item md={8} xs={12}>
                    {(selectedCard === VISA || selectedCard === MASTER_CARD) ?
                        <CreditCard selectedCard={selectedCard} /> : !selectedCard ?
                            <Grid style={{ padding: 0, height: "fit-content", }} item md={12} xs={12}>
                                <PaymentGroupCard selectedCard={selectedCard} paymentMethods={mobilePayment} />
                                <PaymentGroupCard selectedCard={selectedCard} paymentMethods={creditCard} />
                            </Grid> :
                            <MobilePaymentForm selectedCard={selectedCard} paymentMethods={mobilePayment} />
                    }
                </Grid>
            </Grid >
        </Container >
    )
}

export default Payment;