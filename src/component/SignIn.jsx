import React, {useState, useEffect, useRef} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.facebook.com/toshiaki.tabata.7"
      target="_blank" rel="noopener">
        としちゃん
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const SignIn = ({setName}) => {
  const classes = useStyles();
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputName, setInputName] = useState('');
  const el = useRef(null);

  useEffect(() => {
    if (inputName === "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [inputName]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          ようこそ
        </Typography>
        <form className={classes.form} noValidate
        　onSubmit={e => {
 　         setName(inputName);

            e.preventDefault();
          }}>
          <TextField ref={el}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="ニックネーム"
            name="name"
            autoFocus
            onChange={e => setInputName(e.target.value)}
            value={inputName}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isDisabled}
            className={classes.submit}
            onClick={() => setName(inputName)}
          >
            はじめる
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}