import ManThinking from 'assets/images/man-thinking.png';

const FAQs = () => {
  return (
    <div className="border-t border-t-solid border-t-white/[0.18] pt-16 pb-20">
      <div className="mx-14">
        <div className="max-w-6xl mx-auto flex flex-col lgMd:flex-row items-center gap-24">
          <div className="w-full lgMd:w-[40%] space-y-14 text-center lgMd:text-left">
            <div className="space-y-4">
              <div className="-space-y-2 text-mdMd lgMd:text-lgMd">
                <h1>Frequently Asked</h1>
                <h1 className="text-primary">Questions</h1>
              </div>
              <p className="text-smMd leading-loose">
                We got answers to the questions that you might want to ask about{' '}
                <span className="font-medium">getlinked Hackathon 1.0</span>
              </p>
            </div>
            <div className="flex flex-col space-y-5 leading-relaxed text-smMax lgMd:text-smMd">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                  <p className="font-medium">
                    Can I work on a project I started before the hackathon?
                  </p>
                  <span className="text-primary text-mdMax">+</span>
                </div>
                <hr className="text-primary" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                  <p className="font-medium">What happens if I need help during the hackathon?</p>
                  <span className="text-primary text-mdMax">+</span>
                </div>
                <hr className="text-primary" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                  <p className="font-medium">What happens if I don't have an idea for a project?</p>
                  <span className="text-primary text-mdMax">+</span>
                </div>
                <hr className="text-primary" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                  <p className="font-medium">Can I join a team or do I have to come with one?</p>
                  <span className="text-primary text-mdMax">+</span>
                </div>
                <hr className="text-primary" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                  <p className="font-medium">What happens after the hackathon ends?</p>
                  <span className="text-primary text-mdMax">+</span>
                </div>
                <hr className="text-primary" />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                  <p className="font-medium">
                    Can I work on a project I started before the hackathon?
                  </p>
                  <span className="text-primary text-mdMax">+</span>
                </div>
                <hr className="text-primary" />
              </div>
            </div>
          </div>
          <div className="w-full lgMd:w-[60%]">
            <img src={ManThinking} alt="ManThinking" className="scale-[1.2]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
