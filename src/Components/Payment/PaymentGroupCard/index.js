import { Grid } from "@mui/material";
import * as React from "react";
import PaymentCard from "../PaymentCard";
import './paymentGroupCard.css';

const PaymentGroupCard = ({ paymentMethods }) => {
    return (
        <Grid mb={0} item className='payment-container-item' md={12} xs={12}>
            <Grid mb={2} pt={2} item xs={12}>
                <h4 className='mobile-payment-title'>{paymentMethods.title}</h4>
            </Grid>
            <Grid className='payment-method' item md={12} xs={12}>
                {paymentMethods.data.map((mp) => <PaymentCard key={mp?.title} paymentMethod={mp} />)}
            </Grid>
        </Grid>
    )
}

export default PaymentGroupCard;