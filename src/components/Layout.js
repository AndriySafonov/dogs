import { NavLink, Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home page</NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Collection</NavLink>
        </li>
      </ul>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
