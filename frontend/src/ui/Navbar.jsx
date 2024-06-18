import { Link, NavLink } from "react-router-dom";
import LinkCustom from "./LinkCustom";

function Navbar() {
  return (
    <header>
      <nav className="bg-nav-bg px-24 py-7 font-medium tracking-wider text-nav-text">
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
              <Link to="/login" className="rounded-lg p-4 text-nav-login">
                Login
              </Link>
            </li>
            <li>
              <LinkCustom>Book a free trial</LinkCustom>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
