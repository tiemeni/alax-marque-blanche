import * as React from 'react';
import { Box, Checkbox, Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material'
import './auth.css';
import { colors } from '../../Constants/colors';

const customStyles = {
    customRadioStyle: {
        '&.Mui-checked': {
            color: colors.primaryColor
        }
    },
    customFieldStyle: {
        '& label.Mui-focused': {
            color: colors.primaryColor,
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: colors.inputBorder,
            },
            '&.Mui-focused fieldset': {
                borderColor: colors.primaryColor,
            },
        },
    },
    customCheckBoxSyles: {
        '&:hover': {
            color: colors.primaryColor,
            bgcolor: 'transparent'
        },
        '&.Mui-checked': {
            color: colors.primaryColor
        }
    }
}

const Auth = () => {
    const [selected, setSelected] = React.useState({
        id: 1,
        value: 'selected'
    });

    const [formData, setFormData] = React.useState({
        name: '',
        surname: '',
        phone: '',
        birthdate: '',
        email: '',
        confirmEmail: '',
        isAccept: false
    });

    const handleChange = (e) => {
        e.preventDefault();

        switch (e.target.name) {
            case 'name':
                setFormData({ ...formData, name: e.target.value })
                break;
            case 'surname':
                setFormData({ ...formData, surname: e.target.value })
                break;
            case 'phone':
                setFormData({ ...formData, phone: e.target.value })
                break;
            case 'birthdate':
                setFormData({ ...formData, birthdate: e.target.value })
                break;
            case 'email':
                setFormData({ ...formData, email: e.target.value })
                break;
            case 'confirmEmail':
                setFormData({ ...formData, confirmEmail: e.target.value })
                break;
            case 'cgu':
                setFormData({ ...formData, isAccept: !formData.isAccept })
                break;
            default:
                break;
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (selected.id === 1) {
            setSelected({ ...selected, id: 2 });
            return;
        }
        setSelected({ ...selected, id: 1 });
    }

    return (
        <Container>
            <Grid class="container-title">
                <p className='container-title_text'>Vous devez confirmer votre identité</p>
            </Grid>
            <Box className='container-menu'>
                <Grid onClick={handleClick} className={`container-menu-item register ${selected.id === 1 && selected.value}`} >
                    Créer un compte
                </Grid>
                <Grid onClick={handleClick} className={`container-menu-item login ${selected.id === 2 && selected.value}`}>
                    Se connecter
                </Grid>
            </Box>
            <FormControl fullWidth>
                <Box mb={1} className='container-radio'>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="M."
                        name="radio-buttons-group"
                        row
                    >
                        <FormControlLabel value="M." control={<Radio sx={customStyles.customRadioStyle} />} label="M." />
                        <FormControlLabel value="Mme" control={<Radio sx={customStyles.customRadioStyle} />} label="Mme" />
                    </RadioGroup>
                </Box>
                <Grid mb={2} container spacing={10}>
                    <Grid item xs={6}>
                        <TextField
                            className='text-field-input'
                            name='name'
                            type='text'
                            value={formData.name}
                            onChange={handleChange}
                            variant='outlined'
                            placeholder='Nom'
                            sx={customStyles.customFieldStyle}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            type='text'
                            value={formData.surname}
                            name='surname'
                            onChange={handleChange}
                            className='text-field-input'
                            variant='outlined'
                            placeholder='Prénom'
                            fullWidth
                            sx={customStyles.customFieldStyle} />
                    </Grid>
                </Grid>
                <Grid mb={2} container spacing={10}>
                    <Grid item xs={6}>
                        <TextField
                            className='text-field-input'
                            type='date'
                            name='birthdate'
                            onChange={handleChange}
                            value={formData.birthdate}
                            variant='outlined'
                            placeholder='Date de naissance'
                            sx={customStyles.customFieldStyle}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            type='tel'
                            value={formData.phone}
                            onChange={handleChange}
                            name='phone'
                            className='text-field-input'
                            variant='outlined'
                            placeholder='Téléphone'
                            fullWidth sx={customStyles.customFieldStyle} />
                    </Grid>
                </Grid>
                <Grid mb={3} container spacing={10}>
                    <Grid item xs={6}>
                        <TextField
                            type='email'
                            value={formData.email}
                            onChange={handleChange}
                            name='email'
                            className='text-field-input'
                            variant='outlined'
                            placeholder='Adresse mail'
                            fullWidth
                            sx={customStyles.customFieldStyle}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            type='email'
                            onChange={handleChange}
                            name='confirmEmail'
                            value={formData.confirmEmail}
                            className='text-field-input'
                            variant='outlined'
                            placeholder="Confirmer l'adresse mail"
                            fullWidth sx={customStyles.customFieldStyle}
                        />
                    </Grid>
                </Grid>
                <Grid container alignItems={'center'} spacing={2}>
                    <Grid>
                        <Checkbox
                            aria-label='cgu'
                            name='cgu'
                            sx={customStyles.customCheckBoxSyles}
                            checked={formData.isAccept}
                            onClick={handleChange}
                        />
                    </Grid>
                    <Grid>J'accepte les <span className='cgu'>conditions générales</span></Grid>
                </Grid>
            </FormControl>
        </Container >
    )
}
// 
export default Auth;