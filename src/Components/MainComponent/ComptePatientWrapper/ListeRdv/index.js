import React, { useState } from "react";
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
  MenuItem,
  Container,
} from "@mui/material";
import styles from "./styles";
import { rdv, Statut, tableHeaders } from "../../../../Helpers/defaultData";
import SearchIcon from "@mui/icons-material/Search";
import { ReactComponent as FilterIcon } from "../../../../Assets/svgs/Filter.svg";
import { ReactComponent as CloseIcon } from "../../../../Assets/svgs/Union-1.svg";
import colors from "../../../../Constants/colors";
import { changeScreen } from "../../../../REDUX/Step/actions";
import { useDispatch } from "react-redux";
import { DETAIL_RDV } from "../../../../Constants/steps";
import formatDate from "../../../../Constants/formateDate";
import moment from "moment";

const ListeRdv = () => {
  const [filters, setFilters] = useState({
    statut: "Les statuts",
    motif: "",
    centre: "",
    date: "",
    specialty: "Toutes les spécialités",
    jour: "Toute la semaine",
    praticien: "",
    specialite: "",
  });

  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const { statut, motif, centre, praticien, specialite } = filters;

  const filterRdv = (rdv) => {
    const currentDate = formatDate(moment());
    const rdvDate = formatDate(rdv.date);

    const statutMatch =
      statut === "Les statuts" ||
      (statut === "Aujourd'hui" && rdvDate === currentDate) ||
      rdv.statut.toLowerCase() === statut.toLowerCase();

    const motifCentreMatch =
      (centre === "" && motif === "") ||
      rdv.centre.toLowerCase().includes(`${centre}${motif}`.toLowerCase()) ||
      rdv.motif.toLowerCase().includes(`${centre}${motif}`.toLowerCase()) ||
      rdv.praticien
        .toLowerCase()
        .includes(`${centre}${motif}${praticien}`.toLowerCase()) ||
      rdv.specialite
        .toLowerCase()
        .includes(`${centre}${motif}${praticien}${specialite}`.toLowerCase());

    return statutMatch && motifCentreMatch;
  };

  const filteredRdv = rdv.filter(filterRdv);

  const handleRouteChange = () => {
    dispatch(changeScreen(DETAIL_RDV));
  };

  return (
    <Container maxWidth="lg">
      <Grid xs={12} sm={12} container spacing={2} justifyContent={"center"}>
        <Grid item xs={12}>
          <Typography sx={styles.pageTitle}>Mes rendez-vous</Typography>
        </Grid>
        <Grid item mt={3} mb={-2} xs={12}>
          <Button sx={styles.filter} startIcon={<FilterIcon />}>
            <Typography>Filtrez sur</Typography>
          </Button>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={12}
          sx={{ justifyContent: "space-between" }}
          spacing={2}
        >
          <Grid item xs={12} sm={2}>
            <TextField
              name="statut"
              size="small"
              select
              fullWidth
              value={statut}
              onChange={handleFilterChange}
              endIcon={<CloseIcon />}
            >
              <MenuItem value="Les statuts">Les statuts</MenuItem>
              <MenuItem value="Aujourd'hui">Aujoud'hui</MenuItem>
              {Statut.map((status) => (
                <MenuItem key={status.label} value={status.label}>
                  {status.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="centre"
              placeholder="Recherche globale"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={handleFilterChange}
              value={`${centre}${motif}${praticien}${specialite}`}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TableContainer
            component={Paper}
            sx={{ maxHeight: "55vh", overflow: "auto" }}
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow sx={{ color: "black" }}>
                  <TableCell padding="checkbox">
                    <Typography></Typography>
                  </TableCell>
                  {tableHeaders.map((header) => (
                    <TableCell key={header}>{header}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRdv.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6}>
                      <Grid container sx={styles.gridContent}>
                        <Typography sx={styles.noTransactions}>
                          Aucun rendez-vous ne correspond à ce filtre
                        </Typography>
                      </Grid>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredRdv.map((row, index) => (
                    <TableRow
                      style={styles.rowItem}
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell padding="checkbox">
                        <Typography ml={2}>{index + 1}</Typography>
                      </TableCell>
                      <TableCell
                        sx={styles.rowItem}
                        component="th"
                        scope="row"
                        onClick={handleRouteChange}
                      >
                        {row.motif}
                      </TableCell>
                      <TableCell sx={styles.rowItem}>{row.praticien}</TableCell>
                      <TableCell sx={styles.rowItem}>{row.centre}</TableCell>
                      <TableCell sx={styles.rowItem}>
                        {formatDate(row.date)}
                      </TableCell>
                      <TableCell sx={styles.statut}>
                        <Box
                          sx={{
                            ...styles.indicator,
                            border:
                              row.statut === "Enregistré"
                                ? "1px solid " + colors.primaryColor
                                : row.statut === "Terminé"
                                ? "1px solid " + colors.succes
                                : "1px solid " + colors.danger,
                          }}
                        ></Box>
                        <Typography
                          sx={{
                            ...styles.label,
                            color:
                              row.statut === "Enregistré"
                                ? colors.primaryColor
                                : row.statut === "Terminé"
                                ? colors.succes
                                : colors.danger,
                          }}
                        >
                          {row.statut}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ListeRdv;
