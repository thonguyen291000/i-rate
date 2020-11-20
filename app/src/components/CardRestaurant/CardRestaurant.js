import React, {useState} from 'react';
// Date handler
import moment from 'moment';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// Components
import ModalUpdate from '../Modals/ModalUpdate';
import AlertDialog from '../AlertDialog/AlertDialog';
// icons
import SocialShare from '../SocialShare/SocialShare';

// CSS-in-react
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "500px",
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    justifyContent: "flex-end"
  },
  cardContent: {
    height: "250px"
  }
}));

const CardRestaurant = ({restaurant, flag, deleteRestaurant, history}) => {

  const classes = useStyles();

  const [url, setUrl] = useState(`${restaurant.url}`); //Change url share here
  const [title, setTitle] = useState('');

  // Delete apartment
  const handleDelete = () => {
    deleteRestaurant(restaurant.id);
  }

  // Check apartment card shows for which page
  if(restaurant) {
    return (
      <Card className={classes.root} 
        raised>
        {/* Header */}
        <CardHeader
          avatar={
            <Avatar src="https://firebasestorage.googleapis.com/v0/b/mobile-2ef47.appspot.com/o/avatar.png?alt=media"/>
          }
          title={restaurant.name}
          subheader={moment(restaurant.dateCreate).format('DD/MM/YYYY')}
        />
        <SocialShare url={url} title={title}/>
        {/* Picture */}
        <CardMedia
          className={classes.media}
          image={restaurant.url}
        />
        {/* Content */}
        <CardContent className={classes.cardContent}>

          <Typography variant="h6">
            Details
          </Typography>
            
          <Typography variant="subtitle1">
          &nbsp;• Type: {restaurant.type}
          </Typography>

          <Typography variant="subtitle1">
          &nbsp;• Visited date: {moment(restaurant.visitDate).format('DD/MM/YYYY')}
          </Typography>
          
          <Typography variant="subtitle1">
          &nbsp;• Location: {restaurant.address ? restaurant.address.name : "No information"}
          </Typography>

          <Typography variant="subtitle1">
          &nbsp;• Price: {restaurant.price}
          </Typography>

          <Typography variant="subtitle1">
          &nbsp;• Total rating: {restaurant.totalRating}
          </Typography>
    
          <Typography variant="subtitle1">
          &nbsp;• Reporter: {restaurant.reporter}
          </Typography>
          
          {restaurant.notes !== "Empty" && (
            <Typography variant="subtitle2" 
              color="secondary">
                &nbsp;<i>*Note: {restaurant.notes}</i>
            </Typography>
          )}

        </CardContent>

        {/* Actions */}
        {flag === "restaurants" && (
          <CardActions className={classes.cardActions} 
                disableSpacing>

            {/* <SocialShare url={url} title={title}/> */}

            <ModalUpdate restaurant={restaurant} history={history}/>

            
            <AlertDialog action={handleDelete.bind(this)} type="delete" description="Do you want to delete this rating?" title="Delete alert!!!"/>

          </CardActions>
        )}
      </Card>
    );
  } else {
    return (
      <>
      </>
    )
  }
}

export default CardRestaurant;