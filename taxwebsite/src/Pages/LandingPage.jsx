import React from 'react';
import Header from './Header';
import OnlinePayment from './OnlinePayment';
import ContactForm from './ContactForm';
import Subscription from './Subscription';
import ContentBlock from './Contentblock';
import '../css/landingcss.css';

const LandingPage = () => {
    return (
      <div className="landing-page">
        <Header />
        {/* Use ContentBlock component multiple times with different props */}
        <div className='About'>
            About
        </div>
        <ContentBlock
          imageSrc="/images/content1.jpg"
          title="MAKING SOLAR MORE AFFORABLE"
          text="We can save an additional 19% on renewable energy systems for our clients."
          align="left"
        />

        <ContentBlock
            imageSrc="/images/content2.png"
            title="SOLAR PRO'S WHO WERE LOOKING TO SAVE OUR CUSTOMERS MORE MONEY."
            text="Our team is composed of solar experts with experience throughout the solar industry. Our goal has always been delivering outstanding value to our clients."
            align="right"
        />

        <ContentBlock
            imageSrc="/images/content3.png"
            title="HIGH NET WORTH INDIVIDUALS"
            text="Have you done all you can to reduce your tax liability? If you have not talked to us, you are missing a great opportunity."
            align="left"
        />


        {/* Add more ContentBlock components as needed */}


        <OnlinePayment />
        <ContactForm />
        <Subscription />
      </div>
    );
  };
  
  export default LandingPage;