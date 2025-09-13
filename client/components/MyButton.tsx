"use client";

interface ButtonProps  {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
}

const MyButton = ({children, ...props}: ButtonProps) => {
  return (
    <button {...props} className="p-2 bg-gray-400 text-base text-black-100 cursor-pointer">
        {children}
    </button>
  )
};

export default MyButton;