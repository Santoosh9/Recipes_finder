import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './Sidebar';
// import { ReactDOM } from 'react-dom';
import { faHome, faList, faCog } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const location = useLocation();

  // useEffect(() => {
  //   if (window.innerWidth < 768) {
  //     setShowSidebar(true);
  //   } else {
  //     setShowSidebar(false);
  //   }
  // }, []);

  const links = [
    {
      name: 'Home',
      path: '/',
      icon: faHome,
    },
    {
      name: 'Recipes',
      path: '/recipes',
      icon: faList,
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: faCog,
    },
  ];
  return (
    // ReactDOM.createPortal()
    <>
      <div>
        <div className="Navbar container">
          <a href="/" className="logo">
            F<span>oo</span>dapp
          </a>

          <div className="nav-links">
            {links.map((link) => (
              <Link
                to={link.path}
                className={location.pathname === link.path ? ' active' : ''}
                key={link.name}
              >
                {link.name}
              </Link>
            ))}
          </div>
          {}
          <div
            onClick={() => {
              setShowSidebar(!showSidebar);
            }}
            className={showSidebar ? 'sidebar-btn active' : 'sidebar-btn'}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        {showSidebar && <Sidebar links={links} />}
      </div>
    </>
    // document.querySelector('.second-root')
  );
};

export default Navbar;
