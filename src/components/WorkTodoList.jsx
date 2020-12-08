import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },

}));


export const WorkTodoList = (props) => {
  const classes = useStyles();

  const {workTodos} = props;

  return(
    <List className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        仕事タスク
      </Typography>
      {workTodos.map((todo, index) => {
        return (
          <>
            <ListItem key={todo}>
              <ListItemText primary={todo} key={todo}/>
              {/* <Button variant="contained" onClick={() => onClick(index)} >完了</Button> */}
            </ListItem>
          </>
        );
      })}
      
    </List>
  );
};