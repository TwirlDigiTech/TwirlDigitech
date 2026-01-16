import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const productsData = {
  "Printing": [
    { name: "AKIYAMA", slug: "akiyama", image: null, details: ["1+1 colour", "2+2 colour"] },
    { name: "CLARITY", slug: "clarity", image: null, details: ["1+1 colour", "2+2 colour"] }
  ],
  "Post Printing": [
    { name: "Paper Cutting", slug: "paper-cutting", image: null, details: ["115 cms and 137 cms"] },
    { name: "Paper Folding", slug: "paper-folding", image: null, details: ["Flat Pile", "Round Pile", "Gantry Pile", "Pharama Insert", "Outsert Folding"] },
    { name: "Section Sewing", slug: "section-sewing", image: null, details: ["180 cycles", "220 cycles"] },
    { name: "Hard Case", slug: "hard-case", image: null, details: ["Book Block Preparation", "Case Maker", "Casing In", "Round Corner", "Spiral", "Ribbon Inserting"] },
    { name: "Binding", slug: "binding", image: null, details: ["Saddle Stitching Line", "Explorer Perfect Binder", "Explorer 5500"] },
    { name: "Board Book", slug: "board-book", image: null, details: ["Block Preparation", "Shape Cutting"] }
  ],
  "Finishing": [
    { name: "Trimming", slug: "trimming", image: null, details: ["Three Knife Trimmer", "Board Cutter", "Cloth Cutter", "Book Saw"] },
    { name: "Embellishment", slug: "embellishment", image: null, details: ["Book Edge Printing", "Hot Foil Stamping", "Book Edge Gliding"] }
  ],
  "Ancillary": [
    { name: "Processing", slug: "processing", image: null, details: ["Inserting", "Back to Back Pasting", "Laminating Machine", "Spot UV", "Bailing"] }
  ],
  "Packing": [
    { name: "Packaging", slug: "packaging", image: null, details: ["Auto Shrink Wrapping", "Carton Forming Sealer", "Double Column Flaps", "Real Time Labeling", "Robot Stacking"] }
  ],
  "Materials": [
    { name: "Films & Foils", slug: "films-foils", image: null, details: ["Edge Gliding Films", "Foil Stamping Films"] },
    { name: "Binding Supplies", slug: "binding-supplies", image: null, details: ["Sanding Belts", "Sewing Thread", "Back Gauzing", "Head & Tail Bands"] },
    { name: "Covering", slug: "covering", image: null, details: ["Ribbons", "Elastic Bands", "Book Covering Material", "Inkjet Inks"] }
  ]
}

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("Printing")
  const location = useLocation()

  return (
    <nav className="relative w-full bg-white font-['Montserrat'] z-50">
      <div className="w-full h-[90px] px-12 flex items-center justify-between bg-white/60 backdrop-blur-md border-b border-gray-100 relative z-50">
        <Link to="/" className="flex-shrink-0">
          <img 
            src={logo} 
            alt="Twirl Digitech" 
            className="h-[50px] w-auto object-contain" 
          />
        </Link>

        <div className="flex items-center gap-10">
          <ul className="flex items-center gap-8 text-[16px] text-gray-800 font-normal h-full">
            <li className={location.pathname === "/" ? "text-red-600 font-medium" : "hover:text-red-600 transition-colors"}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === "/about" ? "text-red-600 font-medium" : "hover:text-red-600 transition-colors"}>
              <Link to="/about">About</Link>
            </li>
            
            <li 
              className={`relative h-[90px] flex items-center gap-1 cursor-pointer transition-colors duration-200 ${
                location.pathname === "/products" || isProductsOpen ? "text-red-600 font-medium" : "hover:text-red-600"
              }`}
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <Link to="/products" className="h-full flex items-center">Products</Link>
              <svg 
                className={`w-2.5 h-2.5 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} 
                viewBox="0 0 10 6" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M1 1L5 5L9 1" />
              </svg>
            </li>

            <li className={location.pathname === "/services" ? "text-red-600 font-medium" : "hover:text-red-600 transition-colors"}>
              <Link to="/services">Services</Link>
            </li>
            <li className={location.pathname === "/vision" ? "text-red-600 font-medium" : "hover:text-red-600 transition-colors"}>
              <Link to="/vision">Vision</Link>
            </li>
            <li className={location.pathname === "/contact" ? "text-red-600 font-medium" : "hover:text-red-600 transition-colors"}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <button className="text-black hover:text-red-600 transition-colors duration-200">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </div>

      <div 
        className={`absolute top-[90px] left-0 w-full bg-white shadow-xl border-t border-gray-100 transition-all duration-300 ease-in-out origin-top z-40 ${
          isProductsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
        onMouseEnter={() => setIsProductsOpen(true)}
        onMouseLeave={() => setIsProductsOpen(false)}
      >
        <div className="w-full px-12 py-10 min-h-[500px]">
          
          <div className="flex flex-wrap items-baseline gap-x-8 gap-y-4 mb-10 border-b border-gray-100 pb-6">
            {Object.keys(productsData).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-bold uppercase tracking-tight transition-colors duration-300 ${
                  activeCategory === category 
                    ? 'text-3xl text-[#DC2626]' 
                    : 'text-2xl text-gray-300 hover:text-gray-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="animate-fadeIn">
            <div className="grid grid-cols-4 gap-x-10 gap-y-12">
              {productsData[activeCategory]?.map((item, index) => (
                <Link 
                  to={`/product/${item.slug}`} 
                  key={index} 
                  className="group cursor-pointer"
                  onClick={() => setIsProductsOpen(false)}
                >
                  <h3 className="text-lg font-bold text-[#DC2626] uppercase mb-4 tracking-wide group-hover:opacity-80 transition-opacity">
                    {item.name}
                  </h3>
                  
                  <div className="w-full h-36 bg-gray-50 mb-4 flex items-center justify-center rounded-sm overflow-hidden group-hover:bg-gray-100 transition-colors duration-300">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-contain mix-blend-multiply p-2" 
                      />
                    ) : (
                      <svg className="w-12 h-12 text-gray-300 group-hover:scale-105 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    )}
                  </div>

                  <div className="space-y-1">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-[13px] text-gray-500 leading-snug">
                         {detail}
                      </p>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar