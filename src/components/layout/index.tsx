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
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 lgMd:gap-[120px] lg:items-center">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 lgMd:gap-14 w-fit">
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
        <div className="flex justify-between items-center mx-auto mt-8 lg:mt-14 mb-5 lg:mb-8 max-w-desktop">
          <Link to="/">
            <h1 className="lg:text-lgMax font-bold">
              get<span className="text-primary font-clashDisplay font-bold">linked</span>
            </h1>
          </Link>
          <div className="lg:hidden" onClick={() => setOpenMenu(true)}>
            <div className="flex flex-col space-y-0.5 w-5">
              <span className="bg-white w-1/2 h-[3px] rounded-full mr-auto"></span>
              <span className="bg-white w-full h-[3px] rounded-full"></span>
              <span className="bg-white w-1/2 h-[3px] rounded-full ml-auto"></span>
            </div>
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
          sx={{
            '& .MuiDrawer-paper': {
              backgroundColor: 'var(--color-background)',
            },
          }}
          PaperProps={{
            className: 'py-8 px-12 gap-14 flex flex-col w-full max-w-[350px]',
          }}
        >
          <div className="flex justify-end">
            <CloseIcon onClick={() => setOpenMenu(false)} />
          </div>
          <NavigationLinks />
        </Drawer>
      </div>
      <Outlet />
    </div>
  );
}
