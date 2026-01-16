import React from 'react'
import serviceBanner from '../assets/service_banner.jpg'
import pointerIcon from '../assets/pointer.png'

const servicesData = [
  {
    title: "Training",
    description: "Hands-on training sessions to help your team operate machinery efficiently and safely."
  },
  {
    title: "In-depth Inspection & Maintenance",
    description: "Comprehensive equipment checks and preventive maintenance to ensure long-term performance."
  },
  {
    title: "Spare Parts & Consumables",
    description: "Supply of high-quality spare parts and consumables to reduce downtime and maintain consistency."
  },
  {
    title: "Equipment Improvement & Optimization",
    description: "Tailored upgrades and fine-tuning of machinery to enhance productivity and output quality."
  },
  {
    title: "Open SAT (Site Acceptance Test)",
    description: "On-site testing and validation of equipment performance before final handover."
  },
  {
    title: "Support Centre",
    description: "Dedicated technical support for troubleshooting, queries, and after-sales assistance."
  }
]

const Services = () => {
  return (
    <section className="w-full font-['Montserrat']">
      
      <div className="relative w-full">
        <img 
          src={serviceBanner} 
          alt="Services Background" 
          className="w-full h-auto block"
        />
        
        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-[48px] md:text-[64px] font-bold tracking-wide drop-shadow-md">
            Services
          </h1>
        </div>

        <div className="absolute bottom-0 right-0 w-[220px] h-[80px] bg-white rounded-tl-[60px] z-20 flex items-center justify-center">
          <button className="flex items-center gap-2 text-[#D00000] text-[15px] font-medium mt-4 mr-4 hover:opacity-80 transition-opacity">
            Discover More
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 1L6 6L11 1" />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full bg-white py-16 px-6 md:px-12">
        <div className="max-w-[1000px] mx-auto">
          
          <div className="flex items-center gap-3 mb-12">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-gray-500">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 10l-5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2 className="text-[28px] font-medium text-black">
              Our Services
            </h2>
          </div>

          <div className="space-y-8">
            {servicesData.map((service, index) => (
              <div key={index} className="flex items-start gap-5">
                <img 
                  src={pointerIcon} 
                  alt="Bullet Point" 
                  className="w-5 h-5 mt-1.5 flex-shrink-0 object-contain"
                />

                <div className="max-w-[900px]">
                  <h3 className="text-[18px] font-semibold text-black mb-1">
                    {service.title}
                  </h3>
                  <p className="text-[15px] text-gray-700 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services