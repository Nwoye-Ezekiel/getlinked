import { CircularProgress } from '@mui/material';

const Loader = ({ headerAdjust = false }: { headerAdjust?: boolean }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${
        headerAdjust ? '-mt-[68px] lg:-mt-[125px]' : ''
      } bg-background`}
    >
      <CircularProgress />
    </div>
  );
};

export default Loader;
