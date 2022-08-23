import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import {makeStyles} from '@material-ui/core'

export const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));


export const Header: any = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`

export const Heading = styled(Typography)`
  color: #5F6368;
  font-size: 24px;
  margin-left: 25px;
`

export const HeaderInner = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Div = styled('div')`
  display: flex;
  align-items: center;
`

export const Search = styled('div')`
  display: block;
  position: relative!important;
`

export const StyledInputBase = styled('input')`
  width: 100%;
  min-width: 400px;
  border: none;
  background-color: #eee;
  padding: 10px 30px;
  border-radius: 5px;
  "&:focus" {
    outline: none;
  }
`

export const SearchIconWrapper = styled('div')`
  position: absolute;
  left: 0;
`

export const useStyles = makeStyles({
  input: {
  width: '100%',
  minWidth: '400px',
  border: 'none',
  backgroundColor: '#eee',
  padding: '10px 30px',
  position: 'relative',
  borderRadius: '5px',
  "&:focus": {
    outline: 'none',
  },
  }
})