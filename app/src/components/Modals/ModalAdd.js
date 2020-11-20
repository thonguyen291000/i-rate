import React, {useState} from 'react';
//MUI
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Tooltip, Typography } from '@material-ui/core';
// Components
import FormAdd from '../Forms/FormAdd';
//Icon
import AddIcon from "@material-ui/icons/AddCircle";

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
    margin: "20%",
  }
}));

const ModalAdd = (props) => {
  const classes = useStyles();

  // Set state
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
          Create new one
      </Typography>
      <FormAdd closeModel={handleClose} history={props.history}/>
    </div>
  );
  
  return (
    <div>
      <Tooltip title="Add more">
        <AddIcon className={classes.addIcon} 
          onClick={handleOpen}
        />
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

export default ModalAdd;