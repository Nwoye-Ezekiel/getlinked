import ManWithKey from 'assets/images/man-with-key.png';
import { ReactComponent as CheckIcon } from 'assets/icons/check.svg';
import Button from 'components/button';

const Privacy = () => {
  return (
    <div className="border-t border-t-solid border-t-white/[0.18] lg:pt-10 lg:pb-56">
      <div className="m-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-14 lg:gap-16">
          <div className="w-full lg:w-[50%] space-y-10 lg:space-y-16 text-center lg:text-left">
            <div className="space-y-7">
              <div className="space-y-4">
                <div className="text-mdMd lg:text-lgMd">
                  <h1>Privacy Policy and</h1>
                  <h1 className="text-primary">Terms</h1>
                </div>
                <p className="text-smMd text-white/[0.75]">Last updated on September 12, 2023</p>
              </div>
              <div className="mt-6">
                <p className="text-smMd leading-loose">
                  Below are our privacy & policy, which outline a lot of goodies.
                </p>
                <p className="text-smMd leading-loose">
                  It's our aim to always take of our participant
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col items-center p-10 lg:p-14 border border-solid border-primary rounded-lg bg-primary/[.02] max-w-lg lg:max-w-none mx-auto">
              <p className="text-smMd leading-loose">
                At getlinked tech Hackathon 1.0, we value your privacy and are committed to
                protecting your personal information. This Privacy Policy outlines how we collect,
                use, disclose, and safeguard your data when you participate in our tech hackathon
                event. By participating in our event, you consent to the practices described in this
                policy.
              </p>
              <div className="mt-6 mb-5 space-y-5">
                <div className="space-y-1">
                  <p className="text-primary font-bold">Licensing Policy</p>
                  <p className="text-smMd font-bold">Here are terms of our Standard License:</p>
                </div>
                <ol className="space-y-5">
                  <li className="flex space-x-3 text-smMd leading-loose">
                    <CheckIcon className="flex-shrink-0 mt-1.5" />
                    <span>
                      The Standard License grants you a non-exclusive right to navigate and register
                      for our event
                    </span>
                  </li>
                  <li className="flex space-x-3 text-smMd leading-loose">
                    <CheckIcon className="flex-shrink-0 mt-1.5" />
                    <span>
                      You are licensed to use the item available at any free source sites, for your
                      project developement
                    </span>
                  </li>
                </ol>
              </div>
              <Button>Read More</Button>
            </div>
          </div>
          <div className="w-full max-w-sm lg:max-w-none mx-auto lg:w-[50%]">
            <img src={ManWithKey} alt="ManWithKey" className='lg:scale-[1.35] lg:mt-36 lg:ml-0' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
