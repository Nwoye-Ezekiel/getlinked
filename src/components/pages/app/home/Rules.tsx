import WomanSitting from 'assets/images/woman-sitting.png';

const Rules = () => {
  return (
    <div className="border-t border-t-solid border-t-white/[0.18]">
      <div className="mx-14 lgMd:px-14 mt-16 mb-20">
        <div className="max-w-6xl mx-auto flex flex-col lgMd:flex-row items-center gap-32">
          <div className="w-full lgMd:w-[45%] space-y-2 text-center lgMd:text-left">
            <div className="-space-y-2 text-mdMd lgMd:text-lgMd">
              <h1>Rules and</h1>
              <h1 className="text-primary">Guidelines</h1>
            </div>
            <p className="text-smMax lgMd:text-smMd leading-loose">
              Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as
              day: to shape the future. Whether you're a coding genius, a design maverick, or a
              concept wizard, you'll have the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and creating solutions that
              can change the world, that's what we're all about!
            </p>
          </div>
          <div className="w-full lgMd:w-[55%] -m-20">
            <img src={WomanSitting} alt="WomanSitting" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
