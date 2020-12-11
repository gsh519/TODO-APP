import React, { useEffect, useRef} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

export const DailyMessageItem = (props) => {
  const {todo, onDailyDelete, index, isLastItem} = props;

  const ref = useRef(null)

  useEffect(() => {
    if (isLastItem) {
      ref.current.scrollIntoView({behavior: 'smooth'});
    }
  }, [isLastItem])

  return (
    <> 
      <ListItem key={todo} divider ref={ref}>
        <ListItemText primary={todo} key={todo} />
        <Button variant="contained" onClick={() => onDailyDelete(index)} >完了</Button>
      </ListItem>
    </>
  )
}