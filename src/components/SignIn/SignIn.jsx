import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";

const SignIn = () => {
  const { image, root, paper, avatar, form } = useStyles();

  return (
    <Grid className={root} container component="main">
      <Grid item xs={false} sm={4} md={7} className={image} />
      <Grid
        item
        component={Paper}
        item
        xs={12}
        sm={8}
        md={5}
        elevation={6}
        square
      >
        <div className={paper}>
          <Avatar className={avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={form} noValidate>
            <TextField
              fullWidth
              margin="normal"
              required
              variant="outlined"
              id="email"
              name="email"
              label="Email Address"
              autoFocus
              autoComplete
            />
            <TextField
              fullWidth
              margin="normal"
              type="password"
              name="password"
              required
              variant="outlined"
              id="password"
              label="Password"
              autoFocus
              autoComplete
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign In
            </Button>
            <Grid
              container
              style={{ marginTop: "20px", justifyContent: "space-around" }}
            >
              <Grid item>
                <Link variant="body1">Forgot password ?</Link>
              </Grid>
              <Grid item>
                <Link variant="body1">Don't have an account ? Sign Up</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignIn;
