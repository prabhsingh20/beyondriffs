import { Link, NavLink } from "react-router-dom";

function Navbar() {
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
              <Link to="/login" className="text-primary-100 rounded-lg p-4">
                Login
              </Link>
            </li>
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
