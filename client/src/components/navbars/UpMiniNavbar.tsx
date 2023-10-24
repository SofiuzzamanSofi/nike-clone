"use client";

import Image from "next/image";
import rightArrow from "../../assets/navbars/right-arrow.png"
import menWithHandBall from "../../assets/navbars/men-with-hand-ball.png"

import { FC } from 'react';

interface UpMiniNavbarProps {

};

const UpMiniNavbar: FC<UpMiniNavbarProps> = ({ }) => {


    // const funn = async () => {
    //     console.log('hitted.:');
    //     const data = await fetch('https://services.promostandards.org/WebServiceRepository/WebServiceRepository.svc/json/companies');
    //     const daraFromFetch = await data.json();
    //     console.log('daraFromFetch:', daraFromFetch);
    // };

    // funn();

    return (
        <div className="bg-primary">
            <div className="max-w-[120rem] mx-auto border flex justify-between items-center">
                <div>
                    <button>
                        <Image src={menWithHandBall} className='bg-primary h-10 w-8' alt='men-with-hand-ball-image' />
                    </button>
                    <button>
                        <Image src={rightArrow} className='h-full w-full' alt='right-arrow-image' />
                    </button>
                </div>
                <div className="">
                    <button>Nike Refurbished</button>
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