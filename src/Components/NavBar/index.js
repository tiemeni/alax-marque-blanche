import React from 'react';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import styles from './styles';
import { navItems } from '../../Helpers/defaultData';
import colors from '../../Constants/colors';

const NavItem = ({ content, selected, handleChange }) => {
    const boxColor = selected === content.id ? colors.primaryColor : '#fff';
    const textColor = selected === content.id ? '#fff' : '#000';

    return (
        <Grid
            item md={12}
            sx={styles.navItem}
            bgcolor={boxColor}
            color={textColor}
            onClick={() => handleChange(content.id)}
            mt={content.id === 6 && 3}
        >
            {content.icon}
            <Typography>{content.label}</Typography>
        </Grid>
    )
}

const NavBar = () => {
    const [selected, setSelected] = React.useState(1);
    return (
        <Grid container justifyContent={'center'}>
            <Grid item>
                <Avatar sx={styles.avatar}>User</Avatar>
            </Grid>
            <Grid item md={12} mt={1} textAlign={'center'}>
                <Typography style={styles.nomPatient}>Emmanuel EMBOLO</Typography>
            </Grid>
            <Grid item md={12} textAlign={'center'}>
                <Typography sx={styles.infoPatient}>Homme, <span style={{ fontSize: 12 }}>26 Ans</span></Typography>
            </Grid>

            <Grid item md={12} mt={5}>
                {navItems.map((item) => (
                    <NavItem
                        key={item.id}
                        content={item}
                        selected={selected}
                        handleChange={setSelected} />
                ))}
            </Grid>
        </Grid>
    )
}

export default NavBar;