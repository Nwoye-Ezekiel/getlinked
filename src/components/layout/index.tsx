import { Drawer } from '@mui/material';
import Button from 'components/button';
import { useEffect, useState } from 'react';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const navigationLinks = ['Timeline', 'Overview', 'FAQs'];

const scrollToSection = (sectionId: string) => {
  window.scrollTo({ top: 0, behavior: 'smooth' });

  setTimeout(() => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }, 300);
};

const NavigationLinks = ({ onClick }: { onClick?: () => void }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isContactLinkActive, setIsContactLinkActive] = useState(false);

  const handleNavigation = (link: string) => {
    onClick?.();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(link.toLowerCase());
      }, 100);
    } else {
      scrollToSection(link.toLowerCase());
    }
  };

  useEffect(() => {
    if (location.pathname === '/contact') {
      setIsContactLinkActive(true);
    } else {
      setIsContactLinkActive(false);
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 lgMd:gap-20 lg:items-center">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 lgMd:gap-12 w-fit">
        {navigationLinks.map((link, index) => (
          <ScrollLink
            key={index}
            to={link.toLowerCase()}
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => {
              handleNavigation(link);
            }}
          >
            <span
              className={`text-base font-inter lg:font-montserrat cursor-pointer lg:p-2 lg:rounded transition-all duration-100 lg:hover:text-primary text-white`}
            >
              {link}
            </span>
          </ScrollLink>
        ))}
        <Link
          to="/contact"
          onClick={() => {
            onClick?.();
          }}
        >
          <span
            className={`text-base font-inter lg:font-montserrat lg:p-2 lg:rounded transition-all duration-100 lg:hover:text-primary ${
              isContactLinkActive ? 'text-primary' : 'text-white'
            }`}
          >
            Contact
          </span>
        </Link>
      </div>
      <Link to="/register" className="w-fit" onClick={() => onClick?.()}>
        <Button size="large">Register</Button>
      </Link>
    </div>
  );
};

const Layout = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) setShowButton(true);
    else setShowButton(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="home">
      <div className="mx-12">
        <div className="flex justify-between items-center mx-auto my-5 lg:my-8 max-w-desktop">
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
          <NavigationLinks onClick={() => setOpenMenu(false)} />
        </Drawer>
      </div>
      <div
        className={`fixed bottom-0 right-0 p-4 lg:p-5 z-30 transition-opacity duration-500 ${
          showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="bg-horizontalGradient p-2 rounded-full shadow-md hover:shadow-lg duration-150 cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <KeyboardDoubleArrowDownIcon className="text-white text-3xl rotate-180" />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
