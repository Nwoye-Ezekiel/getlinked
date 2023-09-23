import Button from 'components/button';
import BoyOnGlasses from 'assets/images/boy-on-glasses.png';
import { ReactComponent as Chain } from 'assets/icons/chain.svg';
import { ReactComponent as Bulb } from 'assets/icons/bulb.svg';
import { ReactComponent as Arc } from 'assets/icons/arc.svg';
// import Flare from 'assets/images/flare.png';

const Hero = () => {
  return (
    <div className="flex lgMd:h-screen border-t border-t-solid border-white/[.18] lgMd:max-h-[730px] overflow-hidden">
      <div className="mx-12 w-full">
        <div className="w-full h-full max-w-container mx-auto">
          <div className="flex relative justify-center lgMd:justify-end mt-8">
            <i className="text-base lgMd:text-lgMd font-bold whitespace-nowrap">
              Igniting a Revolution in HR Innovation
            </i>
            <Arc className="absolute right-1 -bottom-3" />
          </div>
          <div className="relative flex-col lgMd:flex-row h-full">
            <div className="self-start space-y-4 lgMd:space-y-16 lgMd:w-[70%] mt-12 lgMd:mt-20 flex flex-col items-center lgMd:items-start ">
              <div className="space-y-7 lgMd:space-y-10 flex flex-col items-center lgMd:items-start ">
                <div className="flex flex-col items-center lgMd:items-start space-y-2 lgMd:-space-y-1 text-center lgMd:text-left">
                  <div className="-space-y-1 lgMd:-space-y-7">
                    <div className="relative">
                      <Bulb className="absolute -top-9 right-[14%]" />
                      <h1 className="font-bold text-lgMd lgMd:text-2xl ">getlinked Tech</h1>
                    </div>
                    <div className="flex items-end space-x-2">
                      <h1 className="flex items-end font-bold text-lgMd lgMd:text-2xl ">
                        Hackathon
                      </h1>
                      <span className="font-clashDisplay font-bold text-lgMd lgMd:text-2xl text-primary">
                        1.0
                      </span>
                      <div className="flex">
                        <Chain className="mb-4" />
                      </div>
                    </div>
                  </div>
                  <p className="text-smMax lgMd:text-mdMd max-w-[40ch]">
                    Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
                  </p>
                </div>
                <Button size="large">Register</Button>
              </div>
              <div className="flex space-x-7">
                <div className="flex items-end">
                  <p className="font-unicaOne text-xlMd lgMd:text-xlMax">00</p>
                  <span className="mb-4 lgMd:mb-5 text-smMd lgMd:text-base">H</span>
                </div>
                <div className="flex items-end">
                  <p className="font-unicaOne text-xlMd lgMd:text-xlMax">00</p>
                  <span className="mb-4 lgMd:mb-5 text-smMd lgMd:text-base">M</span>
                </div>
                <div className="flex items-end">
                  <p className="font-unicaOne text-xlMd lgMd:text-xlMax">00</p>
                  <span className="mb-4 lgMd:mb-5 text-smMd lgMd:text-base">S</span>
                </div>
              </div>
            </div>
            <div className="lgMd:absolute flex flex-col space-y-6 lgMd:w-[60%] -right-20 bottom-24">
              <img src={BoyOnGlasses} alt="hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
