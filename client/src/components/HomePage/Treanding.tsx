import { FC } from 'react';
import Image from 'next/image';
import trending1 from "../../assets/homePages/trendings/ternding-1.jpeg"
import trending2 from "../../assets/homePages/trendings/ternding-2.jpeg"
import trending3 from "../../assets/homePages/trendings/ternding-3.jpeg"
import trending4 from "../../assets/homePages/trendings/ternding-4.jpeg"

interface TreandingProps {

};

const Treanding: FC<TreandingProps> = ({ }) => {
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
                    <p>Nike Leggings</p>
                </div>
            </div>
        </div>
    );
};

export default Treanding;