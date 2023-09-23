import ManThinking from 'assets/images/man-thinking.png';

const FAQs = () => {
  return (
    <div className="border-t border-t-solid border-t-white/[0.18] lg:pt-4 lg:pb-20">
      <div className="m-12 mb-6 lg:mb-16">
        <div className="max-w-tablet lg:max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-28 lg:gap-24">
          <div className="w-full lg:w-[40%] space-y-12 lg:space-y-14 text-center lg:text-left">
            <div className="space-y-4">
              <div className="text-mdMd lg:text-lgMd">
                <h1>Frequently Asked</h1>
                <h1 className="text-primary">Questions</h1>
              </div>
              <p className="text-smMd leading-loose">
                We got answers to the questions that you might want to ask about{' '}
                <span className="font-semibold">getlinked Hackathon 1.0</span>
              </p>
            </div>
            <div className="flex flex-col space-y-5 leading-relaxed text-smMax lg:text-smMd">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-end lg:items-center space-x-4">
                  <p className="font-medium text-left">
                    Can I work on a project I started before the hackathon?
                  </p>
                  <span className="text-primary text-mdMax leading-none">+</span>
                </div>
                <hr className="text-primary" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-end lg:items-center space-x-4">
                  <p className="font-medium text-left">
                    What happens if I need help during the hackathon?
                  </p>
                  <span className="text-primary text-mdMax leading-none">+</span>
                </div>
                <hr className="text-primary" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-end lg:items-center space-x-4">
                  <p className="font-medium text-left">
                    What happens if I don't have an idea for a project?
                  </p>
                  <span className="text-primary text-mdMax leading-none">+</span>
                </div>
                <hr className="text-primary" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-end lg:items-center space-x-4">
                  <p className="font-medium text-left">
                    Can I join a team or do I have to come with one?
                  </p>
                  <span className="text-primary text-mdMax leading-none">+</span>
                </div>
                <hr className="text-primary" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-end lg:items-center space-x-4">
                  <p className="font-medium text-left">What happens after the hackathon ends?</p>
                  <span className="text-primary text-mdMax leading-none">+</span>
                </div>
                <hr className="text-primary" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-end lg:items-center space-x-4">
                  <p className="font-medium text-left">
                    Can I work on a project I started before the hackathon?
                  </p>
                  <span className="text-primary text-mdMax leading-none">+</span>
                </div>
                <hr className="text-primary" />
              </div>
            </div>
          </div>
          <div className="w-full max-w-sm lg:max-w-none lg:w-[55%]">
            <img src={ManThinking} alt="ManThinking" className="scale-[1.2]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
