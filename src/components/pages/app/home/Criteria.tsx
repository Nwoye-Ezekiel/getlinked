import WomanHoldingChart from 'assets/images/woman-holding-chart.png';
import Button from 'components/button';

const Criteria = () => {
  return (
    <div className="border-t border-t-solid border-t-white/[0.18] lg:pt-8 lg:pb-20">
      <div className="m-12 lg:mb-20">
        <div className="max-w-tablet lg:max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:gap-24">
          <div className="w-full max-w-sm lg:max-w-none lg:w-1/2">
            <img
              src={WomanHoldingChart}
              alt="WomanHoldingChart"
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
                <p>
                  <span className="text-pink font-bold text-smMax lg:text-base">
                    Innovation and Creativity:
                  </span>{' '}
                  Evaluate the uniqueness and creativity of the solution. Consider whether it
                  addresses a real-world problem in a novel way or introduces innovative features.
                </p>
                <p>
                  <span className="text-pink font-bold text-smMax lg:text-base">
                    Functionality:
                  </span>{' '}
                  Assess how well the solution works. Does it perform its intended functions
                  effectively and without major issues? Judges would consider the completeness and
                  robustness of the solution.
                </p>
                <p>
                  <span className="text-pink font-bold text-smMax lg:text-base">
                    Impact and Relevance:
                  </span>{' '}
                  Determine the potential impact of the solution in the real world. Does it address
                  a significant problem, and is it relevant to the target audience? Judges would
                  assess the potential social, economic, or environmental benefits.
                </p>
                <p>
                  <span className="text-pink font-bold text-smMax lg:text-base">
                    Technical Complexity:
                  </span>{' '}
                  Evaluate the technical sophistication of the solution. Judges would consider the
                  complexity of the code, the use of advanced technologies or algorithms, and the
                  scalability of the solution.
                </p>
                <p>
                  <span className="text-pink font-bold text-smMax lg:text-base">
                    Adherence to Hackathon Rules:
                  </span>{' '}
                  Judges will Ensure that the team adhered to the rules and guidelines of the
                  hackathon, including deadlines, use of specific technologies or APIs, and any
                  other competition-specific requirements.
                </p>
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
