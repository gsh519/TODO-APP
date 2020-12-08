import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const SelectBox = (props) => {
  const classes = useStyles();
  const {select, handleChange} = props;

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">カテゴリ</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={select}
          onChange={handleChange}
        >
          <MenuItem value={0}>Daily</MenuItem>
          <MenuItem value={1}>Work</MenuItem>
          <MenuItem value={2}>training</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
