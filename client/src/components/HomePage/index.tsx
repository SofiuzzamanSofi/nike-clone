import { FC } from 'react';
import ShopNow from './ShopNow';
import ThreeInOnePic from './ThreeInOnePic';
import NewArrivals from './NewArrivals';
import Trending from './Trending';
import Featured from './Featured';

interface indexProps {

};

const index: FC<indexProps> = ({ }) => {
    return (
        <section>
            <ShopNow />
            <ThreeInOnePic />
            <NewArrivals />
            <Trending />
            <Featured />
        </section>
    );
};

export default index;