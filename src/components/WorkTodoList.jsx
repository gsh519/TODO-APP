import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { WorkMessageItem } from './WorkMessageItem';

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


export const WorkTodoList = (props) => {
  const classes = useStyles();

  const {workTodos, onWorkDelete} = props;

  const length = workTodos.length;

  return(
    <>
    <Typography variant="h5" className={classes.title}>
        仕事
    </Typography>
    <List className={classes.root} id={'scroll-area'}>
      {workTodos.map((todo, index) => {
        const isLastItem = length === index + 1;
        return (
          <>
            <WorkMessageItem todo={todo} onClick={onWorkDelete} index={index} isLastItem={isLastItem} />
          </>
        );
      })}
    </List>
    </>
  );
};