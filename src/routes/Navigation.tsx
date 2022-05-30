import {
  BrowserRouter as Router,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

import logo from "../logo.svg";
import { LazyPages3, LazyPages1, LazyPages2 } from "../01-lazyload/pages";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="react logo" />
          <ul>
            <li>
              <NavLink
                to="/lazy1"
                className={(isActive) => (isActive ? "nav-active" : "")}
              >
                Lazy Page 1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy2"
                className={(isActive) => (isActive ? "nav-active" : "")}
              >
                Lazy Page 2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy3"
                className={(isActive) => (isActive ? "nav-active" : "")}
              >
                Lazy PAge 3
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="lazy1" element={<LazyPages1 />} />
          <Route path="lazy2" element={<LazyPages2 />} />
          <Route path="lazy3" element={<LazyPages3 />} />
          <Route path="" element={<h1>About Page </h1>} />

          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </Router>
  );
};
