import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';


import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';

import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function InputWithIcon() {
  const classes = useStyles();

  return (
    <div>
      {/* <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Name</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl> */}
      {/* <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      /> */}
      
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Name" />
          </Grid>
        </Grid>
      </div>

      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <EmailOutlinedIcon/>
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Email" />
          </Grid>
        </Grid>
      </div>
      
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AssignmentTurnedInOutlinedIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Role" />
          </Grid>
        </Grid>
      </div>
      
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <LockOpenOutlinedIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Extra Permissions" />
          </Grid>
        </Grid>
      </div>
      
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AssignmentOutlinedIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Actions" />
          </Grid>
        </Grid>
      </div>
      
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Reset
      </Button>
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Submit
      </Button>
      

    </div>
  );
}
