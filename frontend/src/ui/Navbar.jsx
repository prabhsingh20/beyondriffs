import { Link, NavLink } from "react-router-dom";
import LinkCustom from "./LinkCustom";

function Navbar() {
  return (
    <header>
      <nav className="text-firstShade bg-nav-bg px-24 py-7 font-medium tracking-wider">
        <ul className="flex items-center justify-between">
          <div>
            <li>
              <img src="/logo.png" alt="company logo" />
            </li>
          </div>
          <div className="flex gap-10">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/course">Course</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support</NavLink>
            </li>
          </div>
          <div className="flex gap-4">
            <li>
              <Link to="/login" className="text-secondShade rounded-lg p-4">
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
