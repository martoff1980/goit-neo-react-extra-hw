import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { toast } from 'react-hot-toast';

const MyDialog = ({ open, onConfirm, onClose }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle sx={{ backgroundColor: '#f5f5f5', color: '#333' }}>
      Do want delete contact?
    </DialogTitle>
    <DialogActions>
      <Button onClick={onConfirm} color="primary">
        Yes
      </Button>
      <Button onClick={onClose} color="secondary">
        No
      </Button>
    </DialogActions>
  </Dialog>
);

const ModalDelete = props => {
  const { open, contact } = props;

  const root = document.getElementById('root');
  root?.setAttribute('aria-hidden', 'false');

  const [_open, setOpen] = useState(open);

  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
    toast('Cancelled delete contact! ❌');
  };

  const handleConfirm = () => {
    setOpen(false);
    toast('Deleting contact... ⏳ ' + contact.name);
    dispatch(deleteContact(contact.id));
    toast.success('Contact deleted successfully! ✔️');
  };

  root?.removeAttribute('aria-hidden');

  return (
    <div>
      <MyDialog open={_open} onConfirm={handleConfirm} onClose={handleClose} />
    </div>
  );
};

export default ModalDelete;
