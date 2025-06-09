import { useSelector, useDispatch } from 'react-redux';
import Contact from '../Contact/Contact';
import {
  selectFilteredContacts,
  selectFilteredContactsByPhone,
  selectFilterBy,
} from '../../redux/contacts/slice';
import './ContactList.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const filteredContactsByPhone = useSelector(selectFilteredContactsByPhone);
  const filteredBy = useSelector(selectFilterBy);

  return (
    <div className="contact-list">
      <ul>
        {filteredBy == 'name' &&
          filteredContacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        {filteredBy == 'number' &&
          filteredContactsByPhone.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
      </ul>
    </div>
  );
};

export default ContactList;
