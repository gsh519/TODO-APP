import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { DailyMessageItem } from './DailyMessageItem';


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

  const length = dailyTodos.length;

  return(
    <>
      <Typography variant="h5" className={classes.title}>
          日常
      </Typography>
      <List className={classes.root} id={'scroll-area'}>
        {dailyTodos.map((todo, index) => {
          const isLastItem = length === index + 1;
          return (
            <>
              <DailyMessageItem key={index.toString()} todo={todo} onClick={onDailyDelete} index={index} isLastItem={isLastItem} />
            </>
          );
        })}
        
      </List>
    </>
  );
};