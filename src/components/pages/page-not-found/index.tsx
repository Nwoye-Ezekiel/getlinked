import animations from 'assets/animations/index.json';
import { Player } from '@lottiefiles/react-lottie-player';

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen -mt-[100px] lg:-mt-[125px]">
      <Player src={animations['alert']} className="-mb-3 -mt-16 w-72" autoplay loop />
      <h1 className="text-mdMax lg:text-lg">Page Not Found!</h1>
    </div>
  );
};

export default PageNotFound;
