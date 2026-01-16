import React from 'react'
import heroGradient from '../assets/gradient.png'

const ContactHero = () => {
  return (
    <section className="relative w-full h-[600px] bg-white overflow-hidden font-['Montserrat']">
      
      {/* Background Image Asset */}
      <img 
        src={heroGradient} 
        alt="Background Gradient" 
        className="absolute top-0 right-0 h-full w-[75%] object-cover object-right-bottom z-0 pointer-events-none opacity-90"
      />

      {/* Content Container */}
      <div className="w-full max-w-[1440px] mx-auto px-12 md:px-24 relative z-10 pt-16">
        <div className="max-w-[500px]">
          <h1 className="text-[42px] leading-[1.2] text-black mb-6 font-normal">
            An <span className="font-bold">innovation</span> driven partner
          </h1>
          
          <p className="text-[15px] text-gray-800 leading-[1.6] mb-8 font-normal">
            We are a trusted export partner for precision post-press and printing machinery, offering tailored solutions and dedicated support to businesses around the world
          </p>
          
          <button className="bg-[#D00000] text-white text-[15px] font-bold px-8 py-3 rounded-lg hover:bg-[#b00000] transition-colors shadow-sm">
            About us
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactHero