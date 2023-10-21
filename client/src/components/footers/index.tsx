import { FC } from 'react';
import InfoFooter from './InfoFooter';
import PrivacyFooter from './PrivacyFooter';
import LastFooter from './LastFooter';

interface indexProps {

};

const index: FC<indexProps> = ({ }) => {
    return (
        <footer>
            <InfoFooter />
            <PrivacyFooter />
            <LastFooter />
        </footer>
    );
};

export default index;