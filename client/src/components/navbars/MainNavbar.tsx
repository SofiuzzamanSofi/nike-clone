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
        <div
            className='max-w-[120rem] mx-auto px-9 pt-1 h-[3.75rem] border border-black flex justify-between items-center '
        >
            <div>
                <button>
                    <Image src={nikeNavbarLogo} className='border h-[3.6875rem] w-[6rem] text-black' alt='nike-navbar-logo-image' />
                </button>
            </div>
            <div className='font-bold flex gap-6 h-12 border overflow-hidden'>
                <button className='border-b-2 border-white hover:border-black text-[#111]'>
                    New & Featured
                </button>
                <button className='border-b-2 border-white hover:border-black'>
                    Men
                </button>
                <button className='border-b-2 border-white hover:border-black'>
                    Women
                </button>
                <button className='border-b-2 border-white hover:border-black'>
                    Kids
                </button>
            </div>
            <div className=' flex justify-end gap-3 border'>
                <div className='relative w-[11.25rem] h-10'>
                    <button className='px-2 py-1.5 bg-primary hover:bg-[#E5E5E5] rounded-full absolute top-0.5 left-0.5'>
                        <Image src={searchLogo} className='w-6 h-6' alt='search-logo-image' />
                    </button>
                    <input type="text" className='w-[11.25rem] h-10 px-12 bg-primary hover:bg-[#E5E5E5]  font-semibold rounded-full focus:outline-none' placeholder='Search' />
                </div>
                <button className='h-9 w-9 border border-white p-1'>
                    <Image src={favouriteLogo} className='w-6 h-6' alt='favourite-logo-image' />
                </button>
                <button className='h-9 w-9 border border-white p-1'>
                    <Image src={bagLogo} className='w-6 h-6' alt='bag-logo-image' />
                </button>
            </div>
        </div>
    );
};
export default MainNavbar;