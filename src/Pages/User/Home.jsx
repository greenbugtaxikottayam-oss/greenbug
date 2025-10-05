import React from 'react'
import Layout from "./Layout/Layout.jsx";
import Banner from '../../Components/User/Home/Banner.jsx';
import About from '../../Components/User/Home/About.jsx'
import CoinageSection from '../../Components/User/Home/CoinageSection.jsx'
import BookRideBanner from '../../Components/User/Home/BookRideBanner.jsx'
import VehicleFleet from '../../Components/User/Home/VehicleFleet.jsx'
import Contact from '../../Components/User/Home/Contact.jsx';
import BookingForm from '../../Components/User/Home/BookingForm.jsx';
import FeatureSection from '../../Components/User/Home/FeatureSection.jsx';

function Home() {
  return (
    <Layout>
         <Banner/>
         <FeatureSection />
        <About />
          <CoinageSection/>  
          <BookRideBanner />
          <VehicleFleet />
           <Contact />
           <BookingForm /> 
    </Layout>
  )
}

export default Home
