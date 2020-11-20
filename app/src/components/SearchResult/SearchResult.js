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
        backgroundColor: "#3f51b5",
        padding: "2%"
    },
    hover: {
        '&:hover': {
            opacity: 0.8,
          }
    },
    title: {
        color: "white"
    },
    container: {
        maxHeight: "1000px",
        width: "90%",
        marginLeft: "5%",
        marginRight: "5%",
        overflow: "auto",
    }
  }));
  
const SearchResult = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Typography variant="h4" 
                align="center"
                className={classes.title}>
                    Search result
            </Typography>

            <br/>

            <Grid container 
                className={classes.container} 
                spacing={3} 
                alignItems="center">

                    {props.loading && <Spinner/>}

                    {/* Show apartment */}
                    {props.restaurantsFilter.length !== 0 && props.restaurantsFilter.map(restaurant => (
                        <Grid item 
                            xs={12} md={6} lg={4} 
                            className={classes.hover} 
                            key={restaurant.id}>

                                <CardRestaurant restaurant={restaurant} 
                                    flag="restaurants"
                                />

                        </Grid>
                    ))}

                    {props.restaurantsFilter.length === 0 && 
                        <h3 style={{
                            width: "100%",
                            textAlign: "center", 
                            color: "white"
                            }}>
                                No matched results
                        </h3>}
            </Grid>
            
        </div>
    );
}

export default SearchResult;
