import { FC } from 'react';
import Image from 'next/image';
import basketball from "../../assets/homePages/shop-by-sport/basketball.jpg"
import running from "../../assets/homePages/shop-by-sport/running.jpg"
import golf from "../../assets/homePages/shop-by-sport/golf.jpg"
import football from "../../assets/homePages/shop-by-sport/football.jpg"
import baseball from "../../assets/homePages/shop-by-sport/baseball.jpg"
import soccer from "../../assets/homePages/shop-by-sport/soccer.jpg"


const ShopBySports = ({ }) => {
    return (
        <div>
            <div>
                <h1>Shop by Sport</h1>
                <div>
                    <button>left arrow</button>
                    <button>right arrow</button>
                </div>
            </div>
            <div id="pic-cart-div">
                <div>
                    <Image src={basketball} alt='basketball-image'></Image>
                    <p>Nike Basketball</p>
                    <p>Styles made for your game.</p>
                    <button>Shop</button>
                </div>
                <div>
                    <Image src={running} alt='running-image'></Image>
                    <p>Nike Running</p>
                    <p>Everything you'll need for every mile.</p>
                    <button>Shop</button>
                </div>
                <div>
                    <Image src={golf} alt='golf-image'></Image>
                    <p>Nike Golf</p>
                    <p>Conquer any course in style.</p>
                    <button>Shop</button>
                </div>
                <div>
                    <Image src={football} alt='football-image'></Image>
                    <p>Nike Football</p>
                    <p>Command the field in game-ready gear.</p>
                    <button>Shop</button>
                </div>
                <div>
                    <Image src={baseball} alt='baseball-image'></Image>
                    <p>Nike Baseball</p>
                    <p>Step up to the plate in style.</p>
                    <button>Shop</button>
                </div>
                <div>
                    <Image src={soccer} alt='soccer-image'></Image>
                    <p>Nike Soccer</p>
                    <p>Bring mad style to the pitch with the latest gear.</p>
                    <button>Shop</button>
                </div>
            </div>
        </div>
    );
};

export default ShopBySports;