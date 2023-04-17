import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Login from '../../Auth/Login';
import background from '../../../Assets/Images/fondpatient.png';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// function HomeIcon(props) {
//   return (
//     <SvgIcon {...props}>
//       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//     </SvgIcon>
//   );
// }

const theme = createTheme();

export default function ComptePatientWrapper() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  const style1 = {
    position: 'absolute',
    top: '50.5%',
    bottom: '0%',
    right: '45%',
    transform: 'translate(-50%, -50%)',
    width: '43.5%',
    height: '80%',
    bgcolor: '#04b7c9',
    /*backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',*/
    border: '0px solid #DDD',
    p: 4,
    marginTop: '0%',
    marginBottom: '0%',
    marginLeft: '5%',
  };

  const style2 = {
    position: 'absolute',
    top: '50.5%',
    bottom: '0%',
    left: '61%',
    transform: 'translate(-50%, -50%)',
    width: '43.5%',
    height: '80%',
    bgcolor: '#fff',
    border: '0px solid #DDD',
    p: 4,
    marginTop: '0%',
    marginBottom: '0%',
    marginRight: '5%',
    paddingTop: '10%',
  };

  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: 'white',

  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,

  // }));

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '80%', marginLeft: '5%', marginTop: '5%', marginBottom: '5%' }}>
        <CssBaseline />
        <Grid
          item
          xs={0}
          sm={3}
          md={3}
          sx={style1}
          style={{ backgroundImage: `url(${background})`, backgroundSize: '70%', backgroundRepeat: 'no-repeat' }}
        >
          <Typography style={{ color: '#fff', fontWeight: 'lighter', fontFamily: 'sans-serif', marginTop: '30%' }}>
          </Typography>
          <Typography style={{ marginTop: '-10%', color: '#fff', fontSize: '200%' }}>
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={9}
          md={9}
          sx={style2}
        >
          <Login />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}