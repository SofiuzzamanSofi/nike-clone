import { FC } from 'react';
import Image from 'next/image';
import footerTwoColor from "../../assets/footer/footer-two-color.png"

interface PrivacyFooterProps {

};

const PrivacyFooter: FC<PrivacyFooterProps> = ({ }) => {

    const guidesHoverLinks = [
        " Nike Adapt",
        " Nike Air",
        " Nike Air Force 1",
        " Nike Air Max",
        " Nike FlyEase",
        " Nike Flyknit",
        " Nike Flyleather",
        " Nike Free",
        " Nike Joyride",
        " Nike React",
        " Nike Vaporfly",
        " Nike ZoomX",
        " Space Hippie",
    ];

    // {
    //     guidesHoverLinks.map((link, index) => (
    //         <Link key={index} href={""} >{link}</Link>
    //     ))
    // }

    return (
        <div>
            <div>
                <p><span>Guides</span></p>
                <p><span>Terms of Sale</span></p>
                <p><span>Terms of Use</span></p>
                <p><span>Nike Privacy Policy</span></p>
                <p><span><Image src={footerTwoColor} alt='footer-two-color-image'></Image> </span><span>Your Privacy ChoicesYour Privacy Choices</span></p>
            </div>
        </div>
    );
};

export default PrivacyFooter;