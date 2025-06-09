import { useState } from 'react';
import { FaUser, FaPhone } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import ModalDelete from '../ModalUI/ModalDelete';
import ModalEdit from '../ModalUI/ModalEdit';
import './Contact.css';
//
const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(open);

  const [edit, setEdit] = useState(false);
  const [isEdit, setIsEdit] = useState(edit);

  const handleDelete = contact => {
    if (!open) {
      setOpen(true);
      setIsOpen(open);
      return;
    } else {
      setOpen(false);
      setIsOpen(open);
      return;
    }
  };

  const handleContactClick = contact => {
    // console.log('Contact clicked:', contact);
  };

  const handleContactDoubleClick = () => {
    if (!edit) {
      setEdit(true);
      setIsEdit(edit);
      return;
    } else {
      setEdit(false);
      setIsEdit(edit);
      return;
    }
  };

  return (
    <li className="contact-item">
      <div
        className="contact-info"
        onClick={() => handleContactClick(contact)}
        onDoubleClick={() => handleContactDoubleClick()}
      >
        {edit && <ModalEdit open={edit} contact={contact} />}
        {isEdit && <ModalEdit open={isEdit} contact={contact} />}
        <div>
          <FaUser />
          {contact.name}
        </div>
        <div>
          <FaPhone />
          {contact.number}
        </div>
      </div>
      <div className="contact-actions">
        {/*орігінальну кнопку сховано*/}
        <button hidden onClick={() => dispatch(deleteContact(contact.id))}>
          Delete
        </button>
        <button onClick={() => handleDelete(contact.id)}>Delete</button>
        {open && <ModalDelete open={open} contact={contact} />}
        {isOpen && <ModalDelete open={isOpen} contact={contact} />}
      </div>
    </li>
  );
};

export default Contact;
