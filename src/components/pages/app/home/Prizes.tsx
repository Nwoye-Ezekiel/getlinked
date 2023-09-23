import Trophy from 'assets/images/trophy.png';
import SilverMedal from 'assets/images/silver-medal.png';
import GoldMedal from 'assets/images/gold-medal.png';
import BronzeMedal from 'assets/images/bronze-medal.png';

const Prizes = () => {
  return (
    <div className="border-t border-t-solid border-t-white/[0.18] pt-16 pb-20">
      <div className="mx-14">
        <div className="max-w-6xl mx-auto flex flex-col lgMd:flex-row items-center gap-24">
          <div className="w-[40%]">
            <img src={Trophy} className="scale-[1.4] mt-24" alt="trophy" />
          </div>
          <div className="w-[60%] space-y-64">
            <div className='ml-36 space-y-3'>
              <div className="-space-y-2 text-mdMd lgMd:text-lgMd">
                <h1>Prizes and</h1>
                <h1 className="text-primary">Rewards</h1>
              </div>
              <p className='max-w-[38ch]'>Highlight of the prizes or rewards for winners and for participants.</p>
            </div>
            <div className="flex space-x-7">
              <div className="relative h-[280px] w-52 border border-solid border-primary rounded-lg bg-primary/[.1]">
                <img
                  src={SilverMedal}
                  className="absolute scale-[0.9] -top-[35%] left-1/2 transform -translate-x-1/2"
                  alt="silver-medal"
                />
                <div className="h-full flex flex-col justify-end items-center px-6 py-8 space-y-1">
                  <div className="text-center -space-y-2">
                    <p className="text-lgMax font-bold">2nd</p>
                    <p className="text-mdMax font-semibold">Runner</p>
                  </div>
                  <p className="text-lgMd font-bold text-primary">N300,000</p>
                </div>
              </div>
              <div className="relative h-[290px] w-52 border border-solid border-secondary rounded-lg bg-secondary/[.1] mt-3">
                <img
                  src={GoldMedal}
                  className="absolute scale-[1.4] -top-[50%] left-1/2 transform -translate-x-1/2"
                  alt="gold-medal"
                />
                <div className="h-full flex flex-col justify-end items-center px-6 py-8 space-y-1">
                  <div className="text-center -space-y-2">
                    <p className="text-lgMax font-bold">1st</p>
                    <p className="text-mdMax font-semibold">Runner</p>
                  </div>
                  <p className="text-lgMd font-bold text-secondary">N400,000</p>
                </div>
              </div>
              <div className="relative h-[280px] w-52 border border-solid border-primary rounded-lg bg-primary/[.1]">
                <img
                  src={BronzeMedal}
                  className="absolute scale-[0.9] -top-[35%] left-1/2 transform -translate-x-1/2"
                  alt="bronze-medal"
                />
                <div className="h-full flex flex-col justify-end items-center px-6 py-8 space-y-1">
                  <div className="text-center -space-y-2">
                    <p className="text-lgMax font-bold">3rd</p>
                    <p className="text-mdMax font-semibold">Runner</p>
                  </div>
                  <p className="text-lgMd font-bold text-primary">N150,000</p>
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
