import React, { useEffect, useRef} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

export const WorkMessageItem = (props) => {
  const {todo, onWorkDelete, index, isLastItem} = props;

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
        <Button variant="contained" onClick={() => onWorkDelete(index)} >完了</Button>
      </ListItem>
    </>
  )
}