import React from 'react';
import ContactBanner from './ContactBanner';
import ContactFormSection from './ContactFormSection';
import ContactCTA from './ContactCTA';


const ContactPage = () => {
  return (
    <div>
      <ContactBanner />
      <ContactFormSection />
      <ContactCTA />
    </div>
  );
};

export default ContactPage;
