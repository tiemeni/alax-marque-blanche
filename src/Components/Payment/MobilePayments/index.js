import { Grid, TextField } from '@mui/material'
import React from 'react'
import arrowLeft from '../../../Assets/Images/left-arrow.png'
import arrowRight from '../../../Assets/Images/next.png'
import { useDispatch } from 'react-redux'
import { customStyles } from '../../../Constants/customsStyles'
import { setWitchCardToOpen } from '../../../REDUX/Common/actions'
import { ORANGE_MONEY } from '../../../Constants/typePayments'

const fieldStyles = {
    ...customStyles.customFieldStyle,
    '& fieldset': {
        borderRadius: 15,
    },
}

export default function MobilePaymentForm({ selectedCard }) {
    console.log(selectedCard)
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
            <div>
                <img src={""} alt={''} />
                <p>ORANGE MONEY</p>
            </div>
            <div>

            </div>
            <div>
                <TextField
                    type='number'
                    fullWidth
                    sx={fieldStyles}
                    placeholder='Année'
                    value={""}
                    name='year'
                />
                <TextField
                    type='number'
                    fullWidth
                    sx={fieldStyles}
                    placeholder='Année'
                    value={""}
                    name='year'
                />
            </div>
        </div>
    )
}
