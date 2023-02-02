import * as React from 'react';
import { Alert, Box, Button, Checkbox, Collapse, Container, Fade, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material'
import './auth.css';
import InputMask from 'react-input-mask';
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

const messages = {
    mailMsg: 'Veuillez entrez une adresse mail valide',
    emptyMail: 'Veuillez renseigner votre adresse mail',
    emptyPass: 'Veuillez renseigner votre mot de passe',
    passMsg: 'La taille du mot de passe est inférieur à 8.',
    confirmMsg: 'Les deux adresses ne sont pas identiques.',
    newPass: 'Votre nouveau mot de passe vous a été envoyé par email.'
}

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

const Login = ({ checkEmail, checkPass }) => {
    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = React.useState({
        emailError: null,
        passwordMsg: null
    });
    const [showPassword, setShowPassword] = React.useState(false);
    const [canBeSubmitted, SetCanBeSubmitted] = React.useState(false);
    const [isReset, setIsReset] = React.useState({ isIt: false, value: '' });

    const checkEmptyField = () => {
        if (formData.email === '' && formData.password === '') {
            setErrors({
                passwordMsg: messages.emptyPass,
                emailError: messages.emptyMail
            })
            return false;
        } else if (formData.email === '') {
            setErrors({
                ...errors,
                emailError: messages.emptyMail
            })
            return false;
        } else if (formData.password === '') {
            setErrors({
                ...errors,
                passwordMsg: messages.emptyPass,
            })
            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (canBeSubmitted && checkEmptyField()) {
            console.log("Envoie du formulaire en cours...")
        }
    }


    const handleChange = (e) => {
        const val = e.target.value;
        e.preventDefault();
        switch (e.target.name) {
            case 'email':
                setFormData({ ...formData, email: val })
                setErrors({ ...errors, emailError: checkEmail(val) ? null : messages.mailMsg })
                break;
            case 'password':
                setFormData({ ...formData, password: val })
                setErrors({ ...errors, passwordMsg: checkPass(val) ? null : messages.passMsg })
                break;
            default:
                break;
        }
    }

    const handleReset = (e) => {
        e.preventDefault();
        setIsReset({
            isIt: true,
            msg: messages.newPass
        })
    }

    React.useEffect(() => {
        if (errors.emailError !== null || errors.passwordMsg !== null) {
            SetCanBeSubmitted(false);
            return;
        }
        SetCanBeSubmitted(true)

        if (isReset.isIt) {
            setTimeout(() => {
                setIsReset({ isIt: false, msg: '' })
            }, 10000);
        }
    }, [errors, isReset])


    return (
        <Collapse in={true}>
            <Box mb={1} className='container-login'>
                <Grid mb={3} className='container-login_input'>
                    <Grid xs={12} className='container-box_input_box'>
                        <TextField
                            className='text-field-input'
                            name='email'
                            type='email'
                            value={formData.email}
                            onChange={handleChange}
                            variant='outlined'
                            placeholder='Adresse mail'
                            sx={customStyles.customFieldStyle}
                            fullWidth
                            helperText={errors.emailError}
                            error={errors.emailError !== null}
                        />
                    </Grid>
                </Grid>
                <Grid className='container-login_input'>
                    <Grid className='container-box_input_box'>
                        <TextField
                            className='text-field-input'
                            name='password'
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
                            onChange={handleChange}
                            variant='outlined'
                            placeholder='Mot de passe'
                            sx={customStyles.customFieldStyle}
                            fullWidth
                            helperText={errors.passwordMsg}
                            error={errors.passwordMsg !== null}
                        />
                    </Grid>
                </Grid>
                <Grid className='container-login_input'>
                    <Box className='container-box_input_box'>
                        <p onClick={handleReset} className='forget-password'>Réinitialiser mon mot de passe</p>
                    </Box>
                </Grid>
                {isReset.isIt && (
                    <Grid className='container-login_input'>
                        <Fade in={isReset.isIt}>
                            <Grid className='container-box_input_box reset-password'>
                                <Alert color='info' severity="success" onClose={() => { setIsReset({ isIt: false, msg: '' }) }}>
                                    {isReset.msg}
                                </Alert>
                            </Grid>
                        </Fade>
                    </Grid>
                )}
                <Grid mt={3} className='container-login_input'>
                    <Box className='container-box_input_box button'>
                        <Button onClick={handleSubmit} className='input-box_button' variant='contained'>
                            <p className='login-text'>Connexion</p>
                        </Button>
                    </Box>
                </Grid>

            </Box>
        </Collapse>
    )
}

const Auth = () => {
    const [selected, setSelected] = React.useState({
        id: 1,
        value: 'selected'
    });

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.id === 'login') {
            setSelected({ ...selected, id: 2 });
            return;
        }
        setSelected({ ...selected, id: 1 });
    }

    const checkEmailValidity = (email) => {
        const emailFormat = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
        return emailFormat.test(email);
    }

    const checkPassValidity = (pass) => {
        return pass.length > 8
    }

    return (
        <Container>
            <Grid class="container-title">
                <p className='container-title_text'>Vous devez confirmer votre identité</p>
            </Grid>
            <Box className='container-menu'>
                <Grid id='register' onClick={handleClick} className={`container-menu-item register ${selected.id === 1 && selected.value}`} >
                    Créer un compte
                </Grid>
                <Grid id='login' onClick={handleClick} className={`container-menu-item login ${selected.id === 2 && selected.value}`}>
                    Se connecter
                </Grid>
            </Box>
            <FormControl style={{ justifyContent: 'center', height: 400 }} fullWidth>
                {selected.id === 1 ?
                    <Register checkEmail={checkEmailValidity} checkPass={checkPassValidity} />
                    :
                    <Login checkEmail={checkEmailValidity} checkPass={checkPassValidity} />
                }
            </FormControl>
        </Container >
    )
}
// 
export default Auth;