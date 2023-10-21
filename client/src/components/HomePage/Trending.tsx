import { FC } from 'react';
import Image from 'next/image';
import trending1 from "../../assets/homePages/trendings/ternding-1.jpeg"
import trending2 from "../../assets/homePages/trendings/ternding-2.jpeg"
import trending3 from "../../assets/homePages/trendings/ternding-3.jpeg"
import trending4 from "../../assets/homePages/trendings/ternding-4.jpeg"

const Trending = ({ }) => {
    return (
        <div>
            <div>
                <h1>Trending</h1>
                <div>
                    <button>left arrow</button>
                    <button>right arrow</button>
                </div>
            </div>
            <div id="pic-cart-div">
                <div>
                    <Image src={trending1} alt='trending-image-1'></Image>
                    <p>Just in: Nike Vomero 17</p>
                </div>
                <div>
                    <Image src={trending2} alt='trending-image-2'></Image>
                    <p>Nike Leggings</p>
                </div>
                <div>
                    <Image src={trending3} alt='trending-image-3'></Image>
                    <p>Air Jordan 1 Mid SE Craft</p>
                </div>
                <div>
                    <Image src={trending4} alt='trending-image-4'></Image>
                    <p>HBCU Varsity Collection</p>
                </div>
            </div>
        </div>
    );
};

export default Trending;