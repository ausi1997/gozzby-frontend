import React from 'react';

import {AppBar , Toolbar ,makeStyles,InputBase,fade,Box,IconButton, Typography , Badge} from '@material-ui/core';
import {Search} from '@material-ui/icons';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Logo from '../../assets/logo/logo.png';
import {Link} from 'react-router-dom';

 const useStyle = makeStyles((theme)=>({
     header:{
         background:'rgb(138, 113, 113)',
         height:60
     },
     logo:{
         width:110,
         paddingBottom:10
     },
     search: {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 60,
        width: '35%',
        display:'flex',
        color:'black'
      },
      searchIcon: {
        padding: 5,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:'black'
      },
      inputRoot: {
        color: 'inherit',
        width:'100%'
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft:15
      },
      login:{
        marginLeft:250,
        marginRight:50,
        fontSize:16,
        color:'rgb(56, 44, 28)',
        textDecoration:'none'
      },
      cart:{
          marginLeft:50,
          fontSize:6,
          display:'flex',
          color:'rgb(56, 44, 28)',
          textDecorationLine:'none'
      },
      more:{
        fontSize:16,
          color:'rgb(56, 44, 28)'
      }
 }));
const Header = ()=>{
    const classes = useStyle();
    return(
        <div>
        <AppBar className={classes.header}>
        <Toolbar>
        <Link to='/'>
        <img src={Logo} className={classes.logo} alt='loading...'></img>
        </Link>
        <div className={classes.search}>
        <InputBase
          placeholder="Search for products..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
        <div className={classes.searchIcon}>
        <Search/>
      </div>
      </div>
      <Link to='/account'>
      <Box>
      <IconButton
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      className={classes.login}
    >
      <AccountCircle fontSize='large'></AccountCircle>
      Account
    </IconButton>
      </Box>
      </Link>
      <Typography className={classes.more}>More</Typography>
      <Link to='/cart'>
      <Box className={classes.cart}>
      <Typography>Cart</Typography>
      <Badge badgeContent={4} color="error">
       <ShoppingCartIcon></ShoppingCartIcon>
       </Badge>
      </Box>
      </Link>
        </Toolbar>
        </AppBar>
        </div>
    )
}

export default Header;