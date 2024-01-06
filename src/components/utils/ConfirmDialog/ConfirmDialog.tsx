import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});
interface ConfirmDialogProps {
  visible: boolean;
  title?: string;
  description?: string;
  onClose: () => void;
  onAgree: () => void;
}

export default function ConfirmDialog({
  title,
  description,
  visible,
  onAgree,
  onClose,
}: ConfirmDialogProps) {
  const handleClose = () => {
    onClose();
  };
  const onAgreeClick = () => {
    onAgree();
  };

  return (
    <Dialog
      open={visible}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogTitle>{title ? title : 'Deletar Item?'}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-slide-description'>
          {description
            ? description
            : 'Deseja deletar este item permanentemente ?'}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Fechar</Button>
        <Button onClick={onAgreeClick}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}
