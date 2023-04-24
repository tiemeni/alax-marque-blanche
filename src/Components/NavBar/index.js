import React from 'react';
import { Avatar, Grid, Typography } from '@mui/material';
import styles from './styles';
import { navItems } from '../../Helpers/defaultData';
import colors from '../../Constants/colors';
import { useDispatch, useSelector } from 'react-redux';
import { changeScreen } from '../../REDUX/Step/actions';



const NavItem = ({ content, setSelected }) => {
    const stepAccount = useSelector(state => state.StepReducer.stepAccount);
    const boxColor = stepAccount === content.step ? colors.primaryColor : '#fff';
    const textColor = stepAccount === content.step ? '#fff' : '#000';
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(changeScreen(content.step));
    }

    return (
        <Grid
            className='nav-item'
            item
            md={12}
            sx={styles.navItem}
            bgcolor={boxColor}
            color={textColor}
            onClick={handleChange}
            mt={content.id === 6 && 2}
        >
            {content.icon}
            <Typography className='nav-item-label'>{content.label}</Typography>
        </Grid>
    )
}

const NavBar = () => {
    return (
        <Grid container justifyContent={'center'}>
            <Grid className='patient-info' item>
                <Avatar sx={styles.avatar}>User</Avatar>
            </Grid>
            <Grid className='patient-info' item md={12} mt={1} textAlign={'center'}>
                <Typography style={styles.nomPatient}>Emmanuel EMBOLO</Typography>
            </Grid>
            <Grid className='patient-info' item md={12} textAlign={'center'}>
                <Typography sx={styles.infoPatient}>Homme, <span style={{ fontSize: 12 }}>26 Ans</span></Typography>
            </Grid>

            <Grid item md={12} mt={4}>
                {navItems.map((item) => (
                    <NavItem
                        key={item.id}
                        content={item} />
                ))}
            </Grid>
        </Grid>
    )
}

export default NavBar;