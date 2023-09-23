// import WomanHoldingChart from 'assets/images/woman-holding-chart.png';

const Timeline = () => {
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
    <div className="border-t border-t-solid border-t-white/[0.18] pt-16 pb-20">
      <div className="mx-14">
        <div className="max-w-6xl mx-auto flex flex-col justify-center space-y-48">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-mdMd lgMd:text-lgMd">Timeline</h1>
            <p className="max-w-[40ch]">
              Here is the breakdown of the time we anticipate using for the upcoming event.
            </p>
          </div>
          <div className="relative flex flex-col items-center space-y-14">
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 h-[calc(100%+50px)] w-1 bg-primary"></div>
            {timelines.map((timeline, index) => (
              <div key={index} className="z-10">
                <div className="flex space-x-[65px] items-center">
                  {(index + 1) % 2 !== 0 ? (
                    <>
                      <div className="space-y-2 text-right w-1/2">
                        <p className="text-primary text-mdMax font-bold">{timeline.title}</p>
                        <p className="max-w-[70ch]">{timeline.description}</p>
                      </div>
                      <div className="w-[76px] h-[76px] rounded-full bg-horizontalGradient border-[12px] border-solid border-background flex justify-center items-center text-mdMax font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="text-primary text-mdMax font-bold w-1/2">{timeline.date}</div>
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
                        <p className="max-w-[70ch]">{timeline.description}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
