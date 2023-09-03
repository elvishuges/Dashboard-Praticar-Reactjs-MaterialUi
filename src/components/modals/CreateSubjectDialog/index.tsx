import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import React from 'react';

type CreateSubjectDialogProp = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const CreateSubjectDialog: React.FC<CreateSubjectDialogProp> = ({
  open,
  setOpen,
}) => {
  return (
    <Dialog open={open}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin='dense'
          id='name'
          label='Email Address'
          type='email'
          fullWidth
          variant='standard'
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(!open)}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateSubjectDialog;
