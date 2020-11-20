import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

// CSS-in-react
const styles = makeStyles(theme => ({
    banner: {
        margin: 0
    }
}));

const Banner = () => {
    const classes = styles();

    return (
        <div className={classes.banner}>
        
        </div>
    )
}

export default Banner;