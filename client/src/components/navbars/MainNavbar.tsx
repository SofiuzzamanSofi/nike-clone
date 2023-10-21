import { FC } from 'react';
import Image from "next/image"
import nikeNavbarLogo from "../../assets/navbars/nike-navbar-logo.svg"
import favoritesLogo from "../../assets/navbars/favorites-logo.svg"
import cartLogo from "../../assets/navbars/cart-logo.svg"

interface MainNavbarProps {

};

const MainNavbar: FC<MainNavbarProps> = ({ }) => {
    return (
        <div>
            <div>
                <button>
                    <Image src={nikeNavbarLogo} className='h-full w-full' alt='nike-navbar-logo-image' />
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
                        Search Bar
                    </div>
                    <button>
                        <Image src={favoritesLogo} className='h-full w-full' alt='favorites-logo-image' />
                    </button>
                    <button>
                        <Image src={cartLogo} className='h-full w-full' alt='cart-logo-image' />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default MainNavbar;