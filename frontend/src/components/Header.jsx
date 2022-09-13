import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-title-box">
        <Link to="/">
          <h1 className="title">Targets</h1>
        </Link>
      </div>
      <div className="header-links">
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
      </div>
    </header>
  );
}

export default Header;
