import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { TrainingMessageItem } from './TrainingMessageItem';


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


export const TrainingTodoList = (props) => {
  const classes = useStyles();

  const {trainingTodos, onTrainingDelete} = props;

  const length = trainingTodos.length;
  
  return(
    <>
    <Typography variant="h5" className={classes.title}>
        トレーニング
    </Typography> 
    <List className={classes.root} id={'scroll-area'}>
      {trainingTodos.map((todo, index) => {
        const isLastItem = length === index + 1;
        return (
          <>
            <TrainingMessageItem todo={todo} onClick={onTrainingDelete} index={index} isLastItem={isLastItem} />
          </>
        );
      })}
    </List>
    </>
  );
};