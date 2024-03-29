import React from 'react';
import Navigation from './../UI/Navigation'
import Gallery from './../UI/Gallery'
import CTA from './../UI/CTA'
import Footer from './../UI/Footer';
import Header from '../UI/Header';
import { Link } from 'react-router-dom';
import Hero from './../UI/Hero'
import image from './../assets/1.png'
import './../UI/Page.css'

const HomePage = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Hero src={image} alt='Hero Section' />
      <div className='about'>
        <Header header="About US" />
        <div className='wrapper'>
          <p>
            We are leading Manufacturers exporters of Copper bathtubs, Wash Basins & Kitchen Sinks (Copper & Stainless steel) we also makes items for home décor. Rams International, established in 2003, it has been only over the last 16 years, we have experienced the tremendous change that has brought us to where we are today.
          </p>
          <p>
            We are leading Manufacturers exporters of Copper bathtubs, Wash Basins & Kitchen Sinks (Copper & Stainless steel) we also makes items for home décor. Rams International, established in 2003, it has been only over the last 16 years, we have experienced the tremendous change that has brought us to where we are today.
          </p>
          <Link to="/about-us" className='about-link'>Read More.</Link>
        </div>
      </div>
      <Gallery header='Gallery' />
      <CTA header='Contact Us' />
      <Footer />
    </React.Fragment>
  );
}

export default HomePage;
