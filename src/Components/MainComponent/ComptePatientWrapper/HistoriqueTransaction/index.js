import React, { useState } from "react";
import {
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Container,
} from "@mui/material";

import styles from "./styles";
import { MoyenPay, Transactions } from "../../../../Helpers/defaultData";
import { ReactComponent as FilterIcon } from "../../../../Assets/svgs/Filter.svg";
import SearchIcon from "@mui/icons-material/Search";
import { ReactComponent as CloseIcon } from "../../../../Assets/svgs/Union-1.svg";
import colors from "../../../../Constants/colors";
import OmLogo from "../../../../Assets/Images/Orange_Money_logo_PNG3.png";
import MtnLogo from "../../../../Assets/Images/MOMO-removebg-preview.png";
import VisaLogo from "../../../../Assets/Images/visa_logo.jpg";
import MasterCardLogo from "../../../../Assets/Images/Mastercard_logo.jpg";
import formatDate from "../../../../Constants/formateDate";
import moment from "moment";

const HistoriqueTransaction = () => {

  const [filters, setFilters] = useState({
    mPay: "Moyens de paiement",
    motif: "",
    centre: "",
    date: "",
    praticien: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

 

  const { mPay, motif, centre, date, praticien } = filters;

  const filterTransactions = (transaction) => {
    const currentDate = formatDate(moment());
    const transactionDate = formatDate(transaction.date);

    const mPayMatch =
      mPay === "Moyens de paiement" ||
      (mPay === "Aujourd'hui" &&
        transactionDate === currentDate) ||
      transaction.moyen.toLowerCase() === mPay.toLowerCase();

    const allItemMatch =
      (centre === "" && motif === "" && praticien === "") ||
      transaction.centre
        .toLowerCase()
        .includes(`${centre}${motif}`.toLowerCase()) ||
      transaction.motif
        .toLowerCase()
        .includes(`${centre}${motif}`.toLowerCase()) ||
      transaction.praticien
        .toLowerCase()
        .includes(`${centre}${motif}${praticien}`.toLowerCase());

    const dateMatch =
      date === "" ||
      transaction.date.toLowerCase().startsWith(date.toLowerCase());

    return mPayMatch && allItemMatch && dateMatch;
  };

  const filteredTransactions = Transactions.filter(filterTransactions);

  return (
    <Container  maxWidth="lg">
      <Grid  xs={12} sm={12} container spacing={2} justifyContent={"center"}>
        <Grid item xs={12}>
          <Typography sx={styles.pageTitle}>Mes transactions</Typography>
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
              name="mPay"
              size="small"
              select
              fullWidth
              value={mPay}
              onChange={handleFilterChange}
              endIcon={<CloseIcon />}
            >
              <MenuItem value="Moyens de paiement">Moyens de paiement</MenuItem>
              <MenuItem value="Aujourd'hui">Aujourd'hui</MenuItem>
              {MoyenPay.map((pay) => (
                <MenuItem key={pay.pay} value={pay.pay}>
                  {pay.pay}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4} >
            <TextField
              name="centre"
              placeholder="Recherhe globale"
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
              value={`${centre}${motif}${praticien}`}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper className="itemTrans" sx={styles.stylePaper}>
            {filteredTransactions.length === 0 ? (
              <Grid container sx={styles.gridContent}>
                <Typography sx={styles.noTransactions}>
                  Aucune transaction ne correspond à ce filtre
                </Typography>
              </Grid>
            ) : (
              <List sx={{ alignContent: "center" }} dense>
                {filteredTransactions.map((row, index) => (
                  <ListItem
                    key={row.id}
                    sx={{
                      borderBottom:
                        index !== filteredTransactions.length - 1
                          ? "1.5px solid rgba(224, 224, 224, 1)"
                          : 0,
                    }}
                  >
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography
                            style={{ color: colors.primaryColor }}
                            component="span"
                            variant="subtitle1"
                          >
                            {row.motif}
                          </Typography>
                        </React.Fragment>
                      }
                      secondary={
                        <React.Fragment>
                          <Typography
                            style={{ color: 'black', opacity:1, }}
                            component="p"
                            variant="body2"
                          >
                            <Grid
                              container
                              style={styles.styleSpaceCenter}
                              spacing={1}
                            >
                              <Grid item xs={3}>
                                <Typography variant="body2">
                                  {row.praticien}
                                </Typography>
                                <Typography variant="body2">
                                  Centre : {row.centre}
                                </Typography>
                              </Grid>
                              <Grid item xs={3} style={styles.itemIcon}>
                                <img
                                  src={
                                    row.moyen === "Visa"
                                      ? VisaLogo
                                      : row.moyen === "Master Card"
                                      ? MasterCardLogo
                                      : row.moyen === "Mobile Money"
                                      ? MtnLogo
                                      : OmLogo
                                  }
                                  style={{
                                    height: 35,
                                    width: 50,
                                    borderRadius: 0,
                                  }}
                                  alt="arrow back"
                                />
                                <Typography variant="body2">
                                  {row.montant}
                                </Typography>
                              </Grid>
                              <Grid item xs={3}>
                                <Typography variant="body2">
                                  {formatDate(row.date)}
                                </Typography>
                                <Typography variant="body2">
                                  Statut :
                                  <span
                                    style={{
                                      color:
                                        row.statut === "Réussi"
                                          ? colors.succes
                                          : colors.danger,
                                    }}
                                  >
                                    {" "}
                                    {row.statut}
                                  </span>
                                </Typography>
                              </Grid>
                            </Grid>
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HistoriqueTransaction;
