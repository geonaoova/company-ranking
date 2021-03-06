import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog({ setShowModal, isOpen, content }) {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
      setOpen(isOpen)
  }, [isOpen])

  const handleClose = () => {
    setShowModal(false);
  };

  return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{content.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            { content.description }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
  );
}