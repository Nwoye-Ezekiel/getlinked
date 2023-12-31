import { ReactNode } from 'react';

interface ButtonProps {
  disabled?: boolean;
  children: ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

const Button = ({
  onClick,
  children,
  disabled,
  fullWidth,
  type = 'button',
  size = 'medium',
  variant = 'primary',
}: ButtonProps) => {
  const buttonSizes = {
    small: { width: 97, height: 32 },
    medium: { width: 152, height: 47 },
    large: { width: 172, height: 53 },
  };

  const buttonStyle = {
    width: fullWidth
      ? '100%'
      : variant === 'primary'
      ? `${buttonSizes[size].width}px`
      : `${buttonSizes[size].width - 4}px`,
    height:
      variant === 'primary' ? `${buttonSizes[size].height}px` : `${buttonSizes[size].height - 4}px`,
  };

  return (
    <button
      disabled={disabled}
      onClick={() => onClick?.()}
      type={type}
      className={`rounded transition-all duration-300 ${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      } ${fullWidth ? 'w-full' : ''} ${
        variant === 'primary'
          ? 'bg-[100%_auto] bg-horizontalGradient hover:bg-[300%_auto]'
          : 'bg-[auto_100%] bg-verticalGradient hover:bg-[auto_300%]'
      } `}
    >
      <div
        style={buttonStyle}
        className={`flex justify-center items-center text-center rounded ${
          variant === 'secondary' ? 'bg-background m-0.5' : ''
        }`}
      >
        <span
          className={`font-medium text-white ${
            size === 'small' ? 'text-xs' : size === 'medium' ? 'text-smMd' : 'text-base'
          }`}
        >
          {children}
        </span>
      </div>
    </button>
  );
};

export default Button;
