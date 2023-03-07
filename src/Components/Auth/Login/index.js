import { Alert, Button, Collapse, Fade, Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { messages } from '../../../Helpers/defaultData';
import { customStyles } from '../../../Constants/customsStyles';
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useDispatch } from 'react-redux';
import { changeStep, createStep, editeStep } from '../../../REDUX/Step/actions';
import { STEP0, STEP2, STEP3 } from '../../../Constants/steps';

const Login = ({ checkEmail, checkPass }) => {
    const dispatcher = useDispatch()
    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = React.useState({
        emailError: null,
        passwordMsg: null
    });
    const [isReset, setIsReset] = React.useState({ isIt: false, value: '' });
    const [showPassword, setShowPassword] = React.useState(false);

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

    const isCorrectInputs = (obj) => obj.email && checkEmail(obj.email) && obj.password && checkPass(obj.password)

    const handleSubmit = () => {
        if (isCorrectInputs(formData) && checkEmptyField()) {
            let step = {
                subStep: STEP0,
                outputs: {
                    firstTitle: "Selectionnez le créneau qui vous convient",
                },
                inputs: {
                    selectedMotif: null,
                    selectedRegion: null,
                    selectedVille: null,
                }
            }
            const data = {
                email: formData?.email,
                password: formData?.password,
            }
            dispatcher(editeStep({ key: STEP2, inputs: data }));
            dispatcher(createStep({ key: STEP3, step }));
            dispatcher(changeStep({ step: STEP3, subStep: STEP0 }));
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

    // React.useEffect(() => {
    //     if (errors.emailError !== null || errors.passwordMsg !== null) {
    //         SetCanBeSubmitted(false);
    //         return;
    //     }
    //     SetCanBeSubmitted(true)

    //     if (isReset.isIt) {
    //         setTimeout(() => {
    //             setIsReset({ isIt: false, msg: '' })
    //         }, 10000);
    //     }
    // }, [errors, isReset])


    return (
        <Collapse in={true}>
            <Box mb={1} className='container-login'>
                <Grid mb={3}  className='container-login_input'>
                    <Grid className='container-box_input_box'>
                        <TextField
                        
                            className='text-field-input'
                            name='email'
                            type='email'
                            value={formData.email}
                            onChange={handleChange}
                            variant='outlined'
                            placeholder='Adresse e-mail'
                            sx={customStyles.customFieldStyle}
                            fullWidth
                            // helperText={errors.emailError}
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
                            // helperText={errors.passwordMsg}
                            error={errors.passwordMsg !== null}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>,
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid className='container-login_input'>
                    <Box className='container-box_input_box'>
                       <center> <p onClick={handleReset} className='forget-password'>Réinitialiser mon mot de passe</p></center>
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
                        <Button onClick={handleSubmit} className={isCorrectInputs(formData) ? 'input-box_button' : 'input-box_button-disabled'} variant='contained'>
                            <p className='login-text'>Connexion</p>
                        </Button>
                    </Box>
                </Grid>

            </Box>
        </Collapse>
    )
}

export default Login;