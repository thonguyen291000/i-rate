import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";
// MUI
import clsx from 'clsx';
import {Drawer, CssBaseline, AppBar, Toolbar, 
  List, Typography, Divider, ListItem, ListItemIcon, 
  ListItemText, InputBase, IconButton} from "@material-ui/core";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import { Avatar, Grid } from "@material-ui/core";
// Redux stuff
import {getUserData} from '../../redux/actions/userActions';
import {filter} from '../../redux/actions/dataAction';
import { connect } from 'react-redux';
// Icons
import HomeIcon from "@material-ui/icons/Home";
import ApartmentIcon from "@material-ui/icons/Apartment";
import LogoutIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// Width of drawer menu
const drawerWidth = 240;

// CSS-in-react
const styles = makeStyles((theme) => ({
  appBar: {
    zIndex: 4,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: 2
  },
  drawerPaper: {
    width: drawerWidth,
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
  },
  navLink: {
    textDecoration: "none",
    color: "black"
  },
  avatarSize: {
    height: theme.spacing(7),
    width: theme.spacing(7)
  },
  divider: {
    background: "blue"
  },
  // All for search
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    // Add more when screen up 600
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '8ch',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  },
  toolbar: theme.mixins.toolbar,
  // Add more when screen up 960
  [theme.breakpoints.up('md')]: {
    menuButton: {
      marginRight: theme.spacing(2),
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    }
  },
}));

const Nav = (props) => {

  const classes = styles();
  const theme = useTheme();

  // Set states
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  // Logout
  const handleLogout = () => {
    //Delete variable on local storage
    localStorage.removeItem('FBidToken');
    localStorage.removeItem('userId');

    // Get icon close on toolbar
    const iconClose = document.getElementById('iconCloseDrawer');
    // Click on it when log out
    if(iconClose) {
      iconClose.click();
    }
    
    // Set to rerender the app
    props.app.setState({
      ...props.app,
      login: false
    });
  }

  // Open menu
  const handleDrawerOpen = () => {
    setOpen(true);

    // Set to rerender the app
    props.app.setState({
      ...props.app,
      open: true
    });
  };

  // Close menu
  const handleDrawerClose = () => {
    setOpen(false);

     // Set to rerender the app
    props.app.setState({
      ...props.app,
      open: false
    });
  };

  // Get width auto
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  //Search
  const handleChangeSearch = (e) => {
    let constraint = e.target.value;
    if(constraint !== ""){
      props.filter(constraint.toLowerCase());

       // Set to rerender the app
      props.app.setState({
        ...props.app,
        search: true
      })
    } else {
      props.data.restaurantsFilter = [];

       // Set to rerender the app
      props.app.setState({
        ...props.app,
        search: false
      })
    }
  }

  // Use for rendering auto when screen size changes
  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  return (
    <>
      {/* Use to match the content to the app bar exactly */}
      <CssBaseline /> 
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
          <Toolbar>
            {/* Burger button */}
            {window.innerWidth <= 960 && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}>
                  <MenuIcon />
              </IconButton>
            )}
            {/* Title */}
            <Grid container 
              justify="space-between" 
              alignItems="center">
                <Grid item>
                  <Typography variant="h5" 
                    noWrap 
                    align="center">
                      i-Rate
                  </Typography>
                </Grid>
                <Grid item>
                  {/* Search field */}
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ 'aria-label': 'search' }}
                      name="search"
                      onChange={handleChangeSearch}
                    />
                  </div>
                </Grid>
            </Grid>
          </Toolbar>
      </AppBar>
      {/* Drawer */}
      {window.innerWidth > 960 ? /* Drawer for laptop */ (
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
          open >
            <div className={classes.toolbar}/>
            <Divider className={classes.divider}/>
            {/* User information */}
            <Grid container 
              style={{padding: "1rem"}}>
              <Grid container
                item xs={4}  
                justify="center" 
                alignItems="center">
                <Avatar alt="User avatar" 
                  src="https://firebasestorage.googleapis.com/v0/b/mobile-2ef47.appspot.com/o/avatar.png?alt=media" 
                  className={classes.avatarSize}
                />
              </Grid>
              <Grid container 
                item xs={8} 
                alignItems="center">
                  <Grid item>
                    <Typography>
                      Hello, {props.user.credentials.email}
                    </Typography>
                  </Grid>
              </Grid>
            </Grid>
            <Divider className={classes.divider}/>
            {/* Routes */}
            <List>
              {["Home", "Restaurants"].map((text, index) => {
                if(text === "Home") {
                    return (
                        <NavLink to="/home" 
                          className={classes.navLink} 
                          key={text}>
                            <ListItem button>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItem>
                        </NavLink>
                    )
                } else {
                    return (
                        <NavLink to="/restaurants" 
                          className={classes.navLink} 
                          key={text}>
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    <ApartmentIcon />
                                </ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItem>
                        </NavLink>
                    )
                }}
              )}
            </List>
            <Divider className={classes.divider}/>
            {/* Logout button */}
            <List>
              <div
                className={classes.navLink} 
                onClick={handleLogout}>
                  <ListItem button>
                      <ListItemIcon>
                          <LogoutIcon />
                      </ListItemIcon>
                      <ListItemText primary="Log out"/>
                  </ListItem>
              </div>
            </List>
        </Drawer>
      ) : /* Drawer for tablet */ (
        <Drawer
          className={classes.drawer}
          variant="persistent"
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
          open={open}>
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose} id="iconCloseDrawer">
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <div className={classes.toolbar}/>
            <Divider className={classes.divider}/>
            {/* User information */}
            <Grid container 
              style={{padding: "1rem"}}>
              <Grid container 
                item xs={4} 
                justify="center" 
                alignItems="center">
                <Avatar alt="User avatar" 
                  src="https://firebasestorage.googleapis.com/v0/b/mobile-2ef47.appspot.com/o/avatar.png?alt=media"
                  className={classes.avatarSize}
                />
              </Grid>
              <Grid container 
                item xs={8} 
                alignItems="center">
                <Grid item>
                  <Typography>
                    Hello, {props.user.credentials.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Divider className={classes.divider}/>
            {/* Routes */}
            <List>
              {["Home", "Restaurants"].map((text, index) => {
                if(text === "Home") {
                    return (
                        <NavLink to="/home" 
                          className={classes.navLink} 
                          key={text} 
                          onClick={handleDrawerClose}>
                            <ListItem button>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItem>
                        </NavLink>
                    )
                } else {
                    return (
                        <NavLink to="/restaurants" 
                          className={classes.navLink} 
                          key={text} 
                          onClick={handleDrawerClose}>
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    <ApartmentIcon />
                                </ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItem>
                        </NavLink>
                    )
                }}
              )}
            </List>
            <Divider className={classes.divider}/>
            {/* Logout button */}
            <List>
              <div
                className={classes.navLink}
                onClick={handleLogout}>
                  <ListItem button>
                      <ListItemIcon>
                          <LogoutIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Log out"/>
                  </ListItem>
              </div>
            </List>
        </Drawer>
      )}
    </>
  );
}
// Check type of data
Nav.propTypes = {
  getUserData: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}
// Get data from redux to props
const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data
});
// Get action from redux to props
const mapActionsToProps = {
  getUserData,
  filter
}

export default connect(mapStateToProps, mapActionsToProps)(Nav);
