import React, {useState} from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Tooltip, IconButton, Typography } from '@material-ui/core';
// Components
import FormUpdate from '../Forms/FormUpdate';
// Icon
import UpdateIcon from '@material-ui/icons/Update';

// CSS-in-react
const useStyles = makeStyles((theme) => ({
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  paper: {
    position: 'absolute',
    width: 700,
    height: 700,
    overflow: "scroll",
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
    // Change when screen dowm 960
    [theme.breakpoints.down("md")]: {
      width: 300,
      height: 500,
    }
  },
  addIcon: {
    width: "60%",
    height: "60%",
    margin: "20%"
  }
}));

const ModalUpdate = ({restaurant, history}) => {
  const classes = useStyles();
  //Set state
  const [open, setOpen] = useState(false);

  // Close and open modal
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Modal body
  const body = (
    <div className={classes.paper}>
      <Typography variant="h4" 
        align="center"
        style={{backgroundColor: "black", width: "100%", color: "white", fontWeight: "bold"}}>
          Update one
        </Typography>
      <FormUpdate restaurant={restaurant} history={history}/>
    </div>
  );

  return (
    <div>
      <Tooltip title="Update and note" placement="top">
        <IconButton aria-label="update" 
          color="primary" 
          onClick={handleOpen} style={{width: "15%"}}>
            <UpdateIcon />
        </IconButton>
      </Tooltip>
      
      <Modal
        style={{zIndex: 5}}
        open={open}
        onClose={handleClose}>
          {body}
      </Modal>
    </div>
  );
}

export default ModalUpdate;