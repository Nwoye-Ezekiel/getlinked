import Button from 'components/button';
import images from 'assets/images/index.json';
import { criteria } from 'data/static/criterias';

const Criteria = () => {
  return (
    <div className="border-t border-t-solid border-t-white/[0.18] lg:pt-8 lg:pb-20">
      <div className="m-12 lg:mb-8">
        <div className="max-w-tablet lg:max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:gap-24">
          <div className="w-full max-w-sm lg:max-w-none lg:w-1/2">
            <img
              src={images['woman_holding_chart']}
              alt="woman holding chart"
              className="lg:scale-[1.18] lg:mt-24 lg:ml-4"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-11 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-5">
              <div className="text-mdMd lg:text-lgMd">
                <h1>Judging Criteria</h1>
                <h1 className="text-primary">Key attributes</h1>
              </div>
              <div className="flex flex-col space-y-5 leading-relaxed text-xs lg:text-smMd">
                {criteria.map((item, index) => (
                  <div key={index}>
                    <p>
                      <span className="text-pink font-bold text-smMax lg:text-base">
                        {item.title}:
                      </span>{' '}
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <Button>Read More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Criteria;
