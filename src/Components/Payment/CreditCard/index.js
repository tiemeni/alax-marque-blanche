import { Button, Collapse, Grid, TextField } from '@mui/material';
import * as React from 'react';
import './creditCard.css';
import arrowRight from '../../../Assets/Images/next.png'
import arrowLeft from '../../../Assets/Images/left-arrow.png'
import VisaLogo from '../../../Assets/Images/visa_logo.jpg';
import mastercard from '../../../Assets/Images/Mastercard_logo.jpg'
import { customStyles } from '../../../Constants/customsStyles';
import InputMask from 'react-input-mask';
import { VISA } from '../../../Constants/typePayments';
import { useDispatch } from 'react-redux';
import { setWitchCardToOpen } from '../../../REDUX/Common/actions';
import '../payment.css'

const fieldStyles = {
    ...customStyles.customFieldStyle,
    '& fieldset': {
        borderRadius: 25,
    },
}

const CreditCard = ({ selectedCard }) => {
    const dispatcher = useDispatch()
    const [formData, setFormData] = React.useState({
        cardNumber: '',
        expiration: {
            month: '',
            year: ''
        },
        cvv: '',
        amount: ''
    });

    const handleChange = (e) => {
        const val = e.target.value
        switch (e.target.name) {
            case 'card-number':
                setFormData({
                    ...formData,
                    cardNumber: val
                });
                break;
            case 'month':
                setFormData({
                    ...formData,
                    expiration: {
                        ...formData.expiration,
                        month: val
                    }
                });
                break;
            case 'year':
                setFormData({
                    ...formData,
                    expiration: {
                        ...formData.expiration,
                        year: val
                    }
                });
                break;
            case 'cvv':
                setFormData({
                    ...formData,
                    cvv: val
                });
                break;
            case 'amount':
                setFormData({
                    ...formData,
                    amount: val
                });
                break;
            default:
                break;
        }
    }

    return (
        <Collapse in={true}>
            <Grid container>
                <Grid item xs={12}>
                    <h4 className='mobile-payment-title'
                        style={{
                            flexDirection: "row",
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                        <img src={arrowLeft}
                            onClick={() => dispatcher(setWitchCardToOpen(null))}
                            style={{
                                height: 25,
                                width: 25,
                                marginRight: 10,
                                cursor: 'pointer'
                            }}
                            alt={"arrow back"} />
                        <p>Cartes bancaires</p>
                        <img src={arrowRight}
                            style={{ height: 20, width: 20 }}
                            alt={"arrow right"} />
                        <p>{selectedCard === VISA ? "Visa" : "Master card"}</p>
                    </h4>
                </Grid>
                <Grid className='payment-method-logo'
                    item xs={12}>
                    <img src={selectedCard === VISA ? VisaLogo : mastercard}
                        alt={selectedCard === VISA ? 'Visa' : 'Master card'} />
                </Grid>
                <Grid pl={2} pr={2} mb={0} item xs={12}>
                    <Grid item xs={12}>
                        <InputMask
                            mask='9999 9999 9999 9999'
                            onChange={handleChange}
                            value={formData.cardNumber}>
                            {(inputProps) => <TextField
                                {...inputProps}
                                type='tel'
                                fullWidth
                                sx={fieldStyles}
                                placeholder='Numero de carte'
                                name='card-number'
                            />}
                        </InputMask>
                    </Grid>
                </Grid>
                <Grid pl={2} pr={2} mb={3}
                    className='flex-container' item xs={12}>
                    <Grid item xs={7} mr={2}>
                        <p className='input-label'>Date d'expiration</p>
                        <Grid className='flex-container'
                            item xs={12}>
                            <Grid item xs={5}>
                                <TextField
                                    type='number'
                                    fullWidth
                                    sx={fieldStyles}
                                    helperText=''
                                    placeholder='Mois'
                                    value={formData.expiration.month}
                                    onChange={handleChange}
                                    name='month'
                                />
                            </Grid>
                            <Grid item>/</Grid>
                            <Grid item xs={5}>
                                <TextField
                                    type='number'
                                    fullWidth
                                    sx={fieldStyles}
                                    placeholder='Année'
                                    value={formData.expiration.year}
                                    onChange={handleChange}
                                    name='year'
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <p className='input-label'>CVV</p>
                        <InputMask mask='999'
                            onChange={handleChange}
                            value={formData.cvv}>
                            {(inputProps) => <TextField
                                {...inputProps}
                                type='tel'
                                fullWidth
                                sx={fieldStyles}
                                name='cvv'
                            />}
                        </InputMask>
                    </Grid>
                </Grid>
                <Grid pl={2} pr={2} item xs={12} mb={0}>
                    <Grid item xs={12}>
                        <TextField
                            type='tel'
                            fullWidth
                            sx={fieldStyles}
                            placeholder='Montant'
                            value={formData.amount}
                            onChange={handleChange}
                            name='amount'
                        />
                    </Grid>
                </Grid>
                <Grid className='flex-container-center'
                    pl={2}
                    pr={2}
                    item
                    xs={12}>
                    <Button className='btn-submit input-box_button-disabled'
                        variant='contained'>
                        <p className='login-text'>
                            Soumettre
                        </p>
                    </Button>
                </Grid>
            </Grid>
        </Collapse>
    )
}

export default CreditCard;