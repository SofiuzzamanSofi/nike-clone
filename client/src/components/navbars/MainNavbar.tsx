import { FC } from 'react';
import Image from "next/image"
// import nikeNavbarLogo from "../../assets/navbars/nike-navbar-logo.svg"
import nikeNavbarLogo from "../../assets/navbars/nike-header-logo.png"
import searchLogo from "../../assets/navbars/search.svg"
import favouriteLogo from "../../assets/navbars/heart.svg"
import bagLogo from "../../assets/navbars/bag.svg"

interface MainNavbarProps {

};

const MainNavbar: FC<MainNavbarProps> = ({ }) => {
    return (
        <div>
            <div>
                <button>
                    <Image src={nikeNavbarLogo} className='h-full w-full text-black' alt='nike-navbar-logo-image' />
                </button>
            </div>
            <div>
                <div>
                    <button>New & Featured</button>
                    <button>Men</button>
                    <button>Women</button>
                    <button>Kids</button>
                </div>
                <div>
                    <div>
                        <Image src={searchLogo} className='h-full w-full' alt='search-logo-image' />
                        Search Bar
                    </div>
                    <button>
                        <Image src={searchLogo} className='h-full w-full' alt='search-logo-image' />
                        <Image src={favouriteLogo} className='h-full w-full' alt='favourite-logo-image' />
                    </button>
                    <button>
                        <Image src={bagLogo} className='h-full w-full' alt='bag-logo-image' />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default MainNavbar;