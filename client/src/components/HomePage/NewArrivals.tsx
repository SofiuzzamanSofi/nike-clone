import { FC } from 'react';

interface NewArrivalsProps {

};

const NewArrivals: FC<NewArrivalsProps> = ({ }) => {
    return (
        <div>
            <h1>NEW ARRIVALS</h1>
            <p>Featuring the Air Force 1 Pro Tech.</p>
            <button>Shop</button>
        </div>
    );
};

export default NewArrivals;