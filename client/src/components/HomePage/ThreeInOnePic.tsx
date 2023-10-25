import Image from 'next/image';
import threeInOne from "../../assets/homePages/three-in-one.jpeg"
import one from "../../assets/homePages/one.jpeg"
import { FC } from 'react';


const ThreeInOnePic = ({ }) => {
    return (
        <div className='my-10'>
            {/* <div>
                <p>NEW STYLES ADDED</p>
                <h1>20% OFF SELECT STYLES</h1>
                <p>Members: Sign in and use code MEMBER20 to save 20% off select styles. Exclusions apply.</p>
                <button>Shop Now</button>
            </div> */}
            {/* <div>
                <Image src={threeInOne} alt='three-in-one-image'></Image>
                <Image src={one} alt='one-image'></Image>
            </div> */}
            <div className='overflow-x-auto hidden sm:block'>
                <Image
                    src={threeInOne}
                    className='min-h-[17.25rem] min-w-full cursor-pointer'
                    alt='meta-image'
                    style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
                />
            </div>
            <div className='block sm:hidden'>
                <Image
                    src={one}
                    className='min-h-[17.25rem] cursor-pointer'
                    alt='meta-image'
                />
            </div>
        </div>
    );
};

export default ThreeInOnePic;