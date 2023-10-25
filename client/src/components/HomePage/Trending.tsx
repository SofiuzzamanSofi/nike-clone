import { FC } from 'react';
import Image from 'next/image';
import trending1 from "../../assets/homePages/trendings/ternding-1.jpeg"
import trending2 from "../../assets/homePages/trendings/ternding-2.jpeg"
import trending3 from "../../assets/homePages/trendings/ternding-3.jpeg"
import trending4 from "../../assets/homePages/trendings/ternding-4.jpeg"
import leftArrow from "../../assets/icons/left-arrow-svgrepo-com.svg"
import rightArrow from "../../assets/icons/right-arrow-svgrepo-com.svg"


const Trending = ({ }) => {
    return (
        <div className=' mx-9 grid gap-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-4xl lg:text-6xl font-bold'>Trending</h1>
                <div className='flex gap-3 lg:gap-6'>
                    <Image
                        src={leftArrow}
                        className='w-12 p-4 font-semibold bg-primary rounded-full cursor-pointer border'
                        alt='left-arrow-image'
                        style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
                    />
                    <Image
                        src={rightArrow}
                        className='w-12 p-4 font-semibold bg-primary rounded-full cursor-pointer border'
                        alt='right-arrow-image'
                    />
                </div>
            </div>
            <div
                id="pic-cart-div"
                className='relative border overflow-x-auto'
            >
                <div className='flex gap-3 '>
                    <div>
                        <Image src={trending1} alt='trending-image-1'></Image>
                        <p className='py-2 font-semibold'>Just in: Nike Vomero 17</p>
                    </div>
                    <div>
                        <Image src={trending2} alt='trending-image-2'></Image>
                        <p className='py-2 font-semibold'>Nike Leggings</p>
                    </div>
                    <div>
                        <Image src={trending3} alt='trending-image-3'></Image>
                        <p className='py-2 font-semibold'>Air Jordan 1 Mid SE Craft</p>
                    </div>
                    <div>
                        <Image src={trending4} alt='trending-image-4'></Image>
                        <p className='py-2 font-semibold'>HBCU Varsity Collection</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;