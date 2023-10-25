"use client"
import React, { FC, useState, useEffect } from 'react';

interface SliderNavbarProps { }

const SliderNavbar: FC<SliderNavbarProps> = ({ }) => {

    const [sliderId, setSliderId] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            setSliderId((prevId) => (prevId < 4 ? prevId + 1 : 1));
        }, 5000);

        // Clear the interval when the component unmounts
        return () => {
            clearInterval(timer);
        };
    }, []);

    console.log('sliderId:', sliderId);

    return (
        <div className="carousel w-full">
            {Array.from({ length: 4 }).map((_, index) => (
                <div
                    key={index}
                    className={`carousel-item relative w-full transition-transform ${sliderId === index + 1 ? 'translate-x-0' : 'translate-x-full hidden'
                        }`}
                >
                    <div className="text-center mx-auto">
                        {index === 0 && (
                            <>
                                <p>New Styles Added: 20% Off Select Styles</p>
                                <p>Sign in and use code MEMBER20 at checkout.</p>
                            </>
                        )}
                        {index === 1 && (
                            <>
                                <p>New Arrivals 🍂</p>
                                <p>Shop All</p>
                            </>
                        )}
                        {index === 2 && (
                            <>
                                <p>Members: Free Shipping on Orders $50+</p>
                                <p>Join Now</p>
                            </>
                        )}
                        {index === 3 && (
                            <>
                                <p>Why Wait? Try Store Pickup</p>
                                <p>
                                    Buy online and find a store near you for pick up in less than 2 hours. Shop now.
                                </p>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SliderNavbar;