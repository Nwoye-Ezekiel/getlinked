import { CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center h-screen -mt-[68px] lg:-mt-[125px] bg-background`}
    >
      <CircularProgress />
    </div>
  );
};

export default Loader;
