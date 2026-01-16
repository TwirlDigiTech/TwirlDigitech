import React from 'react'
import pinIcon from '../assets/pin.png'
import phoneIcon from '../assets/phone.png'
import emailIcon from '../assets/email.png'
import internetIcon from '../assets/internet.png'

const Footer = () => {
  return (
    <footer className="w-full bg-white py-16 px-12 md:px-24 font-['Montserrat']">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <h2 className="text-gray-900 font-medium text-lg mb-1">Contact Us</h2>
          <h1 className="text-[#DC2626] text-4xl font-normal tracking-wide">Twirl Digitech</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* India Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">India</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <img src={pinIcon} alt="Location" className="w-5 h-5 mt-1 object-contain opacity-80" />
                <p className="text-gray-700 leading-relaxed text-[15px]">
                  304, SSG East Plaza,<br />
                  Mayur Vihar Phase III,<br />
                  Delhi - 110096, India
                </p>
              </div>

              <div className="flex items-center gap-4">
                <img src={phoneIcon} alt="Phone" className="w-5 h-5 object-contain opacity-80" />
                <div className="flex gap-8 text-gray-700 text-[15px]">
                  <span>+91 11 45539988</span>
                  <span>+91 9818699953</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src={emailIcon} alt="Email" className="w-5 h-5 object-contain opacity-80" />
                <span className="text-gray-700 text-[15px]">contact@twirldigitech.in</span>
              </div>

              <div className="flex items-center gap-4">
                <img src={internetIcon} alt="Website" className="w-5 h-5 object-contain opacity-80" />
                <span className="text-gray-700 text-[15px]">www.twirldigitech.in</span>
              </div>
            </div>
          </div>

          {/* China Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">China</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <img src={pinIcon} alt="Location" className="w-5 h-5 mt-1 object-contain opacity-80" />
                <p className="text-gray-700 leading-relaxed text-[15px]">
                  304, SSG East Plaza,<br />
                  Mayur Vihar Phase III,<br />
                  Delhi - 110096, India
                </p>
              </div>

              <div className="flex items-center gap-4">
                <img src={phoneIcon} alt="Phone" className="w-5 h-5 object-contain opacity-80" />
                <div className="flex gap-8 text-gray-700 text-[15px]">
                  <span>+91 11 45539988</span>
                  <span>+91 9818699953</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src={emailIcon} alt="Email" className="w-5 h-5 object-contain opacity-80" />
                <span className="text-gray-700 text-[15px]">contact@twirldigitech.in</span>
              </div>

              <div className="flex items-center gap-4">
                <img src={internetIcon} alt="Website" className="w-5 h-5 object-contain opacity-80" />
                <span className="text-gray-700 text-[15px]">www.twirldigitech.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer