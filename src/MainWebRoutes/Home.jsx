import React from 'react';
import HomeBanner from './HomeBanner';
import HomeFeature from './HomeFeature';
import HomeTopDelivaryMan from './HomeTopDelivaryMan';
import HomeStatics from './HomeStatics';
import HomeMap from './HomeMap';
import HomeSection from '../Custom_Hooks/HomeSection';
import HomeFaq from './HomeFaq';
import HomeSubscribe from './HomeSubscribe';

const Home = () => {
    return (
        <div>
            <div>
                <HomeBanner></HomeBanner>
            </div>
            <div>
                <HomeFeature></HomeFeature>
            </div>
            <div>
                <HomeStatics></HomeStatics>
            </div>
            <div>
                <HomeTopDelivaryMan></HomeTopDelivaryMan>
            </div>
            <div className='my-7'>
                <HomeSection headTxt={'Track Your Current Location in Real-Time'} Desc={'Easily locate yourself on the map and get precise latitude and longitude details in real-time. '}></HomeSection>
            </div>
            <div>
                <HomeMap></HomeMap>
            </div>
            <div>
                <HomeFaq></HomeFaq>
            </div>
            <div>
                <HomeSubscribe></HomeSubscribe>
            </div>

        </div>
    );
};

export default Home;