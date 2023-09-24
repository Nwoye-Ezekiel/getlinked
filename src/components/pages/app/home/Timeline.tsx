// import WomanHoldingChart from 'assets/images/woman-holding-chart.png';
import { useMediaQuery } from '@mui/material';

const Timeline = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const timelines = [
    {
      title: 'Hackathon Announcement',
      description:
        'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register',
      date: 'November 18, 2023',
    },
    {
      title: 'Teams Registration begins',
      description:
        'Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register',
      date: 'November 18, 2023',
    },
    {
      title: 'Teams Registration ends',
      description: 'Interested Participants are no longer Allowed to register',
      date: 'November 18, 2023',
    },
    {
      title: 'Announcement of the accepted teams and ideas',
      description:
        'All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced',
      date: 'November 18, 2023',
    },
    {
      title: 'Getlinked Hackathon 1.0 Offically Begins',
      description:
        'Accepted teams can now proceed to build their ground breaking skill driven solutions',
      date: 'November 18, 2023',
    },
    {
      title: 'Demo Day',
      description:
        'Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day',
      date: 'November 18, 2023',
    },
  ];

  return (
    <div id="timeline" className="border-t border-t-solid border-t-white/[0.18] lg:pt-6 lg:pb-10">
      <div className="m-12">
        <div className="max-w-tablet lg:max-w-6xl mx-auto flex flex-col justify-center space-y-14 lg:space-y-40">
          <div className="flex flex-col justify-center items-center text-center space-y-3 lg:space-y-4">
            <h1 className="text-mdMd lg:text-lgMd">Timeline</h1>
            <p className="text-smMd lg:text-base max-w-[40ch] leading-loose">
              Here is the breakdown of the time we anticipate using for the upcoming event.
            </p>
          </div>
          <div className="relative flex flex-col lg:items-center space-y-5 lg:space-y-14">
            {isDesktop && (
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
            )}
            {timelines.map((timeline, index) => (
              <div key={index} className="z-10">
                {!isDesktop ? (
                  <div className="flex space-x-2 ml-7">
                    <div className="relative flex flex-col justify-between space-y-1 pb-2.5 min-h-[120px]">
                      <div className="absolute h-[calc(100%-10px)] bottom-0 -left-5 transform -translate-x-1/2 w-0.5 bg-primary"></div>
                      <div className="absolute -left-10 bottom-0 w-10 h-10 rounded-full bg-horizontalGradient border-8 border-solid border-background flex justify-center items-center text-xs font-bold flex-shrink-0 z-10">
                        {index + 1}
                      </div>
                      <div className="space-y-1">
                        <p className="text-primary text-xs font-bold">{timeline.title}</p>
                        <p className="text-xs leading-5">{timeline.description}</p>
                      </div>
                      <p className="text-primary text-xs font-bold">{timeline.date}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex space-x-[65px] items-center">
                    {(index + 1) % 2 !== 0 ? (
                      <>
                        <div className="space-y-2 text-right w-1/2">
                          <p className="text-primary text-mdMax font-bold">{timeline.title}</p>
                          <p className="max-w-[70ch] leading-loose">{timeline.description}</p>
                        </div>
                        <div className="w-[76px] h-[76px] rounded-full bg-horizontalGradient border-[12px] border-solid border-background flex justify-center items-center text-mdMax font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="text-primary text-mdMax font-bold w-1/2">
                          {timeline.date}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-primary text-mdMax font-bold w-1/2 text-right">
                          {timeline.date}
                        </div>
                        <div className="w-[76px] h-[76px] rounded-full bg-horizontalGradient border-[12px] border-solid border-background flex justify-center items-center text-mdMax font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="space-y-2 w-1/2">
                          <p className="text-primary text-mdMax font-bold">{timeline.title}</p>
                          <p className="max-w-[70ch] leading-loose">{timeline.description}</p>
                        </div>
                      </>
                    )}
                  </div>
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
