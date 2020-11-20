import React from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography, Tooltip} from '@material-ui/core';
// Components
import Spinner from '../Spinner/Spinner';
import CardRestaurant from "../CardRestaurant/CardRestaurant";
import ModalAdd from "../Modals/ModalAdd";
import Divider from "../Divider/Divider";

// CSS-in-react
const useStyles = makeStyles((theme) => ({
    root: {
      margin: "2%"
    },
    divider: {
        marginBottom: "1rem"
    },
    hover: {
        '&:hover': {
            opacity: 0.8,
          }
    },
    hoverAdd: {
        '&:hover': {
            opacity: 0.8,
            cursor: "pointer"
          }
    },
    container: {
        maxHeight: "1000px",
        width: "90%",
        marginLeft: "5%",
        marginRight: "5%",
        overflow: "auto",
    },
    addIcon: {
        width: "40%",
        height: "40%",
        margin: "30%"
    }
  }));
  
const ListRestaurant = (props) => {

    const classes = useStyles();
    
    return (
        <div className={classes.root}>

            <Typography variant="h4" 
                align="center">
                    List of rating restaurants
            </Typography>

            <Divider className={classes.divider}/>

            <Grid container 
                className={classes.container} 
                spacing={3} 
                alignItems="center"
                >

                    <Grid item 
                        xs={12} md={6} lg={4} 
                        className={classes.hoverAdd} 
                        style={{zIndex: 3}}>
                            <Tooltip title="Add more">
                                <>
                                    <ModalAdd history={props.history}/>
                                </>
                            </Tooltip>
                    </Grid>

                    {props.loading && <Spinner/>}
                    {/* Show apartments */}
                    {props.restaurants.map(restaurant => (
                        <Grid item 
                            xs={12} md={6} lg={4} 
                            className={classes.hover} 
                            key={restaurant.id+Math.random()}
                            style={{zIndex: 3}}>

                                <CardRestaurant restaurant={restaurant} 
                                    flag="restaurants" 
                                    deleteRestaurant={props.deleteRestaurant}
                                    history={props.history}
                                />
                        </Grid>
                    ))}

            </Grid>

        </div>
    );
}

export default ListRestaurant;