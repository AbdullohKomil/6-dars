import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='shadow py-5'>
      <div className='container'>
        <div className='d-flex align-items-center justify-content-between'>
          <Link className='text-decoration-none fs-4 text-black' to='/'>The Rick and Morty</Link>
          <nav>
            <ul className='list-unstyled d-flex align-items-center gap-3 m-0'>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'text-decoration-underline' : 'text-decoration-none')}
                  to='/'
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'text-decoration-underline' : 'text-decoration-none')}
                  to='/location'
                >
                  Location
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'text-decoration-underline' : 'text-decoration-none')}
                  to='/episode'
                >
                  Episode
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
