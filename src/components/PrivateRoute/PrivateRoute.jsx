import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from '../../redux/auth/selectors';

const PrivateRoute = ({ component: Component, redirectTo }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  console.log('State isLoggedIn:',isLoggedIn);
  console.log('State isRefreshing:',isRefreshing);
  
  // Якщо триває оновлення користувача — показуємо спінер або нічого
  if (isRefreshing) {
    return <p>Завантаження...</p>; // або Spinner
  }

  // Якщо залогінений — показуємо потрібний компонент
  // Якщо ні — перенаправляємо на сторінку логіну
  return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
