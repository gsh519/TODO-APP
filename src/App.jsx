import React, { useState, } from 'react'
import './App.css';
import { DenseAppBar } from './components/DenseAppBar'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { InputText } from './components/InputText'
import { SelectBox } from './components/SelectBox'
import { SimpleTab } from './components/SimpleTab';


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
  left: {
    textAlign: 'left',
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

  const [dailyTodos, setDailyTodos] = useState(['f','f','f','f', 'c','c','c','d','d']);
  const [workTodos, setWorkTodos] = useState([])
  const [trainingTodos, setTrainingTodos] = useState([])

  const scrolled = () => {
    const scrollArea = document.getElementById('scroll-area');
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight
      console.log(scrollArea.scrollHeight)
    }
  }

  const onClickAdd = () => {
    if (todoText === "") return;
    if (select === 0) {
      const newTodos = [...dailyTodos,todoText];
      setDailyTodos(newTodos);
      scrolled();
      setTodoText("");
    } else if (select === 1) {
      const newTodos = [...workTodos,todoText];
      setWorkTodos(newTodos);
      scrolled();
      setTodoText("");
    } else {
      const newTodos = [...trainingTodos,todoText];
      setTrainingTodos(newTodos);
      scrolled();
      setTodoText("");
    }
  }

  const onDailyDelete = (index) => {
    const newDailyTodos = [...dailyTodos];
    newDailyTodos.splice(index, 1);
    setDailyTodos(newDailyTodos);
  }

  const onWorkDelete = (index) => {
    const newWorkTodos = [...workTodos];
    newWorkTodos.splice(index, 1);
    setWorkTodos(newWorkTodos);
  }

  const onTrainingDelete = (index) => {
    const newTrainingTodos = [...trainingTodos];
    newTrainingTodos.splice(index, 1);
    setTrainingTodos(newTrainingTodos);
  }

  const [select, setSelect] = React.useState('');

  const handleChange = (event) => {
    console.log(event.target.value)
    setSelect(event.target.value);
  };

  return (
    <>
      <DenseAppBar />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.left}>
              <InputText onClick={onClickAdd} onChange={onChangeTodoText} todoText={todoText} />
              <SelectBox select={select} handleChange={handleChange} />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <SimpleTab 
                dailyTodos={dailyTodos} 
                workTodos={workTodos} 
                trainingTodos={trainingTodos} 
                onDailyDelete={onDailyDelete}
                onWorkDelete={onWorkDelete}
                onTrainingDelete={onTrainingDelete}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
      
    </>
  );
}

export default App;
