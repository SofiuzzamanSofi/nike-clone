import { FC } from 'react';
import Link from 'next/link';


const MenuLists = ({ }) => {

    const featuredLink = [
        "Air Force 1",
        " Jordan 1",
        "    Metcon",
        " Air Max 270",
        "  Air Max 97",
        "   Air Max 90",
        "    Blazer",
        "  Pegasus",
    ];
    const shoesLink = [
        "    All Shoes",
        " Jordan Shoes",
        " Running Shoes",
        " Basketball Shoes",
        "  Tennis Shoes",
        "  Training Shoes",
        "   Custom Shoes",
        " Sale Shoes",
        "  Soccer Cleats",
    ];
    const clothingLink = [
        " All Clothing",
        " Tops & T-Shirts",
        " Shorts",
        " Hoodies & Pullovers",
        " Joggers & Sweatpants",
        "  Sports Bras",
        " Pants & Tights",
        "   Socks",
        "  Yoga",
        " NikeLab",
        "  Plus Size",
        "  Big & Tall",
        "Sale Clothing",
    ];
    const kidsLink = [
        " Infant & Toddler Shoes",
        "Kids Shoes",
        "Kids Basketball Shoes",
        " Kids Running Shoes",
        " Kids Jordan Shoes",
        "  Kids Clothing",
        "  Kids Backpacks",
        " Kids Socks",
        " Kids Sale",
    ];

    return (
        <div>
            <div>
                <div>
                    <p>Featured</p>
                    {
                        featuredLink.map((link, index) => (
                            <Link key={index} href={""} >{link}</Link>
                        ))
                    }
                </div>
            </div>
            <div>
                <div>
                    <p>Shoes</p>
                    {
                        shoesLink.map((link, index) => (
                            <Link key={index} href={""} >{link}</Link>
                        ))
                    }
                </div>
            </div>
            <div>
                <div>
                    <p>Clothing</p>
                    {
                        clothingLink.map((link, index) => (
                            <Link key={index} href={""} >{link}</Link>
                        ))
                    }
                </div>
            </div>
            <div>
                <div>
                    <p>Kids</p>
                    {
                        kidsLink.map((link, index) => (
                            <Link key={index} href={""} >{link}</Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MenuLists;