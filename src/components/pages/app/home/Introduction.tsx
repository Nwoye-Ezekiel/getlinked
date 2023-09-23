import Idea from 'assets/images/idea.png';

const Introduction = () => {
  return (
    <div className="border-t border-t-solid border-t-white/[0.18]">
      <div className="mx-14 lgMd:px-14 mt-16 mb-20">
        <div className="max-w-6xl mx-auto flex flex-col lgMd:flex-row items-center gap-24">
          <div className="w-full lgMd:w-1/2">
            <img src={Idea} alt="idea" />
          </div>
          <div className="w-full lgMd:w-1/2 space-y-2 text-center lgMd:text-left">
            <div className="-space-y-2 text-mdMd lgMd:text-lgMd">
              <h1>Introduction to getlinked</h1>
              <h1 className="text-primary">tech Hackathon 1.0</h1>
            </div>
            <p className="leading-loose">
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

export default Introduction;
