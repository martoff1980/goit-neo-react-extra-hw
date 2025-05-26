import { useSelector, useDispatch } from 'react-redux';
import Contact from '../contact/Contact';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import './ContactList.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className="contact-list">
      <ul>
        {filteredContacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
