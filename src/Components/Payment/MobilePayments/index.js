import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import InputMask from 'react-input-mask';
import arrowLeft from "../../../Assets/Images/left-arrow.png";
import arrowRight from "../../../Assets/Images/next.png";
import omImg from "../../../Assets/Images/Orange_Money_logo_PNG3.png";
import errorTooltip from "../../../Assets/Images/error-tooltip.png";
import mtnImg from "../../../Assets/Images/MTN-Logo-2002.png";
import { useDispatch } from "react-redux";
import { customStyles } from "../../../Constants/customsStyles";
import { setWitchCardToOpen } from "../../../REDUX/Common/actions";
import { ORANGE_MONEY } from "../../../Constants/typePayments";
import "../payment.css";
import { useDimension } from "../../../Hooks/dimensions";
import colors from "../../../Constants/colors";

const fieldStyles = {
  ...customStyles.customFieldStyle,
  "& fieldset": {
    borderRadius: 3,
  },
};

export default function MobilePaymentForm({ selectedCard, paymentMethods }) {
  const { innerWidth } = useDimension();
  const dispatcher = useDispatch();
  const [formData, setFormData] = useState({
    amount: "",
    number: "",
  });
  const [errors, setErrors] = useState({
    amount: "",
    number: "",
  });
  const [isValid, setIsvalid] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Réinitialiser le message d'erreur
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Valider les champs avant la soumission
    const { amount, number } = formData;
    const newErrors = {};

    if (amount.trim() === "") {
      newErrors.amount = "Veuillez saisir un montant.";
      setIsvalid(false);
    }

    if (number.trim() === "") {
      newErrors.number = "Veuillez saisir un numéro de téléphone.";
      setIsvalid(false);
    }

    // Effectuer des validations supplémentaires selon vos besoins, par exemple, valider le format du numéro de téléphone.

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    // Effectuer des actions supplémentaires ici, comme envoyer les données au backend
  };

  return (
    <div>
      <h4
        className="mobile-payment-title"
        style={{ flexDirection: "row", display: "flex", alignItems: "center" }}
      >
        <img
          src={arrowLeft}
          onClick={() => dispatcher(setWitchCardToOpen(null))}
          style={{ height: 25, width: 25, marginRight: 10, cursor: "pointer" }}
          alt="arrow back"
        />
        <p>Paiements {innerWidth > 600 && "Mobiles"}</p>
        <img
          src={arrowRight}
          style={{ height: 20, width: 20 }}
          alt="arrow right"
        />
        <p>{selectedCard === ORANGE_MONEY ? "Orange money" : "Master card"}</p>
      </h4>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={selectedCard === ORANGE_MONEY ? omImg : mtnImg}
          alt=""
          style={{ width: selectedCard === ORANGE_MONEY ? "100px" : "50px" }}
        />
        <p
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            marginLeft: selectedCard === ORANGE_MONEY ? 0 : 5,
          }}
        >
          {selectedCard === ORANGE_MONEY ? "Orange Money" : "MTN Mobile Money"}
        </p>
      </div>
      <div style={{ marginLeft: 15 }}>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%" }}>
            <p style={{ marginBottom: "3px", fontWeight: "bold" }}>
              Montant<span style={{ color: "red" }}>*</span>
            </p>
            <TextField
              type="number"
              fullWidth
              sx={fieldStyles}
              placeholder="500000"
              value={formData.amount}
              onChange={handleChange}
              defaultValue={2000}
              inputProps={{
                min: 1000,
                max: 100000,
                step: 500,
              }}
              InputProps={{
                inputProps: {
                  min: 1000,
                  max: 100000,
                  step: 500,
                },}}
              name="amount"
              required
              error={!!errors.amount}
              helperText={errors.amount}
            />
            <p style={{ marginBottom: "3px", fontWeight: "bold" }}>
              Téléphone<span style={{ color: "red" }}>*</span>
            </p>
            <InputMask
              mask="+237 6\ 99 99 99 99"
              maskChar=""
              value={formData.number}
              onChange={handleChange}
            >
              {() => (
                <TextField
                  type="text"
                  fullWidth
                  sx={fieldStyles}
                  placeholder="+237 6 58 68 61 62"
                  name="number"
                  required
                  error={!!errors.number}
                  helperText={errors.number}
                />
              )}
            </InputMask>
          </div>
          <div style={{ width: "40%", marginTop: 50 }}>
            <Button
              className={"btn-submit input-box_button-disabled"}
              style={{ width: "100%" }}
              variant="contained"
              type="submit"
            >
              <p className="login-text">Soumettre</p>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
