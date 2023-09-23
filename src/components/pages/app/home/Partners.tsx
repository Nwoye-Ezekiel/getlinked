import AllPartners from 'assets/images/partners.png';

const Partners = () => {
  return (
    <div className="border-t border-t-solid border-t-white/[0.18] pt-16 pb-20">
      <div className="mx-14">
        <div className="max-w-6xl mx-auto flex flex-col justify-center space-y-20">
          <div className="flex flex-col justify-center items-center text-center space-y-3">
            <h1 className="text-mdMd lgMd:text-lgMd">Partners and Sponsors</h1>
            <p className="max-w-[50ch] leading-loose">
              Getlinked Hackathon 1.0 is honored to have the following major companies as its
              partners and sponsors
            </p>
          </div>
          <img src={AllPartners} alt="partners" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
