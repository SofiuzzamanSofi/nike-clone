import Image from 'next/image';
import metaImage from "../../assets/homePages/meta-image.jpeg"
import metaImageMobile from "../../assets/homePages/meta-image-mobile.jpeg"
import ButtonComponent from '../share/ButtonComponent';


const ShopNow = ({ }) => {
    return (
        <div className='relative border border-black min-h-[17.25rem]'>
            <div className='absolute bottom-0 p-9 border border-red-700 z-10 hidden sm:block'>
                <p className='font-semibold pb-0'>NEW STYLES ADDED</p>

                <h1 className='sm:text-xl md:text-4xl lg:text-6xl font-bold pt-0'>20% OFF SELECT STYLES</h1>

                <p className='max-w-xs md:max-w-md py-3'>Members: Sign in and use code MEMBER20 to save 20% off select styles. Exclusions apply.</p>

                <ButtonComponent text='Shop Now' />
            </div>

            <div className='overflow-x-auto hidden sm:block'>
                <Image
                    src={metaImage}
                    className='min-h-[17.25rem] min-w-full cursor-pointer'
                    alt='meta-image'
                    style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
                />
            </div>
            <div className='block sm:hidden'>
                <Image
                    src={metaImageMobile}
                    className='min-h-[17.25rem] cursor-pointer'
                    alt='meta-image'
                />
            </div>
        </div>
    );
};

export default ShopNow;