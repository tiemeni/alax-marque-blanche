import { Button, TextField } from '@mui/material'
import React from 'react'
import arrowLeft from '../../../Assets/Images/left-arrow.png'
import arrowRight from '../../../Assets/Images/next.png'
import omImg from '../../../Assets/Images/Orange_Money_logo_PNG3.png'
import errorTooltip from '../../../Assets/Images/error-tooltip.png'
import mtnImg from '../../../Assets/Images/MTN-Logo-2002.png'
import { useDispatch } from 'react-redux'
import { customStyles } from '../../../Constants/customsStyles'
import { setWitchCardToOpen } from '../../../REDUX/Common/actions'
import { ORANGE_MONEY } from '../../../Constants/typePayments'
import '../payment.css';

const fieldStyles = {
    ...customStyles.customFieldStyle,
    '& fieldset': {
        borderRadius: 3,
    },
}

export default function MobilePaymentForm({ selectedCard, paymentMethods }) {
    const dispatcher = useDispatch();
    return (
        <div>
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
                <p>Paiements Mobiles</p>
                <img src={arrowRight}
                    style={{ height: 20, width: 20 }}
                    alt={"arrow right"} />
                <p>{selectedCard === ORANGE_MONEY ? "Orange money" : "Master card"}</p>
            </h4>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: "center" }}>
                <img src={selectedCard === ORANGE_MONEY ? omImg : mtnImg}
                    alt={''}
                    style={{ width: selectedCard === ORANGE_MONEY ? "100px" : "50px", }} />
                <p style={{
                    fontSize: "25px",
                    fontWeight: 'bold',
                    marginLeft: selectedCard === ORANGE_MONEY ? 0 : 5
                }}>{selectedCard === ORANGE_MONEY ? "Orange Money" : "MTN Mobile Money"}</p>
            </div>
            <div>

            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: "70%" }}>
                    <p style={{ marginBottom: "3px", fontWeight: 'bold' }}>Montant<span style={{ color: 'red', }}>*</span></p>
                    <TextField
                        type='number'
                        fullWidth
                        sx={fieldStyles}
                        placeholder='500000'
                        value={""}
                        name='amount'
                    />
                    <p style={{ marginBottom: "3px", fontWeight: 'bold' }}>Télephone<span style={{ color: 'red' }}>*</span></p>
                    <TextField
                        type='text'
                        fullWidth
                        sx={fieldStyles}
                        placeholder='+237658686162'
                        value={""}
                        name='number'
                    />
                    <div style={{ display: "flex", flexDirection: 'row', alignItems: 'center' }}>
                        <img src={errorTooltip} style={{ height: 15, width: 15 }} alt={""} />
                        <span style={{ color: 'red', marginLeft: 5 }}>veillez entrer un numero valid!</span>
                    </div>
                </div>
                <div style={{ width: "70%", marginTop: 50 }}>
                    <Button className='btn-submit input-box_button-disabled'
                        style={{ width: "100%" }}
                        variant='contained'>
                        <p className='login-text'>
                            Soumettre
                        </p>
                    </Button>
                </div>
            </div>
        </div>
    )
}
