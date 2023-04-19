import React from 'react';
import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Paper,
    TextField,
    Button,
    InputAdornment,
    Box,
} from '@mui/material';
import styles from './styles';
import { rdv } from '../../../../Helpers/defaultData';
import { ReactComponent as FilterIcon } from '../../../../Assets/svgs/Filter.svg';
import { ReactComponent as SearchIcon } from '../../../../Assets/svgs/Search.svg';
import { ReactComponent as CloseIcon } from '../../../../Assets/svgs/Union-1.svg';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const ListeRdv = () => {
    return (
        <Grid container>
            <Grid item md={12}>
                <Typography sx={styles.pageTitle}>Mes rendez-vous</Typography>
            </Grid>

            <Grid item xs={12} mt={5} sx={styles.settings}>
                <Grid item md={6} sm={6} xs={6}>
                    <Grid item xs={12}>
                        <Button sx={styles.filter} startIcon={<FilterIcon />}>
                            <Typography>Filtre</Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={12} sx={styles.filterItem}>
                        <Button sx={styles.item} endIcon={<CloseIcon />}>
                            <Typography fontSize={14}>Terminé</Typography>
                        </Button>
                    </Grid>
                </Grid>
                <Grid item md={6} sm={6} xs={6} sx={styles.input}>
                    <TextField
                        sx={styles.search}
                        placeholder='Rechercher par praticien, motif, lieu, ...'
                        size="small"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }} />
                </Grid>
            </Grid>

            <Grid item mt={2} md={12}>
                <TableContainer component={Paper} sx={{ maxHeight: 340 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Typography></Typography>
                                </TableCell>
                                <TableCell>Motifs</TableCell>
                                <TableCell align="right">Praticiens</TableCell>
                                <TableCell align="right">Centres</TableCell>
                                <TableCell align="right">Date</TableCell>
                                <TableCell align="right">Statut</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rdv.map((row, index) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell padding="checkbox">
                                        <Typography ml={2}>{index + 1}</Typography>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.motif}
                                    </TableCell>
                                    <TableCell align="right">{row.praticien}</TableCell>
                                    <TableCell align="right">{row.centre}</TableCell>
                                    <TableCell align="right">{row.date}</TableCell>
                                    <TableCell sx={styles.statut}>
                                        <Box sx={styles.indicator}></Box>
                                        <Typography sx={styles.label}>{row.statut}</Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}

export default ListeRdv;