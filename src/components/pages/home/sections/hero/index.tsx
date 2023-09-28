import Button from 'components/button';
import images from 'assets/images/index.json';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useCountdown } from 'hooks';
import AnimateOnScroll from 'components/animate-on-scroll';

const Hero = () => {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const { hours, minutes, seconds } = useCountdown(new Date('2023-09-30T12:00:00Z'));

  return (
    <div className="relative flex border-t border-t-solid border-white/[.18] overflow-hidden">
      <img
        alt="pattern"
        src={images['pattern']}
        className="hidden lg:block absolute right-0 bottom-0"
      />
      <div className="lg:mx-12 w-full">
        <div className="w-full h-full max-w-desktop mx-auto">
          <div className="flex w-fit mx-auto relative justify-center lg:mx-0 lg:ml-auto lg:-mr-10 mt-8">
            <AnimateOnScroll refIndex={0}>
              <i className="text-base lg:text-lgMd font-bold whitespace-nowrap">
                Igniting a Revolution in HR Innovation
              </i>
            </AnimateOnScroll>
            <img
              alt="arc"
              src={images['arc']}
              className="w-[118px] lg:w-[225px] absolute right-1 -bottom-2 lg:-bottom-3"
            />
          </div>
          <div className="relative h-full">
            <div className="self-start space-y-4 lg:space-y-16 lg:w-[70%] mt-12 lg:mt-20 flex flex-col items-center lg:items-start lg:pb-[70px]">
              <div className="space-y-7 lg:space-y-10 flex flex-col items-center lg:items-start ">
                <div className="flex flex-col items-center lg:items-start space-y-1">
                  <div className="-space-y-1 lg:-space-y-6 text-center lg:text-left">
                    <div className="relative">
                      <img
                        alt="bulb"
                        src={images['bulb']}
                        className="absolute w-5 lg:w-auto right-[47px] -top-[12px] lg:-top-[36px] lg:right-[149px]"
                      />
                      <AnimateOnScroll refIndex={1}>
                        <h1 className="font-bold text-lgMd lg:text-2xl ">getlinked Tech</h1>
                      </AnimateOnScroll>
                    </div>
                    <AnimateOnScroll refIndex={2}>
                      <div className="flex items-end space-x-2">
                        <h1 className="flex items-end font-bold text-lgMd lg:text-2xl ">
                          Hackathon
                        </h1>
                        <span className="font-clashDisplay font-bold text-lgMd lg:text-2xl text-primary">
                          1.0
                        </span>
                        <div className="flex">
                          <img
                            alt="chain"
                            src={images['chain']}
                            className="w-10 lg:w-full mb-1.5 -ml-2 lg:-ml-1 lg:mb-4"
                          />
                          <img
                            alt="explosion"
                            src={images['explosion']}
                            className="w-7 lg:w-full mb-1.5 lg:mb-4"
                          />
                        </div>
                      </div>
                    </AnimateOnScroll>
                  </div>
                  <AnimateOnScroll refIndex={3}>
                    <p className="text-smMax lg:text-mdMd w-[80%] max-w-[40ch] text-center lg:text-left mx-auto lg:mx-0 leading-loose">
                      Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
                    </p>
                  </AnimateOnScroll>
                </div>
                <AnimateOnScroll refIndex={4}>
                  <Button
                    onClick={() => navigate('/register')}
                    size={`${isDesktop ? 'large' : 'medium'}`}
                  >
                    Register
                  </Button>
                </AnimateOnScroll>
              </div>
              <AnimateOnScroll refIndex={5}>
                <div className="flex space-x-7">
                  <div className="flex items-end">
                    <p className="font-unicaOne text-xlMd lg:text-xlMax">{hours}</p>
                    <span className="mb-4 lg:mb-5 text-smMd lg:text-base">H</span>
                  </div>
                  <div className="flex items-end">
                    <p className="font-unicaOne text-xlMd lg:text-xlMax">{minutes}</p>
                    <span className="mb-4 lg:mb-5 text-smMd lg:text-base">M</span>
                  </div>
                  <div className="flex items-end">
                    <p className="font-unicaOne text-xlMd lg:text-xlMax">{seconds}</p>
                    <span className="mb-4 lg:mb-5 text-smMd lg:text-base">S</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
            <div className="lg:absolute flex flex-col space-y-6 max-w-sm mx-auto lg:max-w-none lg:w-[60%] lg:scale-[1.07] -right-[95px] bottom-[155px]">
              <img src={images['boy_on_vr_googles']} alt="boy on vr googles" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
