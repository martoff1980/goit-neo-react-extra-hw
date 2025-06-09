import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const RestrictedRoute = redirectTo => {
  const isAllowed = useSelector(selectIsLoggedIn);
  console.log('Redirect isAllowed:', isAllowed, redirectTo);
  return isAllowed ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default RestrictedRoute;
