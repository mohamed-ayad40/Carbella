import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';

export default function Product() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-800 tracking-tight">
          Carbella - Ultimate Protection
          </h1>
          <div className="flex justify-center mb-12">
            <ProductCard
              title="Carbella Pro"
              price={199.99}
              description="A portable, automatic car cover that protects your vehicle from all weather conditions. Easy to install and remove."
              image="/carbella.jpg"
            />
          </div>
          <div className="mt-12 max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Product Details</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              The Carbella Pro is a groundbreaking solution for vehicle
              protection. It automatically deploys over your car to shield it
              from rain, snow, UV rays, and debris. Made with premium materials,
              it’s built to last and easy to store.
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4 space-y-3 text-md">
              <li>Automatic deployment in under 30 seconds</li>
              <li>UV-resistant and waterproof fabric</li>
              <li>Compact storage bag included</li>
              <li>Fits most standard vehicles</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}