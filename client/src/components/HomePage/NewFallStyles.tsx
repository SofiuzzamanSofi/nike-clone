import { FC } from 'react';
import Image from 'next/image';
import NikeDunkLowRetro from "../../assets/homePages/new-fall-styles/Nike Dunk Low Retro.jpeg"
import AirJordan1RetroHighOG from "../../assets/homePages/new-fall-styles/Air Jordan 1 Retro High OG.jpeg"
import AirJordan1LowOG from "../../assets/homePages/new-fall-styles/Air Jordan 1 Low OG.jpeg"
import Jordan1RetroHighOG from "../../assets/homePages/new-fall-styles/Jordan 1 Retro High OG.jpeg"
import NikeDunkLowBlue from "../../assets/homePages/new-fall-styles/Nike Dunk Low Blue.jpeg"
import NikeDunkLowAsh from "../../assets/homePages/new-fall-styles/Nike Dunk Low Ash.jpeg"
import NikeDunkLowMember from "../../assets/homePages/new-fall-styles/Nike Dunk Low Member.jpeg"
import NikeV2KRunMember from "../../assets/homePages/new-fall-styles/Nike V2K Run Member.jpeg"



const NewFallStyles = ({ }) => {
    return (
        <div>
            <div>
                <h1>Shop by Sport</h1>
                <div>
                    <button>left arrow</button>
                    <button>right arrow</button>
                </div>
            </div>
            <div id="pic-cart-div">
                <div>
                    <Image src={NikeDunkLowRetro} alt='Nike-Dunk-Low-Retro-image'></Image>
                    <div>
                        <div>
                            <p>Nike Dunk Low Retro</p> <p>$115</p>
                        </div>
                        <div>
                            Men's Shoes
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={AirJordan1RetroHighOG} alt='Air-Jordan-1-Retro-High-OG-image'></Image>
                    <div>
                        <div>
                            <p>Air Jordan 1 Retro High OG</p> <p>$180</p>
                        </div>
                        <div>
                            Men's Shoes
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={AirJordan1LowOG} alt='Air-Jordan-1-LowOG-image'></Image>
                    <div>
                        <div>
                            <p>Air Jordan 1 Low OG</p> <p>$140</p>
                        </div>
                        <div>
                            Shoes
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={Jordan1RetroHighOG} alt='Jordan-1-Retro-High-OG-image'></Image>
                    <div>
                        <div>
                            <p>Jordan 1 Retro High OG</p> <p>$85</p>
                        </div>
                        <div>
                            Little Kid's Shoes
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={Jordan1RetroHighOG} alt='Jordan-1-Retro-High-OG-image'></Image>
                    <div>
                        <div>
                            <p>Jordan 1 Retro High OG</p> <p>$70</p>
                        </div>
                        <div>
                            Baby/Toddler Shoes
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={NikeDunkLowBlue} alt='Nike-Dunk-Low-Blue-image'></Image>
                    <div>
                        <div>
                            <p>Nike Dunk Low</p> <p>$90</p>
                        </div>
                        <div>
                            Big Kid's Shoes
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={NikeDunkLowAsh} alt='Nike-Dunk-Low-Ash-image'></Image>
                    <div>
                        <div>
                            <p>Nike Dunk Low</p> <p>$90</p>
                        </div>
                        <div>
                            Big Kid's Shoes
                        </div>
                    </div>
                </div>
                <div className='only-member-access-hover-lock-and-write-show'>
                    <Image src={NikeDunkLowMember} alt='Nike-Dunk-Low-Member-image'></Image>
                    <div>
                        <div>
                            <div>
                                <p>Member Access</p>
                                <p>Nike Dunk Low</p>
                            </div> <p>$125</p>
                        </div>
                        <div>
                            Women's Shoes
                        </div>
                    </div>
                </div>
                <div className='only-member-access-hover-lock-and-write-show'>
                    <Image src={NikeV2KRunMember} alt='Nike-V2K-Run-Member-image'></Image>
                    <div>
                        <div>
                            <p>Member Access</p>
                            <p>Nike V2K Run</p>
                        </div> <p>$110</p>
                    </div>
                    <div>
                        Women's Shoes
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NewFallStyles;