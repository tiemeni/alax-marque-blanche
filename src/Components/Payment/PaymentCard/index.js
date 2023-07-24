import { Fade, Grid } from '@mui/material';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { MASTER_CARD } from '../../../Constants/typePayments';
import { setWitchCardToOpen } from '../../../REDUX/Common/actions';
import './paymentCard.css';

const PaymentCard = ({ paymentMethod }) => {
    const dispatcher = useDispatch()
    return (
        <Grid className='payment-option-card' item md={12} xs={12}>
            <Grid mb={1} className='payment-card' item xs={12}>
                <Fade in={true}>
                    <img onClick={() => dispatcher(setWitchCardToOpen(paymentMethod.title))} className={`image ${paymentMethod.title === MASTER_CARD && 'master'}`} src={paymentMethod.logo} alt='Orange Money' />
                </Fade>
            </Grid>
            <Grid mb={1} item xs={12}>
                <p className='payment-card-title'>{paymentMethod.title}</p>
            </Grid>
        </Grid>
    )
}

export default PaymentCard;