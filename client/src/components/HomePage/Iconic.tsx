import { FC } from 'react';
import Image from 'next/image';
import trending1 from "../../assets/homePages/trendings/ternding-1.jpeg"
import trending2 from "../../assets/homePages/trendings/ternding-2.jpeg"
import trending3 from "../../assets/homePages/trendings/ternding-3.jpeg"
import trending4 from "../../assets/homePages/trendings/ternding-4.jpeg"

const Iconic = ({ }) => {
    return (
        <div>
            <div>
                <h1>Always Iconic </h1>
                <div>
                    <div>
                        <p>3/8</p>
                    </div>
                    <div>
                        <button>left arrow</button>
                        <button>right arrow</button>
                    </div>
                </div>
            </div>
            <div id="pic-cart-div">
                <div>
                    <Image src={trending1} alt='trending-image-1'></Image>
                </div>
            </div>
        </div>
    );
};

export default Iconic;