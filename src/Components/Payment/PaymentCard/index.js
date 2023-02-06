import { Fade, Grid } from '@mui/material';
import * as React from 'react';
import './paymentCard.css';

const PaymentCard = ({ paymentMethod }) => {
    return (
        <Grid className='payment-option-card' item md={6} xs={12}>
            <Grid mb={1} className='payment-card' item xs={12}>
                <Fade in={true}>
                    <img className={`image ${paymentMethod.title === 'Master Card' && 'master'}`} src={paymentMethod.logo} alt='Orange Money' />
                </Fade>
            </Grid>
            <Grid mb={1} item xs={12}>
                <p className='payment-card-title'>{paymentMethod.title}</p>
            </Grid>
        </Grid>
    )
}

export default PaymentCard;