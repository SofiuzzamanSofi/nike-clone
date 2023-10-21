import { FC } from 'react';

interface SliderNavbarProps {

};

const SliderNavbar: FC<SliderNavbarProps> = ({ }) => {
    return (
        <div>
            <div>
                <p>New Styles Added: 20% Off Select Styles</p>
                <p>Sign in and use code MEMBER20 at checkout.</p>
            </div>
            <div>
                <p>New Arrivals 🍂</p>
                <p>Shop All</p>
            </div>
            <div>
                <p>Members: Free Shipping on Orders $50+</p>
                <p>Join Now</p>
            </div>
            <div>
                <p>Why Wait? Try Store Pickup</p>
                <p>Buy online and find a store near you for pick up in less than 2 hours. Shop now.</p>
            </div>
        </div>
    );
};

export default SliderNavbar;