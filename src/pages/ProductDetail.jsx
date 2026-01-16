import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { productData } from '../data/productData'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const ProductDetail = () => {
  const { productId } = useParams()
  const product = productData[productId]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [productId])

  if (!product) {
    return (
        <>
            <Navbar />
            <div className="min-h-[60vh] flex flex-col items-center justify-center font-['Montserrat'] pt-24">
                <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
                <Link to="/" className="text-[#D00000] underline">Return Home</Link>
            </div>
            <Footer />
        </>
    )
  }

  return (
    <>
        <Navbar />
        <div className="w-full bg-white font-['Montserrat'] pt-8 pb-8">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            
            <div className="text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-[#D00000] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{product.category}</span>
            <span className="mx-2">/</span>
            <span className="text-[#D00000] font-bold">{product.name}</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
                <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 p-8 flex items-center justify-center h-full min-h-[400px]">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-auto object-contain mix-blend-multiply max-h-[500px]" 
                />
                </div>
            </div>

            <div className="w-full lg:w-1/2">
                <h1 className="text-[42px] font-bold text-black mb-6 leading-tight">
                {product.name}
                </h1>
                
                <p className="text-[16px] text-gray-700 leading-relaxed mb-8">
                {product.description}
                </p>

                {product.features && (
                <div className="mb-10">
                    <h3 className="text-[18px] font-bold text-black mb-4">Key Features</h3>
                    <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700 text-[15px]">
                        <svg className="w-5 h-5 text-[#D00000] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                        </li>
                    ))}
                    </ul>
                </div>
                )}

                {product.specs && (
                <div className="mb-10">
                    <h3 className="text-[18px] font-bold text-black mb-4">Technical Specifications</h3>
                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <tbody>
                        {Object.entries(product.specs).map(([key, value], idx) => (
                            <tr key={idx} className="border-b border-gray-200 last:border-0 hover:bg-gray-50">
                            <td className="py-4 px-6 font-medium text-gray-900 w-1/2 border-r border-gray-200 bg-gray-50/50">{key}</td>
                            <td className="py-4 px-6 text-gray-700">{value}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                </div>
                )}

                <Link to="/contact">
                <button className="bg-[#D00000] text-white text-[16px] font-bold px-10 py-4 rounded-xl hover:bg-[#b00000] transition-colors shadow-lg shadow-red-100">
                    Request a Quote
                </button>
                </Link>
            </div>
            </div>
        </div>
        </div>
        <Footer />
    </>
  )
}

export default ProductDetail