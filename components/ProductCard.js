const ProductCard = ({ title, price, description, image }) => {
    return (
      <div className="bg-white rounded-xl shadow-xl p-6 max-w-sm mx-auto transform hover:scale-105 transition duration-300">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover rounded-lg mb-5 border border-gray-200"
        />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-xl font-semibold text-yellow-600 mb-3">${price}</p>
        <p className="text-gray-600 text-md mb-5">{description}</p>
        <button className="bg-yellow-500 text-gray-900 px-5 py-3 rounded-lg hover:bg-yellow-600 transition duration-300 w-full font-medium">
          Buy Now
        </button>
      </div>
    );
  };
  
  export default ProductCard;