import React, { useRef } from 'react'
import forwardIcon from '../assets/forward.png'

const products = [
  {
    title: "Post Press Solutions",
    image: "https://placehold.co/500x250/png?text=Machine+1",
  },
  {
    title: "Printing Solutions",
    image: "https://placehold.co/500x250/png?text=Machine+2",
  },
  {
    title: "Packaging Solutions",
    image: "https://placehold.co/500x250/png?text=Machine+3",
  },
  {
    title: "Finishing Solutions",
    image: "https://placehold.co/500x250/png?text=Machine+4",
  }
]

const ProductLines = () => {
  const scrollContainerRef = useRef(null)

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 500, behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full bg-white py-10 px-6 md:px-12 font-['Montserrat']">
      <div className="max-w-[1440px] mx-auto relative">
        
        {/* Section Header */}
        <h2 className="text-[26px] font-medium text-black mb-2 pl-1">
          Product Lines
        </h2>

        {/* Scrollable Container */}
        <div className="relative group">
          {/* 
             pt-4: Space for top raised effect
             pl-4: CRITICAL - Adds space on the left so the first card isn't cut off 
          */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pt-4 pb-8 pl-4 pr-16 hide-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[500px] h-[280px] bg-white rounded-2xl p-6 flex flex-col justify-between border border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Card Title */}
                <h3 className="text-[20px] font-bold text-black">
                  {product.title}
                </h3>

                {/* Product Image */}
                <div className="flex-1 flex items-center justify-center py-2 px-4">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="max-h-[140px] w-auto object-contain mix-blend-multiply"
                  />
                </div>

                {/* Action Button */}
                <div>
                  <button className="text-[14px] font-medium text-black border border-gray-400 px-6 py-2 rounded-lg hover:bg-black hover:text-white hover:border-black transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Navigation Arrow */}
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-[42%] z-20 translate-x-1/4 hover:scale-105 transition-transform drop-shadow-lg"
          >
            <div className="w-12 h-12 bg-[#D00000] rounded-full flex items-center justify-center">
              <img 
                src={forwardIcon} 
                alt="Next" 
                className="w-4 h-4 object-contain brightness-0 invert" 
              />
            </div>
          </button>
          
          {/* White Gradient overlay */}
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  )
}

export default ProductLines