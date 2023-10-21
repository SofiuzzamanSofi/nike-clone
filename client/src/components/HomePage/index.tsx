import { FC } from 'react';
import ShopNow from './ShopNow';
import ThreeInOnePic from './ThreeInOnePic';
import NewArrivals from './NewArrivals';

interface indexProps {

};

const index: FC<indexProps> = ({ }) => {
    return (
        <section>
            <ShopNow />
            <ThreeInOnePic />
            <NewArrivals />
        </section>
    );
};

export default index;