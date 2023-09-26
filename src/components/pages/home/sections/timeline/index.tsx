import { useMediaQuery } from '@mui/material';
import AnimateOnScroll from 'components/animate-on-scroll';
import { timelines } from 'data/static/timelines';

const Timeline = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <div id="timeline" className="border-t border-t-solid border-t-white/[0.18] lg:pt-6 lg:pb-10">
      <div className="m-12">
        <div className="max-w-tablet lg:max-w-6xl mx-auto flex flex-col justify-center space-y-10 lg:space-y-32">
          <div className="flex flex-col justify-center items-center text-center space-y-3 lg:space-y-4">
            <AnimateOnScroll>
              <h1 className="text-mdMd lg:text-lgMd">Timeline</h1>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <p className="text-smMd lg:text-base max-w-[40ch] leading-loose">
                Here is the breakdown of the time we anticipate using for the upcoming event.
              </p>
            </AnimateOnScroll>
          </div>
          <div className="relative flex flex-col lg:items-center space-y-3 lg:space-y-12">
            {isDesktop && (
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 h-[calc(100%-50px)] w-1 bg-primary"></div>
            )}
            {timelines.map((timeline, index) => (
              <div key={index} className="z-10">
                {!isDesktop ? (
                  <AnimateOnScroll>
                    <div className="flex space-x-2 ml-7">
                      <div className="relative flex flex-col justify-between space-y-1 pb-2.5 min-h-[120px]">
                        <div className="absolute h-[calc(100%-10px)] bottom-0 -left-5 transform -translate-x-1/2 w-0.5 bg-primary"></div>
                        <div className="absolute -left-10 bottom-0 w-10 h-10 rounded-full bg-horizontalGradient border-8 border-solid border-background flex justify-center items-center text-smMax font-bold flex-shrink-0 z-10">
                          {index + 1}
                        </div>
                        <div className="space-y-1">
                          <p className="text-primary text-smMax font-bold">{timeline.title}</p>
                          <p className="text-smMax leading-[22px]">{timeline.description}</p>
                        </div>
                        <p className="text-primary text-smMax font-bold">{timeline.date}</p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ) : (
                  <AnimateOnScroll>
                    <div className="flex space-x-[65px] items-center">
                      {(index + 1) % 2 !== 0 ? (
                        <>
                          <div className="space-y-2 text-right w-1/2">
                            <p className="text-primary text-mdMd font-bold">{timeline.title}</p>
                            <p className="max-w-[70ch] leading-loose">{timeline.description}</p>
                          </div>
                          <div className="w-[76px] h-[76px] rounded-full bg-horizontalGradient border-[12px] border-solid border-background flex justify-center items-center text-mdMax font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <div className="text-primary text-mdMd font-bold w-1/2">
                            {timeline.date}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-primary text-mdMd font-bold w-1/2 text-right">
                            {timeline.date}
                          </div>
                          <div className="w-[76px] h-[76px] rounded-full bg-horizontalGradient border-[12px] border-solid border-background flex justify-center items-center text-mdMax font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <div className="space-y-2 w-1/2">
                            <p className="text-primary text-mdMd font-bold">{timeline.title}</p>
                            <p className="max-w-[70ch] leading-loose">{timeline.description}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </AnimateOnScroll>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
