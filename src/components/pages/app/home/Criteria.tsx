import WomanHoldingChart from 'assets/images/woman-holding-chart.png';
import Button from 'components/button';

const Criteria = () => {
  return (
    <div className="border-t border-t-solid border-t-white/[0.18] pt-16 pb-20">
      <div className="mx-14">
        <div className="max-w-6xl mx-auto flex flex-col lgMd:flex-row items-center gap-24">
          <div className="w-full lgMd:w-1/2">
            <img src={WomanHoldingChart} alt="WomanHoldingChart" className='scale-[1.2] mt-24' />
          </div>
          <div className="w-full lgMd:w-1/2 space-y-10 text-center lgMd:text-left">
            <div className='space-y-4'>
              <div className="-space-y-2 text-mdMd lgMd:text-lgMd">
                <h1>Judging Criteria</h1>
                <h1 className="text-primary">Key attributes</h1>
              </div>
              <div className="flex flex-col space-y-5 leading-relaxed text-smMax lgMd:text-smMd">
                <p>
                  <span className="text-primary font-bold text-base">Innovation and Creativity:</span>{' '}
                  Evaluate the uniqueness and creativity of the solution. Consider whether it
                  addresses a real-world problem in a novel way or introduces innovative features.
                </p>
                <p>
                  <span className="text-primary font-bold text-base">Functionality:</span>: Assess how well
                  the solution works. Does it perform its intended functions effectively and without
                  major issues? Judges would consider the completeness and robustness of the
                  solution.
                </p>
                <p>
                  <span className="text-primary font-bold text-base">Impact and Relevance:</span> Determine
                  the potential impact of the solution in the real world. Does it address a
                  significant problem, and is it relevant to the target audience? Judges would
                  assess the potential social, economic, or environmental benefits.
                </p>
                <p>
                  <span className="text-primary font-bold text-base">Technical Complexity:</span>: Evaluate
                  the technical sophistication of the solution. Judges would consider the complexity
                  of the code, the use of advanced technologies or algorithms, and the scalability
                  of the solution.
                </p>
                <p>
                  <span className="text-primary font-bold text-base">Adherence to Hackathon Rules:</span>:
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
