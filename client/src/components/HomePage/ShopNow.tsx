import Image from 'next/image';
import metaImage from "../../assets/homePages/meta-image.jpeg"
import { FC } from 'react';


const ShopNow = ({ }) => {
    return (
        <div>
            <div>
                <p>NEW STYLES ADDED</p>
                <h1>20% OFF SELECT STYLES</h1>
                <p>Members: Sign in and use code MEMBER20 to save 20% off select styles. Exclusions apply.</p>
                <button>Shop Now</button>
            </div>
            <div>
                <Image src={metaImage} alt='meta-image'></Image>
            </div>
        </div>
    );
};

export default ShopNow;