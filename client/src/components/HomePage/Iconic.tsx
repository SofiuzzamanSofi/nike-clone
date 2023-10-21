import { FC } from 'react';
import Image from 'next/image';
import airJordan1 from "../../assets/homePages/Iconic/air-jordan-1.jpeg"
import airForce1 from "../../assets/homePages/Iconic/air-force-1.jpeg"
import dunk from "../../assets/homePages/Iconic/dunk.jpeg"
import airMax from "../../assets/homePages/Iconic/air-max.jpg"
import leBord from "../../assets/homePages/Iconic/le-bord.jpeg"
import nikeBlazer from "../../assets/homePages/Iconic/niki-blazer.jpeg"
import pegasus from "../../assets/homePages/Iconic/pegasus.jpeg"
import metocon from "../../assets/homePages/Iconic/metocon.jpeg"


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
                    <Image src={airJordan1} alt='air-jordan-image-1'></Image>
                </div>
                <div>
                    <Image src={airForce1} alt='air-force-image-1'></Image>
                </div>
                <div>
                    <Image src={dunk} alt='dunk-image'></Image>
                </div>
                <div>
                    <Image src={airMax} alt='airMax-image'></Image>
                </div>
                <div>
                    <Image src={leBord} alt='leBord-image'></Image>
                </div>
                <div>
                    <Image src={nikeBlazer} alt='nikeBlazer-image'></Image>
                </div>
                <div>
                    <Image src={pegasus} alt='pegasus-image'></Image>
                </div>
                <div>
                    <Image src={metocon} alt='metcon-image'></Image>
                </div>
            </div>
        </div>
    );
};

export default Iconic;