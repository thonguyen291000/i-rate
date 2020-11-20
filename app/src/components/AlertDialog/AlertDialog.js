import React, { useEffect } from 'react';

// MUI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const AlertDialog = ({action, description, title, type, parent}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

    if(type === "update") {
        parent.setState({
            ...parent.state,
            submit: false
        })
    }
  };

  const handleYes = () => {
    action();
  }

  useEffect(() => {
      if(type === "update") {
          setOpen(true);
      }
  }, []);

  return (
    <div>
        {type === "delete" ? (
            <>
                <Tooltip title="Delete" placement="top">
                    <IconButton aria-label="delete" 
                        color="secondary" 
                        onClick={handleClickOpen}
                        style={{width: "15%"}}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
//              This dialog I refer from material ui dialog
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" style={{color: "red"}} >{title}</DialogTitle>
                    <DialogContent> 
                    <DialogContentText id="alert-dialog-description" style={{color: "black"}}>
                        {description}
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        No
                    </Button>
                    <Button onClick={handleYes} color="secondary" autoFocus>
                        Yes
                    </Button>
                    </DialogActions>
                </Dialog>
            </>
        ) : (
            <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" style={{color: "red"}}>{title}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{color: "black"}}>
                        {description}
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        No
                    </Button>
                    <Button onClick={handleYes} color="secondary" autoFocus>
                        Yes
                    </Button>
                    </DialogActions>
                </Dialog>
        )}    
    </div>
  );
}

export default AlertDialog;
