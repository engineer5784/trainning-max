import React from 'react';
import './Home.module.css';
import Hero from '../../components/Hero/Hero';
import Programs from '../../components/Programs/Programs';
import Reasons from '../../components/Reasons/Reasons';
import Plans from '../../components/Plans/Plans';
import Testimonials from '../../components/Testimonials/Testimonials';
import Join from '../../components/Join/Join';
import Footer from '../../components/Footer/Footer';
import Protein from '../../components/Protein/Protein';
// import Advertisements from '../../components/Advertisements/Advertisements';



export const Home = () => {
  

  return (
    <div>
      <Hero />
      <Programs />
      <Reasons />
      <Plans /> 
      <Testimonials />
      <Join />
      <Protein />
      {/* <Advertisements /> */}
      <Footer />
    </div>
  )
}
