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
        <ContentBlock
          imageSrc="/images/content1.jpg"
          title="MAKING SOLAR MORE AFFORABLE"
          text="We can save an additional 19% on renewable energy systems for our clients."
          align="left"
        />

        <ContentBlock
            imageSrc="/images/content2.png"
            title="SOLAR PROJECTS"
            text="We were looking to save our customers more money."
            align="right"
        
        
        />


        {/* Add more ContentBlock components as needed */}


        <OnlinePayment />
        <ContactForm />
        <Subscription />
      </div>
    );
  };
  
  export default LandingPage;