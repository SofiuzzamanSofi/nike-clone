"use client"

import { useEffect } from "react";
// Initialization for ES Users
import {
    Carousel,
    initTE,
} from "tw-elements";




const MyComponent = () => {
    useEffect(() => {
        // const init = async () => {
        //     const { Datepicker, Input, initTE } = await import("tw-elements");

        //     const myInput = new Input(document.getElementById("myDatepicker"));
        //     const options = {
        //         format: "dd-mm-yyyy",
        //     };
        //     const myDatepicker = new Datepicker(
        //         document.getElementById("myDatepicker"),
        //         options
        //     );
        // }
        // init();
    }, []);

    initTE({ Carousel });

    return (
        <div
            id="carouselExampleSlidesOnly"
            className="relative"
            data-te-carousel-init
            data-te-ride="carousel">

            <div
                className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">

                <div
                    className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                    data-te-carousel-active>
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                        className="block w-full"
                        alt="Wild Landscape" />
                </div>

                <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item>
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                        className="block w-full"
                        alt="Camera" />
                </div>

                <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item>
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                        className="block w-full"
                        alt="Exotic Fruits" />
                </div>
            </div>
        </div>
    );
};

export default MyComponent;