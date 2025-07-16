import Link from "next/link";
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-200 py-8">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-4">
            <img
              src="new_logo.jpg" // Update with your logo image path
              alt="Car Umbrella Logo"
              className="h-10 w-auto object-contain"
            />
          </div>
          <p className="text-lg mb-2">&copy; 2023 CarUmbrella. All rights reserved.</p>
          <p className="mb-4">Innovative car protection with cutting-edge control.</p>
          <div className="flex justify-center space-x-4">
            <Link href="/" className="hover:text-cyan-400 transition duration-300">
              Home
            </Link>
            <Link href="/product" className="hover:text-cyan-400 transition duration-300">
              Product
            </Link>
            <Link href="/contact" className="hover:text-cyan-400 transition duration-300">
              Contact
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">Email: support@carumbrella.com | Phone: (123) 456-7890</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;