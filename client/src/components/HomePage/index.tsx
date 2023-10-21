import { FC } from 'react';
import ShopNow from './ShopNow';
import ThreeInOnePic from './ThreeInOnePic';
import NewArrivals from './NewArrivals';
import Trending from './Trending';
import Featured from './Featured';
import Iconic from './Iconic';
import ShopBySports from './ShopBySports';
import NewFallStyles from './NewFallStyles';

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
            <Iconic />
            <ShopBySports />
            <NewFallStyles />
        </section>
    );
};

export default index;