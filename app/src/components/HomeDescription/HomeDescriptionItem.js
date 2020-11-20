import React from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// CSS-in-react
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    backgroundColor: "transparent",
    // Change when screen down 600
    [theme.breakpoints.down("sm")]: {
      width: 400
    },
  },
  image: {
    width: 128,
    height: 128,
    // Change when screen down 600
    [theme.breakpoints.down("sm")]: {
        width: 110,
        height: 110,
    }
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  content: {
      textAlign: "justify"
  },
  contentContainer: {
      marginTop: "auto",
      marginBottom: "auto"
  }
}));

const HomeDescriptionItem = ({ content, img, direction }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Paper className={classes.paper} 
        elevation={0}>

          <Grid container 
            spacing={2} 
            direction={direction}>

              <Grid item 
                xs={12} sm={5} 
                align="center">
                  {img}
              </Grid>

              <Grid item 
                xs={12} sm={7}  
                className={classes.contentContainer}>
                    <Typography variant="body2" 
                      className={classes.content}>
                        {content}
                    </Typography>
              </Grid>

          </Grid>
          
      </Paper>

    </div>
  );
}

export default HomeDescriptionItem;