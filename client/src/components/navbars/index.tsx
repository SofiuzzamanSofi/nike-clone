import { FC } from 'react';
import UpMiniNavbar from './UpMiniNavbar';
import MainNavbar from './MainNavbar';
import SliderNavbar from './SliderNavbar';
import Side from './Side';
import SideFlow from './SideFlow';
import MyComponent from './Si';
import dynamic from "next/dynamic";

interface indexProps {

};

const index: FC<indexProps> = ({ }) => {

    const DynamicCo = dynamic(() => import("./Si"), {
        ssr: false,
    });


    return (
        <header>
            <UpMiniNavbar />
            <MainNavbar />
            <SliderNavbar />
            <Side />
            <SideFlow />
            <DynamicCo />
        </header>
    );
};

export default index;