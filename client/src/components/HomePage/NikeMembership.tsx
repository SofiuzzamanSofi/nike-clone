import { FC } from 'react';
import Image from 'next/image';
import nikeMembership1 from "../../assets/homePages/nike-membership/10017.jpg"
import nikeMembership2 from "../../assets/homePages/nike-membership/10018.jpg"
import nikeMembership3 from "../../assets/homePages/nike-membership/10019.jpg"
import nikeMembership4 from "../../assets/homePages/nike-membership/10020.jpg"
import nikeMembership5 from "../../assets/homePages/nike-membership/10021.jpg"
import nikeMembership6 from "../../assets/homePages/nike-membership/10022.jpg"




const NikeMembership = ({ }) => {
    return (
        <div>
            <div>
                <h1>Nike Membership</h1>
                <div>
                    <button>left arrow</button>
                    <button>right arrow</button>
                </div>
            </div>
            <div id="pic-cart-div">
                <div>
                    <Image src={nikeMembership1} alt="nike-membership-image"></Image>
                    <div>
                        <div>
                            <p>The Best of Nike</p>
                            <p>It's Better as a Mmeber</p>
                        </div>
                        <div>
                            <button>Sign Up</button>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={nikeMembership2} alt="nike-membership-image"></Image>
                    <div>
                        <div>
                            <p>Member Product</p>
                            <p>Your Exclusive Access</p>
                        </div>
                        <div>
                            <button>Shop</button>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={nikeMembership2} alt="nike-membership-image"></Image>
                    <div>
                        <div>
                            <p>Member Rewards</p>
                            <p>How We Say Thank You</p>
                        </div>
                        <div>
                            <button>Celebrate</button>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={nikeMembership2} alt="nike-membership-image"></Image>
                    <div>
                        <div>
                            <p>Sports & Wellness Apps</p>
                            <p>Movement Where You're At</p>
                        </div>
                        <div>
                            <button>Move</button>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={nikeMembership2} alt="nike-membership-image"></Image>
                    <div>
                        <div>
                            <p>Nike By You</p>
                            <p>Your Customization Service</p>
                        </div>
                        <div>
                            <button>Customize</button>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={nikeMembership2} alt="nike-membership-image"></Image>
                    <div>
                        <div>
                            <p>SNKRS</p>
                            <p>Your Ultimate Sneaker Community</p>
                        </div>
                        <div>
                            <button>Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NikeMembership;