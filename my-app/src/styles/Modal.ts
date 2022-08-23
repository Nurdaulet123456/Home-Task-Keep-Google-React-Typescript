import {makeStyles} from '@material-ui/core'
import { styled } from '@mui/material/styles';

export const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };

  export const Input = styled('div')`
  display: block;
`

export const StyledInputBase = styled('input')`
  border: none;
  background-color: transparent;
  color: 'black';
  padding: 10px 20px;
`

export const useStyles = makeStyles({
 input: {
    border: 'none',
    backgroundColor: 'transparent',
    padding: '10px 30px',
    color: 'black',
    transition: 'all 0.2s linear',
    "&:focus": {
      outline: 'none',
      borderBottom: '1px solid black'
    },

    "&::placeholder": {
        color: 'black',
    }
 }
})
  
