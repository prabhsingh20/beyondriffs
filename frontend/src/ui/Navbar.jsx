import { Link, NavLink } from "react-router-dom";
import LinkCustom from "./LinkCustom";

function Navbar() {
  return (
    <header>
      <nav className="bg-nav-bg px-14 py-7 font-medium tracking-wider text-firstShade">
        <ul className="flex items-center justify-between">
          <div>
            <li>
              <Link to="/">
                <img src="/logo.png" alt="company logo" />
              </Link>
            </li>
          </div>
          <div className="flex gap-10">
            <li>
              <NavLink to="/course">Course</NavLink>
            </li>
            <li>
              <NavLink to="/course">Certificate</NavLink>
            </li>
            <li>
              <NavLink to="/course">Programs</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">About</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support</NavLink>
            </li>
            <li>
              <NavLink to="/support">Hiring</NavLink>
            </li>
          </div>
          <div className="flex gap-4">
            <li>
              <Link to="/login" className="rounded-lg p-4 text-secondShade">
                Login
              </Link>
            </li>
            <li>
              <LinkCustom to="/trial">Book a free trial</LinkCustom>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
