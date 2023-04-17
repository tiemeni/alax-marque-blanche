import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Login from './Login';
import Wrapper from './Wrapper';

const theme = createTheme();

export default function ComptePatientWrapper() {

  return (
    <ThemeProvider theme={theme}>
      {/* <Login /> */}
      <Wrapper />
    </ThemeProvider >
  );
}