import { FC } from 'react';

type ButtonProps = {
  onClick: () => void;
  text: string;
};

const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="h-7 px-2 flex justify-center items-center rounded-md bg-primary hover:bg-blue-600 text-white text-sm"
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
