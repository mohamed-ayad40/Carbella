import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <img
            src="/background.png"
            alt="Hero Image"
            className="w-full h-[80vh] object-cover"
          />
          <div className="absolute inset-0 bg-opacity-40 flex justify-center items-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
                Introducing the Carbella
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Protect your car from rain, snow, and sun with our revolutionary Carbella.
              </p>
              <Link
                href="/product"
                className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg hover:bg-yellow-600 transition duration-300 font-semibold text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Why Choose Carbella?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-yellow-500">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Weather Protection
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Shields your car from harsh weather conditions.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-yellow-500">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Easy Setup</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deploys in seconds with a push of a button.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-yellow-500">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Durable Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  Made from high-quality, weather-resistant materials.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;