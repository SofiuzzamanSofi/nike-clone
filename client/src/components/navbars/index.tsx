import { FC } from 'react';
import UpMiniNavbar from './UpMiniNavbar';
import MainNavbar from './MainNavbar';
import SliderNavbar from './SliderNavbar';

interface indexProps {

};

const index: FC<indexProps> = ({ }) => {
    return (
        <header>
            <UpMiniNavbar />
            <MainNavbar />
            <SliderNavbar />
        </header>
    );
};

export default index;