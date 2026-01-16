import { useState } from "react";

const Services = () => {
  const services = [
    { title: "Identification Of Right Fit Machine"},
    { title: "Compliance Verification / Inspection"},
    { title: "Order Placement"},
    { title: "Pre-Delivery Shipment Audit"},
    { title: "Shipping & Installation"},
    { title: "Training"},
    { title: "Service Support"},
    { title: "AMC"},
  ];

  const visibleCount = 4;
  const [startIndex, setStartIndex] = useState(0);

const handlePrev = () => {
  setStartIndex(prev => {
    const prevIndex = prev - visibleCount;
    return prevIndex >= 0 ? prevIndex : prev;
  });
};



  const handleNext = () => {
  setStartIndex(prev => {
    const nextIndex = prev + visibleCount;
    return nextIndex < services.length ? nextIndex : prev;
  });
};



  return (
<section className="py-24 px-6 font-['Montserrat']">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <h2 className="text-4xl font-light text-center mb-35">
      Our <span className="text-red-600">Services</span>
    </h2>

    {/* Timeline */}
    <div className="relative">

      {/* Center line */}
<div className="absolute top-14 left-0 right-0 h-[2px] bg-red-400" />
      {/* Steps */}
      <div className="relative flex justify-between">

        {services
          .slice(startIndex, startIndex + visibleCount)
          .map((service, index) => (
            <div key={index} className="flex flex-col items-center w-56">

              {/* Circle */}
              <div
                className="
                  w-28 h-28 rounded-full
                  border-[5px] border-red-700 bg-white
                  flex items-center justify-center
                  shadow-[0_10px_25px_rgba(220,38,38,0.25)]
                  z-10
                "
              >
                <span className="text-red-600 text-xl">
                  {service.icon}
                </span>
              </div>

              <p
  className={`
    absolute
    ${index % 2 === 0 ? "top-full mt-6" : "bottom-full mb-6"}
    text-m font-medium text-black text-center max-w-[180px]
  `}
>
  {service.title}
</p>

            </div>
          ))}
      </div>
    </div>

    {/* Controls */}
    <div className="flex justify-center gap-6 mt-35">

  {/* Prev */}
  <button
    onClick={handlePrev}
    disabled={startIndex === 0}
    className={`
      w-12 h-12 rounded-full
      flex items-center justify-center
      transition
      ${startIndex === 0
        ? "bg-gray-200 text-white cursor-not-allowed"
        : "bg-black text-white hover:bg-gray-800"}
    `}
  >
    ←
  </button>

  {/* Next */}
  <button
    onClick={handleNext}
    disabled={startIndex + visibleCount >= services.length}
    className={`
      w-12 h-12 rounded-full
      flex items-center justify-center
      transition
      ${startIndex >= services.length - visibleCount
        ? "bg-gray-200 text-white cursor-not-allowed"
        : "bg-black text-white hover:bg-gray-800"}
    `}
  >
    →
  </button>

</div>


  </div>
</section>


  );
};

export default Services;