import Image from "next/image";
import rightArrow from "../../assets/navbars/right-arrow.png"
import menWithHandBall from "../../assets/navbars/men-with-hand-ball.png"

import { FC } from 'react';

interface UpMiniNavbarProps {

};

const UpMiniNavbar: FC<UpMiniNavbarProps> = ({ }) => {
    return (
        <div>
            <div className="max-w-[120rem] mx-auto border">
                <div>
                    <button>
                        <Image src={rightArrow} className='h-full w-full' alt='right-arrow-image' />
                    </button>
                    <button>
                        <Image src={menWithHandBall} className='h-full w-full' alt='men-with-hand-ball-image' />
                    </button>
                </div>
                <div>
                    <button className="bg-red-700 text-white">Nike Refurbished</button>
                    <button>Find a Store</button>
                    <button>Help</button>
                    <button>Join Us</button>
                    <button>Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default UpMiniNavbar;