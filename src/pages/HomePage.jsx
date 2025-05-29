 import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import ContactList from '../components/ContactList/ContactList'

 const HomePage = () => {
 const isAllowed=useSelector(selectIsLoggedIn);
    console.log('isAllowed:',isAllowed);

    return (
 <div>Phonebook
 {isAllowed && <ContactList />}
 </div>
);
 }

export default HomePage;