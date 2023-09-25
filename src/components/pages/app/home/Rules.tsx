import images from 'assets/images/index.json';

const Rules = () => {
  return (
    <div className="border-t border-t-solid border-t-white/[0.18]">
      <div className="m-12 lg:mb-32">
        <div className="max-w-tablet lg:max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-24 lg:gap-32">
          <div className="w-full max-w-sm lg:max-w-none lg:w-[50%] -m-20 -mt-4 scale-[1.1] lg:order-2">
            <img src={images['woman_sitting']} alt="woman sitting" />
          </div>
          <div className="w-full lg:w-[50%] space-y-3 lg:space-y-4 text-center lg:text-left lg:order-1">
            <div className="text-mdMd lg:text-lgMd">
              <h1>Rules and</h1>
              <h1 className="text-primary">Guidelines</h1>
            </div>
            <p className="text-smMax lg:text-base leading-loose">
              Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as
              day: to shape the future. Whether you're a coding genius, a design maverick, or a
              concept wizard, you'll have the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and creating solutions that
              can change the world, that's what we're all about!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
