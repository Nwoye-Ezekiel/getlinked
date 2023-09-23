import React from 'react';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram.svg';
import { ReactComponent as TwitterIcon } from 'assets/icons/twitter.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';
import { ReactComponent as LinkedInIcon } from 'assets/icons/linkedin.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/phone.svg';
import { ReactComponent as LocationIcon } from 'assets/icons/location.svg';

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
              <ol className="space-y-3">
                <li className="text-smMd font-semibold text-primary">Useful Links</li>
                <li className="text-xs font-medium">Overview</li>
                <li className="text-xs font-medium">Timeline</li>
                <li className="text-xs font-medium">FAQs</li>
                <li className="text-xs font-medium">Register</li>
              </ol>
              <div className="flex items-center space-x-3">
                <span className="text-primary text-xs font-medium">Follow us</span>
                <InstagramIcon />
                <TwitterIcon />
                <FacebookIcon />
                <LinkedInIcon />
              </div>
            </div>
          </div>
          <div className="md:w-[30%] flex lg:justify-center">
            <ol className="space-y-4">
              <li className="text-smMd font-semibold text-primary">Contact Us</li>
              <li className="text-xs flex items-center space-x-3">
                <PhoneIcon />
                <span className="font-medium">+234 6707653444</span>
              </li>
              <li className="text-xs flex items-center space-x-3">
                <LocationIcon />
                <span className="font-medium max-w-[12ch]">
                  27,Alara Street Yaba 100012 Lagos State
                </span>
              </li>
            </ol>
          </div>
        </div>
        <p className="text-xs font-medium">All rights reserved. © getlinked Ltd.</p>
      </div>
    </div>
  );
};

export default Footer;
