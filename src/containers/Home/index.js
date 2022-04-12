import NavBar from '../../components/NavBar/index.jsx';
import image1 from '../../assets/images/home_image1.jpg';
import image2 from '../../assets/images/home_image2.jpg';
import image3 from '../../assets/images/home_image3.jpg';
import image4 from '../../assets/images/home_image4.jpg';
import HomeSection from './HomeSection/HomeSection.jsx';
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import { languageContext } from '../../utils/providers/languageProvider';
import React, { useContext } from 'react';

const Home = React.memo(() => {
    const { translate } = useContext(languageContext);
    return <>
        <NavBar />
        <H1 text={translate('home.h1Text')} />
        <H2 text={translate('home.h2Text')} />
        <HomeSection
            order='imageFirst'
            text={translate('home.contentForSection1')}
            src={image1}
            altForSection1={translate('home.altForSection1')}
        />
        <HomeSection
            order='imageLast'
            text={translate('home.contentForSection2')}
            src={image2}
            altForSection1={translate('home.altForSection2')}
        />
        <HomeSection
            order='imageFirst'
            text={translate('home.contentForSection3')}
            src={image3}
            altForSection1={translate('home.altForSection3')}
        />
        <HomeSection
            order='imageLast'
            text={translate('home.contentForSection4')}
            src={image4}
            altForSection1={translate('home.altForSection4')}
        />
    </>;
});

export default Home;