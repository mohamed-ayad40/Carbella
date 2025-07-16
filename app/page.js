import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <Image
            width={9800}
            height={500}
            src="/background.png" // Update this path
            alt="Hero Image"
            className="w-full h-[80vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500 opacity-80 flex justify-center items-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                Revolutionize Your Car Protection
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Experience advanced car tents with seamless remote control.
              </p>
              <Link
                href="/product"
                className="bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition duration-300 font-semibold text-lg"
              >
                Discover More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Why Choose Car Tent?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Smart Protection
                </h3>
                <p className="text-gray-600">
                  Automatic control with mobile or remote access.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-700">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Easy Installation</h3>
                <p className="text-gray-600">
                  Quick setup and compact storage.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-cyan-500">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Durable Design</h3>
                <p className="text-gray-600">
                  Built to withstand harsh weather.
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