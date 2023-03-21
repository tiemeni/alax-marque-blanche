import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Login from '../../Auth/Login';
import background from '../../../Assets/Images/fondpatient.png';
import Avatar from '@mui/material/Avatar';

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

export default function AccueilPatient() {
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
    right: '54%',
    transform: 'translate(-50%, -50%)',
    width: '62.5%',
    height: '80%',
    bgcolor: '#fff',
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
    left: '57%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: '80%',
    bgcolor: '#f8f8f8',
    border: '0px solid #DDD',
    p: 4,
    borderRadius: '60px 0px 0px 0px',
    marginTop: '0%',
    marginBottom: '0%',
    marginRight: '5%',
    paddingTop: '10%',
  };

  const style3= {
    position: 'absolute',
    top: '32.5%',
    bottom: '0%',
    left: '24%',
    transform: 'translate(-50%, -50%)',
    width: '62.5%',
    height: '40%',
    bgcolor: '#fff',
    border: '1px solid #fff',
    p: 4,
    marginTop: '0%',
    marginBottom: '0%',
    marginRight: '5%',
    borderRadius: '20px',
  };
  const style4= {
    position: 'absolute',
    top: '32.5%',
    bottom: '0%',
    left: '67%',
    transform: 'translate(-50%, -50%)',
    width: '62.5%',
    height: '40%',
    bgcolor: '#fff',
    border: '1px solid #fff',
    p: 4,
    marginTop: '0%',
    marginBottom: '0%',
    marginRight: '5%',
    borderRadius: '20px',
  };

  const style5= {
    position: 'absolute',
    top: '75%',
    bottom: '0%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '84.5%',
    height: '40%',
    bgcolor: '#fff',
    border: '1px solid #fff',
    p: 4,
    marginTop: '0%',
    marginBottom: '0%',
    marginRight: '5%',
    borderRadius: '20px',
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
          style={{}}
        >
          <Typography style={{ color: '#fff', fontWeight: 'lighter', fontFamily: 'sans-serif', marginTop: '30%' }}>


          </Typography>
          <Typography style={{ marginTop: '-10%', color: '#fff', fontSize: '200%' }}>

          </Typography>
        
          <Avatar
            alt="emy Sharp"
            src="./images/about.png"
            sx={{ width: 24, height: 24, marginTop: '-75px', marginLeft: '43px' }}
          />
          <center>
          <Typography style={{float: 'left'}}>
            Emmanuel Embolo
          </Typography><br/>
          <Typography style={{float: 'left', marginTop: '-25px', color: '#bbb'}}>
           <h5> Homme</h5>
          </Typography>
          </center>
    

        </Grid>

        <Grid
          item
          xs={12}
          sm={9}
          md={9}
          sx={style2}
        >
          <Grid
          item
          xs={12}
          sm={4}
          md={4}
          sx={style3}
         >
          
          </Grid>
          <Typography style={{float: 'left', marginTop: '-14%', marginLeft: '5%'}}>
            Emmanuel Embolo
          </Typography><br/>
          <Typography style={{float: 'left', marginTop: '-17%', marginLeft: '5%', color: '#bbb'}}>
           <h5> Homme, 26 ans</h5>
          </Typography>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={style4}
          >
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={style5}
          >
            
        </Grid>
          
        </Grid>


      </Grid>
    </ThemeProvider>
  );
}