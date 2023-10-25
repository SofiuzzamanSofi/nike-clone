import { FC } from 'react';

interface ButtonComponentProps {
    text: string
};

const ButtonComponent: FC<ButtonComponentProps> = ({ text }) => {
    return (
        <button className='font-semibold rounded-full bg-black text-white px-4 py-1'>
            {text}
        </button>
    );
};

export default ButtonComponent;