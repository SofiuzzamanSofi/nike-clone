import { FC } from 'react';

interface LastFooterProps {

};

const LastFooter: FC<LastFooterProps> = ({ }) => {

    const year = new Date().getFullYear();


    return (
        <div>
            <div>
                <p><span>location icon</span><span>United States</span></p>
                <p><span>© {year} Nike, </span><span>Inc. All Rights Reserved</span></p>
            </div>
            <div>
                <p><span>CA </span><span>Supply Chains Act</span></p>
            </div>
        </div>
    );
};

export default LastFooter;