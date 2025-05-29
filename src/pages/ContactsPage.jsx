 import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import ContactList from '../components/ContactList/ContactList'
 
const ContactsPage = () => {
const isAllowed=useSelector(selectIsLoggedIn);
    console.log('isAllowed:',isAllowed);
    
    return (
<>
 <div>ContactPage</div>
  {isAllowed && <ContactList />}
  </>
);
 }

export default ContactsPage;