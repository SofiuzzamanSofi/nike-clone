import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface InfoFooterProps {

};

const InfoFooter: FC<InfoFooterProps> = ({ }) => {

    const giftCardsLinks = [
        "GIFT CARDS",
        "PROMOTIONS",
        "FIND A STORE",
        "BECOME A MEMBER",
        "NIKE JOURNAL",
        "SEND US FEEDBACK",
    ];
    const getHelpLinks = [
        "GIFT CARDS",
        "PROMOTIONS",
        "FIND A STORE",
        "BECOME A MEMBER",
        "NIKE JOURNAL",
        "SEND US FEEDBACK",
        "GET HELP",
        "Order Status",
        "Shipping and Delivery",
        "Returns",
        "Order Cancellation",
        "Payment Options",
        "Gift Card Balance",
        "Contact Us",
    ];
    const aboutLinks = [
        "GIFT CARDS",
        "PROMOTIONS",
        "FIND A STORE",
        "BECOME A MEMBER",
        "NIKE JOURNAL",
        "SEND US FEEDBACK",
        "GET HELP",
        "Order Status",
        "Shipping and Delivery",
        "Returns",
        "Order Cancellation",
        "Payment Options",
        "Gift Card Balance",
        "Contact Us",
        "ABOUT NIKE",
        "News",
        "Careers",
        "Investors",
        "Purpose",
        "Sustainability",
    ];


    return (
        <div>
            <div>
                <div>
                    {
                        giftCardsLinks.map((link, index) => (
                            <Link key={index} href={""} >{link}</Link>
                        ))
                    }
                </div>
                <div>
                    {
                        getHelpLinks.map((link, index) => (
                            <Link key={index} href={""} >{link}</Link>
                        ))
                    }
                </div>
                <div>
                    {
                        aboutLinks.map((link, index) => (
                            <Link key={index} href={""} >{link}</Link>
                        ))
                    }
                </div>
            </div>
            <div>
                <Image src={""} alt='footer-two-color-image'></Image>
                <Image src={""} alt='footer-two-color-image'></Image>
                <Image src={""} alt='footer-two-color-image'></Image>
                <Image src={""} alt='footer-two-color-image'></Image>
            </div>
        </div>
    );
};

export default InfoFooter;