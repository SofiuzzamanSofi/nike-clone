import { FC } from 'react';
import UpMiniNavbar from './UpMiniNavbar';
import MainNavbar from './MainNavbar';
import SliderNavbar from './SliderNavbar';
import MembershipNavbar from './MembershipNavbar';

interface indexProps {

};

const index: FC<indexProps> = ({ }) => {
    return (
        <header>
            <UpMiniNavbar />
            <MainNavbar />
            <SliderNavbar />
            <MembershipNavbar />
        </header>
    );
};

export default index;