import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate("/");
  };

  return (
    <header className="header">
      <div className="header-title-box">
        <Link to="/">
          <h1 className="title">Targets</h1>
        </Link>
      </div>
      <div className="header-links">
        {user ? (
          <div className="header-link" onClick={onLogout}>
            <FaSignOutAlt />
          </div>
        ) : (
          <>
            {" "}
            <div className="header-link">
              <Link to="/login">
                <FaSignInAlt />
              </Link>
            </div>
            <div className="header-link">
              <Link to="/register">
                <FaUser />
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
