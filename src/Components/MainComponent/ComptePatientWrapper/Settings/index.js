import React from 'react';
import { Divider, Grid, MenuItem, Select, Switch, Typography } from '@mui/material';
import styles from './style';
import { settings } from '../../../../Helpers/defaultData';
import { ReactComponent as WebsiteIcon } from '../../../../Assets/svgs/Website.svg'

const SettingItem = ({ content }) => {
    return (
        <Grid item xs={12} sx={styles.flex}>
            <Grid item xs={1} textAlign={'end'} >
                {content.icon}
            </Grid>
            <Grid item xs={9} ml={3}>
                <Typography>{content.label}</Typography>
            </Grid>
            <Grid item xs={1}>
                {!content?.lang ?
                    <Switch /> :
                    <Select id="demo-simple-select" value="Fr" sx={styles.select} size='small'>
                        <MenuItem value={'Fr'}>Fr</MenuItem>
                        <MenuItem value={'En'}>En</MenuItem>
                    </Select>
                }
            </Grid>
        </Grid>
    )
}

const Settings = () => {
    return (
        <Grid container>
            <Grid item md={12}>
                <Typography sx={styles.pageTitle}>Paramètres</Typography>
            </Grid>

            <Grid item xs={12} mt={5}>
                {settings.map((setting, index) => (
                    <>
                        <SettingItem key={setting.id} content={setting} />
                        {index === 0 && <Grid item xs={12} marginY={2}><Divider /></Grid>}
                    </>
                )
                )}
            </Grid>
        </Grid>
    )
}

export default Settings;