import { FC } from 'react';
import Image from 'next/image';
import featured1 from "../../assets/homePages/featured/fetured-1.jpeg"
import featured2 from "../../assets/homePages/featured/fetured-2.jpeg"


const Featured = ({ }) => {
    return (
        <div>
            <div>
                <div>
                    <p>By You, for Them</p>
                    <h1>The Best Custom Gifts</h1>
                    <button>Shop All Gifts</button>
                </div>
                <div>
                    <Image src={featured1} alt='featured-image-1'></Image>
                </div>
            </div>
            <div>
                <div>
                    <p>Jordan Essentials</p>
                    <h1>Defy Expectations in </h1>
                    <h1>Jordan's Latest</h1>
                    <button>Shop</button>
                </div>
                <div>
                    <Image src={featured2} alt='featured-image-2'></Image>
                </div>
            </div>

        </div>
    );
};

export default Featured;