import { Drawer } from '@mui/material';
import Button from 'components/button';
import { useState } from 'react';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { Link, NavLink, Outlet } from 'react-router-dom';

const navigationLinks = [
  {
    name: 'Timeline',
    path: '/timeline',
  },
  {
    name: 'Overview',
    path: '/overview',
  },
  {
    name: 'FAQs',
    path: '/faqs',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

export default function Layout() {
  const [openMenu, setOpenMenu] = useState(false);

  const NavigationLinks = () => {
    return (
      <div className="flex flex-col lg:flex-row gap-7 lg:gap-20 lgMd:gap-[120px] lg:items-center">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 lgMd:gap-14 w-fit">
          {navigationLinks.map((link) => (
            <NavLink
              to={link.path}
              key={link.name}
              end={link.name === 'Home'}
              onClick={() => setOpenMenu(false)}
            >
              {({ isActive }) => (
                <span
                  className={`text-base font-inter lg:font-montserrat ${
                    isActive ? 'text-primary' : 'text-white'
                  }`}
                >
                  {link.name}
                </span>
              )}
            </NavLink>
          ))}
        </div>
        <Link to="/register" className="w-fit" onClick={() => setOpenMenu(false)}>
          <Button size="large">Register</Button>
        </Link>
      </div>
    );
  };

  return (
    <div>
      <div className="mx-12">
        <div className="flex justify-between items-center mx-auto mt-8 lg:mt-14 mb-5 lg:mb-8 max-w-container">
          <Link to="/">
            <h1 className="text-sm md:text-md lg:text-lg lgMd:text-lgMax font-bold">
              get<span className="text-primary font-clashDisplay font-bold">linked</span>
            </h1>
          </Link>
          <div className="lg:hidden" onClick={() => setOpenMenu(true)}>
            Hamburger
          </div>
          <div className="hidden lg:block">
            <NavigationLinks />
          </div>
        </div>
      </div>

      <div className="lg:hidden flex flex-col relative z-20">
        <Drawer
          open={openMenu}
          anchor="left"
          onClose={() => setOpenMenu(false)}
          PaperProps={{
            className: 'bg-background py-10 px-12 gap-14 flex flex-col w-[90vw]',
          }}
        >
          <CloseIcon onClick={() => setOpenMenu(false)} />
          <NavigationLinks />
        </Drawer>
      </div>
      <Outlet />
    </div>
  );
}