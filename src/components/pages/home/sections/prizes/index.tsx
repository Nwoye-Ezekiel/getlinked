import images from 'assets/images/index.json';
import { useMediaQuery } from '@mui/material';
import AnimateOnScroll from 'components/animate-on-scroll';

const Prizes = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="border-t border-t-solid border-t-white/[0.18] lg:pt-6 pb-2 lg:pb-14">
      <div className="m-12">
        <div className="max-w-tablet lg:max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          {isDesktop && (
            <div className="w-[40%]">
              <img
                src={images['trophy']}
                className="lg:scale-[1.3] lg:ml-6 lgMax:scale-[1.4] lgMax:ml-0 mt-24"
                alt="trophy"
              />
            </div>
          )}
          <div className="w-full lg:w-[60%] lg:space-y-64">
            <div className="lg:ml-36 space-y-2 lg:space-y-3 text-center lg:text-left">
              <div className="text-mdMd lg:text-lgMd">
                <AnimateOnScroll>
                  <h1>Prizes and</h1>
                </AnimateOnScroll>
                <AnimateOnScroll>
                  <h1 className="text-primary">Rewards</h1>
                </AnimateOnScroll>
              </div>
              <AnimateOnScroll>
                <p className="text-smMd lg:text-base lg:max-w-[38ch] leading-loose">
                  Highlight of the prizes or rewards for winners and for participants.
                </p>
              </AnimateOnScroll>
            </div>
            {!isDesktop && (
              <div className="w-full max-w-sm mx-auto mt-10 lg:mt-0">
                <img src={images['trophy']} className="lg:scale-[1.4] lg:mt-24" alt="trophy" />
              </div>
            )}
            <div className="flex justify-center mt-28 lg:mt-0 space-x-3 lg:space-x-7">
              <div className="relative flex h-[120px] lg:h-[280px] w-1/3 max-w-[90px]  lg:max-w-[208px] border border-solid border-primary rounded-lg bg-primary/[.1]">
                <img
                  src={images['silver_medal']}
                  className="absolute scale-[0.9] -top-[35%] left-1/2 transform -translate-x-1/2"
                  alt="silver medal"
                />
                <div className="h-full flex flex-col w-full justify-end items-center lg:px-6 py-4 lg:py-8 space-y-1">
                  <div className="text-center -space-y-1 lg:-space-y-2">
                    <p className="text-xs lg:text-lgMax font-bold">2nd</p>
                    <p className="text-xs lg:text-mdMax font-semibold">Runner</p>
                  </div>
                  <p className="text-smMd lg:text-lgMd font-bold text-primary">N300,000</p>
                </div>
              </div>
              <div className="relative flex h-[125px] lg:h-[290px] w-1/3 max-w-[90px]  lg:max-w-[208px] border border-solid border-secondary rounded-lg bg-secondary/[.1] mt-3">
                <img
                  src={images['gold_medal']}
                  className="absolute scale-[1.4] -top-[50%] left-1/2 transform -translate-x-1/2"
                  alt="gold medal"
                />
                <div className="h-full flex flex-col w-full justify-end items-center lg:px-6 py-4 lg:py-8 space-y-1">
                  <div className="text-center -space-y-1 lg:-space-y-2">
                    <p className="text-xs lg:text-lgMax font-bold">1st</p>
                    <p className="text-xs lg:text-mdMax font-semibold">Runner</p>
                  </div>
                  <p className="text-smMd lg:text-lgMd font-bold text-secondary">N400,000</p>
                </div>
              </div>
              <div className="relative flex h-[120px] lg:h-[280px] w-1/3 max-w-[90px]  lg:max-w-[208px] border border-solid border-primary rounded-lg bg-primary/[.1]">
                <img
                  src={images['bronze_medal']}
                  className="absolute scale-[0.9] -top-[35%] left-1/2 transform -translate-x-1/2"
                  alt="bronze medal"
                />
                <div className="h-full flex flex-col w-full justify-end items-center lg:px-6 py-4 lg:py-8 space-y-1">
                  <div className="text-center -space-y-1 lg:-space-y-2">
                    <p className="text-xs lg:text-lgMax font-bold">3rd</p>
                    <p className="text-xs lg:text-mdMax font-semibold">Runner</p>
                  </div>
                  <p className="text-smMd lg:text-lgMd font-bold text-primary">N150,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
