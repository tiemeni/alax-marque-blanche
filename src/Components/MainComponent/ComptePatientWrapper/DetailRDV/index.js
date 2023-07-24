import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Divider } from "@mui/material";
import BasicTable from "./table";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PrintIcon from "@mui/icons-material/Print";
import TypoText from "./typoTexte";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { auto } from "@popperjs/core";
import { RDV } from "../../../../Constants/steps";
import { useDispatch } from "react-redux";
import { changeScreen } from "../../../../REDUX/Step/actions";
import { rdv, Transactions } from "../../../../Helpers/defaultData";
import formatDate from "../../../../Constants/formateDate";
import moment from "moment";
import styles from "./styles";



const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
function createData(name, calories) {
  return { name, calories};
}
const rows1 = [
  createData("Motif:", rdv[0].motif),
  createData("Praticien:", rdv[0].praticien ),
  createData("Centre", rdv[0].centre),
  createData("Date & Heure:", formatDate(rdv[0].date))
];
const rows2 = [
  createData("Opérateur:", Transactions[0].moyen),
  createData("Téléphone:", "+237 697867567"),
  createData("Montant:", Transactions[0].montant),
  createData("Date:", formatDate(Transactions[0].date))
];

const rowText = [
  createData("Patient:", "TIEMENI Happi"),
  createData("Sexe:", "Homme"),
  createData("Âge:", "24 ans"),
]
export default function DetailRdv() {

  const dispatch = useDispatch()

  const handleRouteChange = () => {
    dispatch(changeScreen(RDV));
  }

  const handleImprimer = () => {
    window.print();
  };


  return (
    <Card sx={styles.container}>
      <CardContent style={{ "padding-bottom": "5px" }}>
        <div id="print-content">
        <Typography
          sx={styles.pageTitle}
          variant="h1"
          gutterBottom
        >
          {rdv[0].motif}
        </Typography>

        <Typography
          component="div"
          style={styles.divBloc}
        >
          <Typography
            sx={{ fontSize: 10, marginRight: "30px" }}
            color="text.secondary"
            gutterBottom
          >
            {formatDate(rdv[0].date)}
          </Typography>

          <Typography
            component="div"
            style={{
              display: "flex",
              alignItems: "center",
              "align-items": 'baseline',
            }}
          >
            <RadioButtonUncheckedIcon
              sx={{ color: "green", fontSize: 6, paddingRight: "8px" }}
            />
            <Typography
              sx={{ fontSize: 10, color: "green" }}
              color="text.secondary"
              gutterBottom
            >
              {rdv[0].statut}
            </Typography>
          </Typography>
        </Typography>

        <Divider style={{ margin: "10px 0 10px" }} textAlign="left">
        </Divider>
        <TypoText rowsText={rowText} />
        <BasicTable rows={rows1} tableHeader={'Info Rendez-vous'} />
        <BasicTable rows={rows2} tableHeader={'Détails de paiment'} />
        </div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            "padding-top": "20px",
          }}
        >
          <Button onClick={handleRouteChange} size="small" startIcon={<ArrowBackIosIcon />}>
            Retour
          </Button>
          <Button onClick={handleImprimer} style={{color: 'light-gray'}} size="small" variant="outlined" startIcon={<PrintIcon />}>
            Imprimer
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
