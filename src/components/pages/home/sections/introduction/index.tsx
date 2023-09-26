import images from 'assets/images/index.json';
import AnimateOnScroll from 'components/animate-on-scroll';

const Introduction = () => {
  return (
    <div id="overview" className="border-t border-t-solid border-t-white/[0.18]">
      <div className="m-12 lg:mb-20">
        <div className="max-w-tablet lg:max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 max-w-sm mx-auto lg:max-w-none">
            <img src={images['idea']} alt="idea" />
          </div>
          <div className="w-full lg:w-1/2 space-y-3 lg:space-y-4 text-center lg:text-left">
            <div className="text-mdMd lg:text-lgMd">
              <AnimateOnScroll>
                <h1>Introduction to getlinked</h1>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <h1 className="text-primary">tech Hackathon 1.0</h1>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll>
              <p className="text-smMax lg:text-base leading-loose">
                Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as
                day: to shape the future. Whether you're a coding genius, a design maverick, or a
                concept wizard, you'll have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and creating solutions
                that can change the world, that's what we're all about!
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
