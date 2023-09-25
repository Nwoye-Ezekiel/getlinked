import React from 'react';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram.svg';
import { ReactComponent as TwitterIcon } from 'assets/icons/twitter.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';
import { ReactComponent as LinkedInIcon } from 'assets/icons/linkedin.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/phone.svg';
import { ReactComponent as LocationIcon } from 'assets/icons/location.svg';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="relative p-12 lg:pt-20 lg:pb-14">
      <div className="absolute top-0 left-0 w-full h-full bg-black/[.2] -z-10"></div>
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-16">
        <div className="flex flex-col md:flex-row w-full gap-10">
          <div className="md:w-[60%] space-y-10 lg:space-y-16">
            <div className="flex flex-col space-y-1">
              <h1 className="text-mdMd lg:text-lg font-bold">
                get<span className="text-primary font-clashDisplay font-bold">linked</span>
              </h1>
              <p className="text-xs font-medium leading-loose max-w-[55ch]">
                Getlinked Tech Hackathon is a technology innovation program established by a group
                of organizations with the aim of showcasing young and talented individuals in the
                field of technology
              </p>
            </div>
            <div className="space-x-2 text-xs">
              <span className="font-medium">Terms of Use</span>
              <span className="text-primary font-bold text-base">|</span>
              <span className="font-medium">Privacy Policy</span>
            </div>
          </div>
          <div className="md:w-[30%] flex lg:justify-center">
            <div className="space-y-4">
              <div className="space-y-3">
                <p className="text-smMd font-semibold text-primary">Useful Links</p>
                <div>
                  <ScrollLink to="overview" spy={true} smooth={true} duration={500}>
                    <p className="text-xs font-medium cursor-pointer hover:text-primary transition-all duration-100 w-fit">
                      Overview
                    </p>
                  </ScrollLink>
                </div>
                <div>
                  <ScrollLink to="timeline" spy={true} smooth={true} duration={500}>
                    <p className="text-xs font-medium cursor-pointer hover:text-primary transition-all duration-100 w-fit">
                      Timeline
                    </p>
                  </ScrollLink>
                </div>
                <div>
                  <ScrollLink to="faqs" spy={true} smooth={true} duration={500}>
                    <p className="text-xs font-medium cursor-pointer hover:text-primary transition-all duration-100 w-fit">
                      FAQs
                    </p>
                  </ScrollLink>
                </div>
                <div>
                  <Link to="/register">
                    <p className="text-xs font-medium cursor-pointer hover:text-primary transition-all duration-100 w-fit">
                      Register
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary text-xs font-medium">Follow us</span>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon className="hover:text-primary cursor-pointer transition-all duration-100 hover:scale-125" />
                </a>
                <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                  <TwitterIcon className="hover:text-primary cursor-pointer transition-all duration-100 hover:scale-125" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon className="hover:text-primary cursor-pointer transition-all duration-100 hover:scale-125" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon className="hover:text-primary cursor-pointer transition-all duration-100 hover:scale-125" />
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-[30%] flex lg:justify-center">
            <div className="space-y-4">
              <p className="text-smMd font-semibold text-primary">Contact Us</p>
              <p className="text-xs flex items-center space-x-3">
                <PhoneIcon />
                <a
                  href="tel:+2346707653444"
                  className="font-medium hover:text-primary transition-all duration-100"
                >
                  +234 6707653444
                </a>
              </p>
              <p className="text-xs flex items-center space-x-3">
                <LocationIcon />
                <span className="font-medium max-w-[12ch] hover:text-primary transition-all duration-100 cursor-default">
                  27,Alara Street Yaba 100012 Lagos State
                </span>
              </p>
            </div>
          </div>
        </div>
        <p className="text-xs font-medium">All rights reserved. © getlinked Ltd.</p>
      </div>
    </div>
  );
};

export default Footer;