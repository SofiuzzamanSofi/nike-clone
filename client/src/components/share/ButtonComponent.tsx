import { FC } from 'react';

interface ButtonProps {
    text: string
};

const Button: FC<ButtonProps> = ({ text }) => {
    return (
        <button className='font-semibold rounded-full bg-black text-white px-3 py-1'>
            {text}
        </button>
    );
};

export default Button;