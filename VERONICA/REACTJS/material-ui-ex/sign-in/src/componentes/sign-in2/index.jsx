import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Typography, Container, CssBaseline, Avatar, TextField, FormControlLabel,Checkbox, Grid,Button, Link} from '@material-ui/core';
import {useStyles} from './style.js';


export default function SignIn() {
  const classStyle = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <div className={classStyle.paper}>
        <Avatar className={classStyle.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classStyle.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classStyle.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      </Container>
    </React.Fragment>
  );
}
