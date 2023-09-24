import { ReactComponent as Bulb } from 'assets/icons/bulb.svg';
import { Button } from '@mui/material';

interface ErrorFallback {
  message?: string;
  description?: string;
  reset?: () => void;
  buttonText?: string;
}

export default function ErrorFallback(props: ErrorFallback) {
  const { message, description, reset, buttonText = 'Try again' } = props;

  return (
    <div className="flex flex-col items-center w-full mx-auto max-w-md pt-10">
      <Bulb className="text-error" />
      {message && <p className="mt-8 font-semibold text-xl text-center">{message}</p>}
      {description && <p className="mt-4 text-gray-500 text-center">{description}</p>}
      {reset && (
        <Button className="w-full mt-8" onClick={reset}>
          {buttonText}
        </Button>
      )}
    </div>
  );
}
