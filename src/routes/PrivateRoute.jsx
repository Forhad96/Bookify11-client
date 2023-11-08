
import { Navigate, useLocation } from "react-router-dom";

import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import Loading from "../pages/Shared/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
