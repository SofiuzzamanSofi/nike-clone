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
        <div className="bg-primary h-[2.25rem] my-0">
            <div className="max-w-[120rem] mx-auto border px-9 h-9 flex justify-between items-center text-xs">
                <div className="w-24 flex justify-between">
                    <button>
                        <Image src={menWithHandBall} className='bg-primary w-6 h-6' alt='men-with-hand-ball-image' />
                    </button>
                    <button>
                        <Image src={rightArrow} className='w-9 h-6' alt='right-arrow-image' />
                    </button>
                </div>
                <div className="flex justify-between font-bold">
                    <button className="px-3 py-0 hover:text-secondary">
                        Nike Refurbished
                    </button>
                    <span>|</span>
                    <button className="font-semibold px-3 py-0 hover:text-secondary">
                        Find a Store
                    </button>
                    <span>|</span>
                    <button className="font-semibold px-3 py-0 hover:text-secondary">
                        Help
                    </button>
                    <span>|</span>
                    <button className="font-semibold px-3 py-0 hover:text-secondary">
                        Join Us
                    </button>
                    <span>|</span>
                    <button className="font-semibold px-3 py-0 hover:text-secondary">
                        <span>Sign In</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpMiniNavbar;