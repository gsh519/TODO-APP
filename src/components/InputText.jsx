import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    display: 'flex',
  },
  btn: {
    width: '5ch'
  }
}));

export const InputText = (props) => {
  const classes = useStyles();

  const { onClick, onChange, todoText } = props;

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="TODO追加" value={todoText} onChange={onChange} autoFocus />
      <Button variant="contained" size='small' className={classes.btn} onClick={onClick}>追加</Button>
    </form>
  )
}