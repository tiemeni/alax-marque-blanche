import * as React from 'react';
import { Box, Container, FormControl, Grid, Button } from '@mui/material'
import './auth.css';
import Register from './Register';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { getActuelStepById } from '../../Helpers';
import { editeStep } from '../../REDUX/Step/actions';
import { STEP2 } from '../../Constants/steps';


export const checkEmailValidity = (email) => {
    const emailFormat = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    return emailFormat.test(email);
}

export const checkPassValidity = (pass) => {
    return pass.length > 8
}

const Auth = () => {
    const steps = useSelector(state => state.StepReducer.steps);
    const activeStep = useSelector(state => state.StepReducer.activeStepIndex);
    const dispatcher = useDispatch()
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

    const onGoNext = (form) => {
        const data = {
            firstConnexion: true,
            email: form?.email,
            nom: form?.name,
            birthday: form?.birthdate,
            phone: form?.phone,
            conditionAccepted: form?.isAccept,
            civilite: 1
        }
        dispatcher(editeStep({ key: STEP2, inputs: data }))
    }

    return (
        <Container>
            <Grid class="container-title">
                <p className='container-title_text'>{getActuelStepById(steps, activeStep)?.outputs?.sixthTitle}</p>
            </Grid>
            <Box className='container-menu'>
                <Button id='register' onClick={handleClick} className={`container-menu-item register ${selected.id === 1 && selected.value}`} >
                    Créer un compte
                </Button>
                <Button id='login' onClick={handleClick} className={`container-menu-item login ${selected.id === 2 && selected.value}`}>
                    Se connecter
                </Button>
            </Box>
            <FormControl style={{ justifyContent: 'center', height: "auto", marginTop: "5%" }} fullWidth>
                {selected.id === 1 ?
                    <Register onGoNext={onGoNext} checkEmail={checkEmailValidity} checkPass={checkPassValidity} />
                    :
                    <Login onGoNext={onGoNext} checkEmail={checkEmailValidity} checkPass={checkPassValidity} />
                }
            </FormControl>
        </Container >
    )
}
// 
export default Auth;