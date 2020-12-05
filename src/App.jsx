import React, { useState, } from 'react'
import './App.css';
import { DenseAppBar } from './components/DenseAppBar'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TodoList } from './components/TodoList';
import { InputText } from './components/InputText'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '20px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  center: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
  }
}));

const App = () => {
  const classes = useStyles();

  const [todoText, setTodoText] = useState('');

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  }

  const [incompleteTodos, setIncompleteTodos] = useState(['aaa','bbb','ccc','ddd','eee']);


  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos,todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }

  const onClickDelete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setTimeout(()=> setIncompleteTodos(newIncompleteTodos));
  }

  return (
    <>
      <DenseAppBar />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.center}><InputText onClick={onClickAdd} onChange={onChangeTodoText} todoText={todoText} /></Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <TodoList incompleteTodos={incompleteTodos} onClick={onClickDelete} />
            </Paper>
          </Grid>
        </Grid>
      </div>
      
    </>
  );
}

export default App;
