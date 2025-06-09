import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  useTheme,
} from '@mui/material';
import { editContact } from '../../redux/contacts/operations';
import { toast } from 'react-hot-toast';

const MyDialog = props => {
  const { contact, open, onConfirm, onClose } = props;

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });
  useEffect(() => {
    if (contact) {
      setFormData(contact);
    }
  }, [contact]);

  const handleConfirm = () => {
    toast('Saving contact... ⏳ ' + formData.name);
    dispatch(editContact(formData));
    toast.success('Contact saved successfully! ✔️');
    onConfirm();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle
        sx={{ width: '400px', backgroundColor: '#f5f5f5', color: '#333' }}
      >
        Do want edit contact?
      </DialogTitle>
      <TextField
        sx={{ ml: '20px', mr: '20px', width: 'auto', cursor: 'pointer' }}
        autoFocus
        margin="dense"
        name="name"
        label="Name"
        type="text"
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        sx={{ ml: '20px', mr: '20px', width: 'auto', cursor: 'pointer' }}
        margin="dense"
        name="number"
        label="Phone Number"
        type="tel"
        variant="outlined"
        value={formData.number}
        onChange={handleChange}
      />
      <DialogActions sx={{ mt: '0px' }}>
        <Button onClick={handleConfirm} color="primary">
          Confirm
        </Button>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const ModalEdit = props => {
  const { open, contact } = props;
  const [_open, setOpen] = useState(open);

  const root = document.getElementById('root');
  root?.setAttribute('aria-hidden', 'false');

  const handleClose = () => {
    setOpen(false);
    toast('Cancelled editing contact! ❌');
  };

  const handleConfirm = () => {
    setOpen(false);
    toast.success('Contact changed successfully! ✔️');
  };

  root?.removeAttribute('aria-hidden');

  return (
    <div>
      <MyDialog
        contact={contact}
        open={_open}
        onConfirm={handleConfirm}
        onClose={handleClose}
      />
    </div>
  );
};

export default ModalEdit;
