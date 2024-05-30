import { useNavigate, useLocation, useParams } from "react-router-dom";

export function withRouter(Children) {
  return function WrapperComponent(props) {
    const navigate = useNavigate();
    const match = { params: useParams() };
    const location = useLocation();
    return (
      <Children
        {...props}
        match={match}
        navigate={navigate}
        location={location}
      />
    );
  };
}
