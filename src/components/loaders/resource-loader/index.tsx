const ResourceLoader = ({ value }: { value: number }) => {
  return (
    <div className=" flex flex-col items-center justify-center h-screen bg-background">
      <div className="flex flex-col items-center space-y-7">
        <div className="relative h-2 w-[300px] bg-[#d634fe26] rounded-lg">
          <div
            style={{
              width: `${value}%`,
            }}
            className="absolute w-0 h-full rounded-lg bg-horizontalGradient transition-width duration-500 ease-in-out progress-fill"
          >
            <div className="absolute top-0 left-0 h-full w-full rounded-lg bg-horizontalGradient blur-[1px]"></div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-white/[.4] text-sm">Loading Resources</p>
          <h3 className="text-white text-lg">{`${value.toFixed(2)}%`}</h3>
        </div>
      </div>
    </div>
  );
};

export default ResourceLoader;
