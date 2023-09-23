import AllPartners from 'assets/images/partners.png';

const Partners = () => {
  return (
    <div className="border-t border-t-solid border-t-white/[0.18] lg:pt-10 lg:pb-20">
      <div className="m-12">
        <div className="max-w-tablet lg:max-w-6xl mx-auto flex flex-col justify-center space-y-10 lg:space-y-20">
          <div className="flex flex-col justify-center items-center text-center space-y-3">
            <h1 className="text-mdMd lg:text-lgMd">Partners and Sponsors</h1>
            <p className="text-xs lg:text-base max-w-[50ch] leading-loose">
              Getlinked Hackathon 1.0 is honored to have the following major companies as its
              partners and sponsors
            </p>
          </div>
          <img src={AllPartners} className="w-full max-w-sm mx-auto lg:max-w-none" alt="partners" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
