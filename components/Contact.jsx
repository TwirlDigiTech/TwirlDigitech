import React from 'react'

const Contact = () => {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 font-['Montserrat']">
      <div className="max-w-[1000px] mx-auto">
        <div className="mb-8">
          <h3 className="text-[22px] font-medium text-black mb-0 leading-tight">Tell us what you need</h3>
          <h2 className="text-[52px] font-normal text-black tracking-tight leading-tight">
            We’re here to <span className="text-[#D00000]">help!</span>
          </h2>
          <p className="text-black text-[15px] mt-4 font-normal">
            Fill in the details below, and our team will get back to you at the earliest. All fields marked with an asterisk (<span className="text-[#D00000]">*</span>) are mandatory.
          </p>
        </div>

        <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
          {/* First Name */}
          <div>
            <input 
              type="text" 
              placeholder="First Name*" 
              className="w-full border border-[#b0b0b0] rounded-xl px-5 py-4 text-gray-800 text-lg placeholder:text-[#555] placeholder:italic placeholder:font-light focus:outline-none focus:border-[#D00000] focus:ring-1 focus:ring-[#D00000] transition-all bg-white"
            />
          </div>

          {/* Last Name */}
          <div>
            <input 
              type="text" 
              placeholder="Last Name*" 
              className="w-full border border-[#b0b0b0] rounded-xl px-5 py-4 text-gray-800 text-lg placeholder:text-[#555] placeholder:italic placeholder:font-light focus:outline-none focus:border-[#D00000] focus:ring-1 focus:ring-[#D00000] transition-all bg-white"
            />
          </div>

          {/* Job Title */}
          <div className="md:col-span-2">
            <input 
              type="text" 
              placeholder="Job Title" 
              className="w-full border border-[#b0b0b0] rounded-xl px-5 py-4 text-gray-800 text-lg placeholder:text-[#555] placeholder:italic placeholder:font-light focus:outline-none focus:border-[#D00000] focus:ring-1 focus:ring-[#D00000] transition-all bg-white"
            />
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <input 
              type="text" 
              placeholder="Company*" 
              className="w-full border border-[#b0b0b0] rounded-xl px-5 py-4 text-gray-800 text-lg placeholder:text-[#555] placeholder:italic placeholder:font-light focus:outline-none focus:border-[#D00000] focus:ring-1 focus:ring-[#D00000] transition-all bg-white"
            />
          </div>

          {/* Business Email */}
          <div className="md:col-span-2">
            <input 
              type="email" 
              placeholder="Business Email Address*" 
              className="w-full border border-[#b0b0b0] rounded-xl px-5 py-4 text-gray-800 text-lg placeholder:text-[#555] placeholder:italic placeholder:font-light focus:outline-none focus:border-[#D00000] focus:ring-1 focus:ring-[#D00000] transition-all bg-white"
            />
          </div>

          {/* Phone */}
          <div className="md:col-span-2">
            <input 
              type="tel" 
              placeholder="Phone*" 
              className="w-full border border-[#b0b0b0] rounded-xl px-5 py-4 text-gray-800 text-lg placeholder:text-[#555] placeholder:italic placeholder:font-light focus:outline-none focus:border-[#D00000] focus:ring-1 focus:ring-[#D00000] transition-all bg-white"
            />
          </div>

          {/* City */}
          <div>
            <input 
              type="text" 
              placeholder="City" 
              className="w-full border border-[#b0b0b0] rounded-xl px-5 py-4 text-gray-800 text-lg placeholder:text-[#555] placeholder:italic placeholder:font-light focus:outline-none focus:border-[#D00000] focus:ring-1 focus:ring-[#D00000] transition-all bg-white"
            />
          </div>

          {/* Country */}
          <div>
            <input 
              type="text" 
              placeholder="Country*" 
              className="w-full border border-[#b0b0b0] rounded-xl px-5 py-4 text-gray-800 text-lg placeholder:text-[#555] placeholder:italic placeholder:font-light focus:outline-none focus:border-[#D00000] focus:ring-1 focus:ring-[#D00000] transition-all bg-white"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <textarea 
              placeholder="Your Message*" 
              className="w-full h-40 border border-[#b0b0b0] rounded-xl px-5 py-4 text-gray-800 text-lg placeholder:text-[#555] placeholder:italic placeholder:font-light focus:outline-none focus:border-[#D00000] focus:ring-1 focus:ring-[#D00000] transition-all resize-none bg-white"
            ></textarea>
          </div>

          {/* Footer Actions */}
          <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-between mt-2 gap-6">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex items-center">
                <input 
                  type="checkbox" 
                  id="privacy"
                  className="peer h-7 w-7 border-2 border-[#b0b0b0] rounded bg-white text-[#D00000] focus:ring-0 checked:border-[#D00000] checked:bg-[#D00000] cursor-pointer appearance-none transition-colors"
                />
                <svg className="absolute w-5 h-5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 left-1 top-1 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <label htmlFor="privacy" className="text-black text-[17px] font-normal cursor-pointer select-none">
                I have read the privacy statement and accept it. <a href="#" className="text-[#0056D2] font-semibold hover:underline">Privacy policy.</a>
              </label>
            </div>

            <button className="bg-[#D00000] hover:bg-[#b00000] text-white font-bold text-xl px-10 py-3 rounded-xl flex items-center gap-3 transition-colors shadow-sm whitespace-nowrap w-full md:w-auto justify-center">
              Send
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mb-[2px]">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact