import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-yellow-500 text-gray-900 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <img
            src="/new_logo.png"
            alt="Car Umbrella Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>
        <div className="space-x-6 text-lg font-medium">
          <Link href="/" className="hover:text-gray-600 transition duration-300">
            Home
          </Link>
          <Link href="/product" className="hover:text-gray-600 transition duration-300">
            Product
          </Link>
          <Link href="/contact" className="hover:text-gray-600 transition duration-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;