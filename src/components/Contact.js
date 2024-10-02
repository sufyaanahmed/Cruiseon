import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Contact() {
  return (
    <section id="Contact" className="py-8 bg-gray-900 text-center">
      <h2 className="text-3xl text-orange-500 font-bold mb-4">Follow Us</h2>

      {/* Social Media Icons */}
      <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-8 mb-4">
        <a 
          href="https://www.facebook.com/people/Cruiseon-Car/pfbid02XEFezWtRKHRYNTfESZ5SZ2LVcsbXh9PvXLVpQvMAFKrbZHv8mckArwvdqSLCzP4ul/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white mb-4 md:mb-0"
        >
          <FaFacebook size={30} />
        </a>
        <a 
          href="https://www.instagram.com/cruiseoncars/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white mb-4 md:mb-0"
        >
          <FaInstagram size={30} />
        </a>
      </div>

      {/* Contact Information */}
      <div className="text-white space-y-2">
        <p>Customer support: +91 9480289772</p>
        <p>Company mail: cruiseonoffice@cruiseoncars.in</p>
      </div>

      
      <p className="text-gray-100 mt-4">Proudly created by <a className='text-orange-500' href='https://www.instagram.com/itech_bangalore/' target='_blank' rel='noopener noreferrer'>I-Tech.</a></p>
      {/* Credit Line */}
    </section>
  );
}

export default Contact;
