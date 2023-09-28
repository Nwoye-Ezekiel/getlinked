import images from 'assets/images/index.json';
import AnimateOnScroll from 'components/animate-on-scroll';

const Partners = () => {
  return (
    <div className="lg:pt-10 lg:pb-20">
      <div className="m-12">
        <div className="max-w-tablet lg:max-w-6xl mx-auto flex flex-col justify-center space-y-10 lg:space-y-20">
          <div className="flex flex-col justify-center items-center text-center space-y-3">
            <AnimateOnScroll>
              <h1 className="text-mdMd lg:text-lgMd">Partners and Sponsors</h1>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <p className="text-smMd lg:text-base max-w-[50ch] leading-loose">
                Getlinked Hackathon 1.0 is honored to have the following major companies as its
                partners and sponsors
              </p>
            </AnimateOnScroll>
          </div>
          <img
            src={images['partners_and_sponsors']}
            className="w-full max-w-sm mx-auto lg:max-w-none"
            alt="partners and sponsors"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
