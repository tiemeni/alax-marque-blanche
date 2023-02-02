import * as React from 'react';
import {  Box, Container, FormControl, Grid} from '@mui/material'
import './auth.css';
import Register from './Register';
import Login from './Login';

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