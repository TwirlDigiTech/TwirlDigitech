import React from 'react'
import logoBig from '../assets/logo_big.png'

const ContactFooter = () => {
  return (
    <footer className="w-full bg-white py-20 px-12 md:px-24 font-['Montserrat']">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Section: Contact Details */}
        <div className="flex flex-col items-start w-full md:w-1/2">
          <h3 className="text-[18px] font-medium text-black mb-0">
            Contact Us
          </h3>
          <h2 className="text-[40px] text-[#D00000] font-normal mb-10 leading-tight">
            Twirl Digitech
          </h2>

          <div className="space-y-5 text-[17px] text-[#1A1A1A] font-normal leading-relaxed">
            <p>
              Email: contact@twirldigitech.com
            </p>
            <p>
              Address: Office No., Street, City, State, Pincode
            </p>
            <p>
              Tel: +91 19058763
            </p>
          </div>
        </div>

        {/* Right Section: Large Logo */}
        <div className="w-full md:w-1/2 flex justify-start md:justify-end">
          <img 
            src={logoBig} 
            alt="Twirl Digitech Logo" 
            className="w-[300px] md:w-[400px] h-auto object-contain"
          />
        </div>
        
      </div>
    </footer>
  )
}

export default ContactFooter