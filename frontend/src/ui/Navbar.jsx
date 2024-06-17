import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-nav-bg text-nav-text px-24 py-7 font-medium tracking-wider">
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
            <NavLink to="/login" className="text-nav-login rounded-lg p-4">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trial"
              className="text-nav-trial bg-gradient-trial shadow-custom border-border-trial rounded-2xl border-[0.5px] px-8 py-[18px] font-semibold outline-none"
            >
              Book a free trial
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
