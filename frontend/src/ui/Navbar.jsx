import { Link, NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";
import '../bootstrap.min.css';

function Navbar() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <nav className="text-primary-50 bg-black px-14 py-7 font-semibold tracking-wider">
        <ul className="flex items-center justify-between">
          <div>
            <li>
              <Link to="/">
                <img src="/logo.png" alt="company logo" />
              </Link>
            </li>
          </div>
          <div className="flex gap-10 text-base">
            <li>
              <NavLink to="/course">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/certificate">Certificate</NavLink>
            </li>
            <li>
              <NavLink to="/programs">Programs</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support</NavLink>
            </li>
            <li>
              <NavLink to="/hiring">Hiring</NavLink>
            </li>
          </div>
          <div className="flex gap-4">
            {userInfo ? (
              <NavDropdown title={userInfo.first_name} id="phone_number">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <li>
                <Link to="/login" className="text-primary-100 rounded-lg p-4">
                  Login
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/trial"
                className="bg-grad-button rounded-2xl px-8 py-4 italic text-white shadow-button outline-none"
              >
                Book a free trial
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;