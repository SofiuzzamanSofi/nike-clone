import { FC } from 'react';
import ButtonComponent from '../share/ButtonComponent';

interface NewArrivalsProps {

};

const NewArrivals: FC<NewArrivalsProps> = ({ }) => {
    return (
        <div className='mx-9 text-center'>

            <h1 className='text-4xl lg:text-6xl font-bold pt-0'>
                NEW ARRIVALS
            </h1>

            <p className='py-3'>
                Featuring the Air Force 1 Pro Tech.
            </p>

            <ButtonComponent text='Shop' />
        </div>
    );
};

export default NewArrivals;