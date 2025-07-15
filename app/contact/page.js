import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-800 tracking-tight">Contact Us</h1>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <form>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-800 font-semibold mb-2 text-lg"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-800 font-semibold mb-2 text-lg"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-800 font-semibold mb-2 text-lg"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-300"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg hover:bg-yellow-600 transition duration-300 font-semibold text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-700 text-lg">
              Email: support@Carbella.com | Phone: (123) 456-7890
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}