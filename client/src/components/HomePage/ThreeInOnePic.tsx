import Image from 'next/image';
import threeInOne from "../../assets/homePages/three-in-one.jpeg"
import one from "../../assets/homePages/one.jpeg"
import { FC } from 'react';


const ThreeInOnePic = ({ }) => {
    return (
        <div>
            <div>
                <p>NEW STYLES ADDED</p>
                <h1>20% OFF SELECT STYLES</h1>
                <p>Members: Sign in and use code MEMBER20 to save 20% off select styles. Exclusions apply.</p>
                <button>Shop Now</button>
            </div>
            <div>
                <Image src={threeInOne} alt='three-in-one-image'></Image>
                <Image src={one} alt='one-image'></Image>
            </div>
        </div>
    );
};

export default ThreeInOnePic;