import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    overflowY: 'scroll',
    height: '350px',
    maxWidth: '400px'
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  
}));


export const DailyTodoList = (props) => {
  const classes = useStyles();

  const {dailyTodos, onDailyDelete} = props;

  return(
    <>
      <Typography variant="h5" className={classes.title}>
          日常
      </Typography>
      <List className={classes.root} id={'scroll-area'}>
        {dailyTodos.map((todo, index) => {
          return (
            <>
              <ListItem key={todo} divider>
                <ListItemText primary={todo} key={todo} />
                <Button variant="contained" onClick={() => onDailyDelete(index)} >完了</Button>
              </ListItem>
            </>
          );
        })}
        
      </List>
    </>
  );
};