import Button from 'components/button';
import BoyOnGlasses from 'assets/images/boy-on-glasses.png';
// import { ReactComponent as Chain } from 'assets/icons/chain.svg';
// import { ReactComponent as Bulb } from 'assets/icons/bulb.svg';
import { ReactComponent as Arc } from 'assets/icons/arc.svg';
// import { ReactComponent as Explosion } from 'assets/icons/explosion.svg';
// import Flare from 'assets/images/flare.png';
// import { ReactComponent as Star } from 'assets/icons/star.svg';

const Hero = () => {
  return (
    <div className="flex border-t border-t-solid border-white/[.18] overflow-hidden">
      <div className="lg:mx-12 w-full">
        <div className="w-full h-full max-w-desktop mx-auto">
          <div className="flex w-fit mx-auto relative justify-center lg:mx-0 lg:ml-auto mt-8">
            <i className="text-base lg:text-lgMd font-bold whitespace-nowrap">
              Igniting a Revolution in HR Innovation
            </i>
            <Arc className="w-[118px] lg:w-[225px] absolute right-1 -bottom-3" />
          </div>
          <div className="relative h-full">
            <div className="self-start space-y-4 lg:space-y-16 lg:w-[70%] mt-12 lg:mt-20 flex flex-col items-center lg:items-start lg:pb-[70px]">
              <div className="space-y-7 lg:space-y-10 flex flex-col items-center lg:items-start ">
                <div className="flex flex-col items-center lg:items-start space-y-1 text-center lg:text-left">
                  <div className="-space-y-1 lg:-space-y-6">
                    <div className="relative">
                      {/* <Bulb className="absolute -top-9 right-[14%]" /> */}
                      <h1 className="font-bold text-lgMd lg:text-2xl ">getlinked Tech</h1>
                    </div>
                    <div className="flex items-end space-x-2">
                      <h1 className="flex items-end font-bold text-lgMd lg:text-2xl ">Hackathon</h1>
                      <span className="font-clashDisplay font-bold text-lgMd lg:text-2xl text-primary">
                        1.0
                      </span>
                      <div className="flex">
                        {/* <Chain className="mb-4" />
                        <Explosion className="mb-4" /> */}
                      </div>
                    </div>
                  </div>
                  <p className="text-smMax lg:text-mdMd w-[80%] max-w-[40ch] leading-loose">
                    Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
                  </p>
                </div>
                <Button size="large">Register</Button>
              </div>
              <div className="flex space-x-7">
                <div className="flex items-end">
                  <p className="font-unicaOne text-xlMd lg:text-xlMax">00</p>
                  <span className="mb-4 lg:mb-5 text-smMd lg:text-base">H</span>
                </div>
                <div className="flex items-end">
                  <p className="font-unicaOne text-xlMd lg:text-xlMax">00</p>
                  <span className="mb-4 lg:mb-5 text-smMd lg:text-base">M</span>
                </div>
                <div className="flex items-end">
                  <p className="font-unicaOne text-xlMd lg:text-xlMax">00</p>
                  <span className="mb-4 lg:mb-5 text-smMd lg:text-base">S</span>
                </div>
              </div>
            </div>
            <div className="lg:absolute flex flex-col space-y-6 max-w-sm mx-auto lg:max-w-none lg:w-[60%] lg:scale-[1.07] -right-[95px] bottom-[155px]">
              <img src={BoyOnGlasses} alt="hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
