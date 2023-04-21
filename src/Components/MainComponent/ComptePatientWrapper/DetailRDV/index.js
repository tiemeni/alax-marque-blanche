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
  createData("Motif:", "Première consultation"),
  createData("Praticien:", "Dr. Tiemeni Happi"),
  createData("Centre", "Clinique FOUDA"),
  createData("Date & Heure:", "23.02.2023 | 14:30")
];
const rows2 = [
  createData("Opérateur:", "Orange Money"),
  createData("Téléphone:", "+237 697867567"),
  createData("Montant:", "15.000 Fcfa"),
  createData("Date:", "12.10.2022 | 12:30")
];

const rowText = [
  createData("Patient:", "TIEMENI Happi"),
  createData("Sexe:", "Homme"),
  createData("Âge:", "24"),
]
export default function DetailRdv() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent style={{ "padding-bottom": "5px" }}>
        <Typography
          sx={{ fontSize: 14, fontWeight: 700 }}
          variant="h1"
          color="text.primary"
          gutterBottom
        >
          Première consultation
        </Typography>

        <Typography
          component="div"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            alignContent: "space-between",
          }}
        >
          <Typography
            sx={{ fontSize: 10, marginRight: "30px" }}
            color="text.secondary"
            gutterBottom
          >
            Lundi, 22 Février 2022
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
              Enregistré
            </Typography>
          </Typography>
        </Typography>

        <Divider style={{ margin: "10px 0 10px" }} textAlign="left">
          <Chip label="Info Patient" />
        </Divider>

        <TypoText rowsText={rowText} />

        <Divider style={{ margin: "10px 0 10px" }} textAlign="left">
          <Chip label="Info Rendez-vous" />
        </Divider>

        <BasicTable rows={rows1} />

        <Divider style={{ margin: "10px 0 10px" }} textAlign="left">
          <Chip label="Détails de paiment" />
        </Divider>

        <BasicTable rows={rows2} />
        <Divider style={{ margin: "10px 0 10px" }} textAlign="left"></Divider>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            "padding-top": "20px",
          }}
        >
          <Button size="small" startIcon={<ArrowBackIosIcon />}>
            Retour
          </Button>
          <Button style={{color: 'light-grey'}} size="small" variant="outlined" startIcon={<PrintIcon />}>
            Imprimer
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
