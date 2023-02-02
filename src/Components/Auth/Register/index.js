import { Button, Checkbox, Collapse, FormControlLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material';
import * as React from 'react';
import InputMask from 'react-input-mask';
import { messages } from '../../../Helpers/defaultData';
import { customStyles } from '../styles';

const Register = ({ checkEmail }) => {
    const [formData, setFormData] = React.useState({
        name: '',
        surname: '',
        phone: '',
        birthdate: '',
        email: '',
        confirmEmail: '',
        isAccept: false
    });
    const [errors, setErrors] = React.useState({
        nameError: null,
        surnameError: null,
        phoneError: null,
        birthdateError: null,
        emailError: null,
        confirmError: null
    })
    const [canBeSubmitted, SetCanBeSubmitted] = React.useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        const val = e.target.value;
        switch (e.target.name) {
            case 'name':
                setFormData({ ...formData, name: val })
                break;
            case 'surname':
                setFormData({ ...formData, surname: val })
                break;
            case 'phone':
                setFormData({ ...formData, phone: val })
                break;
            case 'birthdate':
                setFormData({ ...formData, birthdate: val })
                break;
            case 'email':
                setFormData({ ...formData, email: val, confirmEmail: '' })
                setErrors({ ...errors, emailError: checkEmail(val) ? null : messages.mailMsg })
                break;
            case 'confirmEmail':
                const isIdentical = val === formData.email ? null : messages.confirmMsg
                const v = checkEmail(val) ? isIdentical : messages.mailMsg;
                setFormData({ ...formData, confirmEmail: e.target.value })
                setErrors({ ...errors, confirmError: v })
                break;
            case 'cgu':
                setFormData({ ...formData, isAccept: !formData.isAccept })
                break;
            default:
                break;
        }
    }

    const checkValidity = () => {
        const { name, surname, phone, email, confirmEmail, birthdate } = formData;
        const isReq = 'Veuillez remplir ce champ';
        const isShort = 'Ce champ est trop court';
        setErrors({
            nameError: name === '' ? isReq : name.length < 5 ? isShort : null,
            surnameError: surname === '' ? isReq : surname.length < 5 ? isShort : null,
            phoneError: phone === '' ? isReq : null,
            emailError: email === '' ? isReq : null,
            confirmError: confirmEmail === '' ? isReq : null,
            birthdateError: birthdate === '' ? isReq : null
        })

        if (name === '' || name.length > 5 || surname.length > 5 || surname === '' || phone === '' || email === '' || confirmEmail === '' || birthdate === '') {
            return false
        };

        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (checkValidity() && canBeSubmitted) {
            console.log("Envoie du formulaire en cours...")
        }
    }

    React.useEffect(() => {
        if (errors.emailError !== null || errors.confirmError !== null) {
            SetCanBeSubmitted(false);
            return;
        }
        SetCanBeSubmitted(true);
    }, [formData, errors])


    return (
        <Collapse in={true}>
            <Grid spacing={2} className='container-radio'>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="M."
                    name="radio-buttons-group"
                    row
                >
                    <FormControlLabel value="M." control={<Radio sx={customStyles.customRadioStyle} />} label="M." />
                    <FormControlLabel value="Mme" control={<Radio sx={customStyles.customRadioStyle} />} label="Mme" />
                </RadioGroup>
            </Grid>
            <Grid mb={2} container spacing={2}>
                <Grid item md={6} xs={12}>
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
                        helperText={errors.nameError}
                        error={errors.nameError !== null}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        type='text'
                        value={formData.surname}
                        name='surname'
                        onChange={handleChange}
                        className='text-field-input'
                        variant='outlined'
                        placeholder='Prénom'
                        fullWidth
                        helperText={errors.surnameError}
                        error={errors.surnameError !== null}
                        sx={customStyles.customFieldStyle}
                    />
                </Grid>
            </Grid>
            <Grid mb={2} container spacing={2}>
                <Grid item md={6} xs={12}>
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
                        helperText={errors.birthdateError}
                        error={errors.birthdateError !== null}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <InputMask
                        mask='+237 6\ 99 99 99 99'
                        value={formData.phone}
                        onChange={handleChange}>
                        {(inputProps) => <TextField
                            {...inputProps}
                            type='tel'
                            // onChange={handleChange}
                            name='phone'
                            className='text-field-input'
                            variant='outlined'
                            placeholder='Téléphone'
                            fullWidth sx={customStyles.customFieldStyle}
                            helperText={errors.phoneError}
                            error={errors.phoneError !== null}
                        />}
                    </InputMask>
                </Grid>
            </Grid>
            <Grid mb={3} container spacing={2}>
                <Grid item md={6} xs={12}>
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
                        helperText={errors.emailError}
                        error={errors.emailError !== null}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        type='email'
                        onChange={handleChange}
                        name='confirmEmail'
                        value={formData.confirmEmail}
                        className='text-field-input'
                        variant='outlined'
                        placeholder="Confirmer l'adresse mail"
                        fullWidth sx={customStyles.customFieldStyle}
                        helperText={errors.confirmError}
                        error={errors.confirmError !== null}
                    />
                </Grid>
            </Grid>
            <Grid mb={2} container alignItems={'center'} spacing={2}>
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
            <Grid mb={3} container spacing={2}>
                <Grid item md={6} xs={12}>
                    <Button variant='outlined' className='input-box_button_back-btn'>
                        <p className='login-text back-btn'>Retour</p>
                    </Button>
                </Grid>
                <Grid className='input-box-left' item md={6} xs={12}>
                    <Button className='input-box_button' onClick={handleSubmit}>
                        <p className='login-text'>Créer</p>
                    </Button>
                </Grid>
            </Grid>
        </Collapse>
    )
}

export default Register;