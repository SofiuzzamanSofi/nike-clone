import { FC } from 'react';
import Image from 'next/image';
import featured1 from "../../assets/homePages/featured/fetured-1.jpeg"
import featured2 from "../../assets/homePages/featured/fetured-2.jpeg"


const MenuLists = ({ }) => {
    return (
        <div>
            <div>
                <div>
                    <p>Featured</p>
                </div>
            </div>
            <div>
                <div>
                    <p>Shoes</p>
                </div>
            </div>
            <div>
                <div>
                    <p>Clothing</p>
                </div>
            </div>
            <div>
                <div>
                    <p>Kids</p>
                </div>
            </div>
        </div>
    );
};

export default MenuLists;