import React from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';
// Components
import CardRestaurant from "../CardRestaurant/CardRestaurant";
import Spinner from '../Spinner/Spinner';

// CSS-in-react
const useStyles = makeStyles((theme) => ({
    root: {
        margin: "2%"
    },
    hover: {
        '&:hover': {
            opacity: 0.8,
          }
    },
    container: {
        maxHeight: "1000px",
        width: "90%",
        marginLeft: "5%",
        marginRight: "5%",
        overflow: "auto",
    }
  }));
  
const HomeRestaurant = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h4" 
                align="center">
                    New rating restaurant
            </Typography>
            <br/>
            <Grid container 
                className={classes.container} 
                spacing={3} 
                alignItems="center">
                    {props.loading && <Spinner/>}
                    {/* Show restaurants */}
                    {props.restaurants.map ? props.restaurants.map(restaurant => (
                        <Grid item 
                            xs={12} md={6} lg={4}   
                            className={classes.hover} 
                            key={restaurant.id + Math.random().toString()}>
                                <CardRestaurant restaurant={restaurant} 
                                    flag="home"
                                />
                        </Grid>
                    )) : (
                        <Grid item xs={12}>
                            <Typography variant="h5" align="center">
                                No existed rating restaurant 
                            </Typography>
                        </Grid>
                    )}
            </Grid>
        </div>
    );
}

export default HomeRestaurant;
