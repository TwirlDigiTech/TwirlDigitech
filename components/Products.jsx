import packImg from "../assets/Packing.png";
import printImg from "../assets/Printing.png";
import postprintImg from "../assets/Post_Printing.png";
import sparesImg from "../assets/Spares.png";
import matsImg from "../assets/Materials.png";
import finishImg from "../assets/Finishing.png";
import ancilImg from "../assets/Ancillary_Machine.png"

const Products = () => {
  return (
    <section className="py-20 px-6 font-['Montserrat'] bg-black/10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-light mb-10">
          <span className="text-red-600">Product</span> Range
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-12 gap-6 ">

          {/* Row 1 */}
          <ProductCard
            title="Printing Solutions"
            image={printImg}
            className="col-span-12 md:col-span-6 h-56 transition duration-500 hover:scale-102"
          />
          <ProductCard
            title="Post Printing Solutions"
            image={postprintImg}
            className="col-span-12 md:col-span-6 h-56 transition duration-500 hover:scale-102"
          />

          {/* Row 2 */}
          <ProductCard
            title="Finishing"
            image={finishImg}
            className="col-span-12 md:col-span-4 h-48 transition duration-500 hover:scale-102"
          />
          <ProductCard
            title="Ancillary Machine"
            image={ancilImg}
            className="col-span-12 md:col-span-4 h-48 transition duration-500 hover:scale-102"
          />
          <ProductCard
            title="Packing"
            image={packImg}
            className="col-span-12 md:col-span-4 h-48 transition duration-500 hover:scale-102"
          />

          {/* Row 3 */}
          <ProductCard
            title="Materials"
            image={matsImg}
            className="col-span-12 md:col-span-6 h-48 transition duration-500 hover:scale-102"
          />
          <ProductCard
            title="Spares"
            image={sparesImg}
            className="col-span-12 md:col-span-6 h-48 transition duration-500 hover:scale-102"
          />

        </div>

      </div>
    </section>
  );
};

export default Products;
const ProductCard = ({ title, image, className }) => {
  return (
    <div className={`relative rounded-xl overflow-hidden ${className}`}>
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <div className="absolute inset-0 p-5 flex items-end justify-between text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button className="text-xs font-semi-light px-4 py-1.5 border border-white/90 rounded-lg cursor-pointer">
          Learn More
        </button>
      </div>
    </div>
  );
};
