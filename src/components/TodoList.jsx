import React from 'react';
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
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },

}));



export const TodoList = (props) => {
  const classes = useStyles();

  const {handle, incompleteTodos, onClick } = props;

  return(
    <List className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        やることリスト
      </Typography>
      {incompleteTodos.map((todo, index) => {
        return (
          <>
            <ListItem >
              <ListItemText primary={todo}/>
              <Button variant="contained" onClick={() => onClick(index)} >完了</Button>
            </ListItem>
          </>
        );
      })}
    </List>
  );
};