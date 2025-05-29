import { FaUser, FaPhone } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import './Contact.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className="contact-item">
      <div className="contact-info">
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
        <button onClick={() => dispatch(deleteContact(contact.id))}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
