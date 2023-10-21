import { FC } from 'react';
import MembershipSimple from './MembershipSimple';
import PhotoGallery from './PhotoGallery';
import MetaVideo from './MetaVideo';
import UpExploreApp from './UpExploreApp';
import DownExploreApp from './DownExploreApp';
import MembershipRebone from './MembershipRebone';
import MoreBenefite from './MoreBenefite';
import MemberRewardRebone from './MemberRewardRebone';

interface indexProps {

};

const index: FC<indexProps> = ({ }) => {
    return (
        <section>
            <MemberRewardRebone />
            <MetaVideo />
            <UpExploreApp />
            <PhotoGallery />
            <DownExploreApp />
            <MembershipRebone />
            <MoreBenefite />
            <MembershipSimple />
        </section>
    );
};

export default index;