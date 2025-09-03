import { FaInstagram, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-[#36454F] text-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-serif font-bold text-white mb-4">Sundari Silk Palace</h3>
          <p>Meghaninagar Cross Road, Ahmedabad - 380016</p>
          <p>Phone: +91 90330 11431</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><Link href="/" className="hover:text-[#FFD700]">Home</Link></li>
            <li className="mb-2"><Link href="/collection" className="hover:text-[#FFD700]">Our Collection</Link></li>
            <li className="mb-2"><Link href="/about" className="hover:text-[#FFD700]">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-[#FFD700]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="https://www.instagram.com/sundarisilk/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-[#FFD700]"><FaInstagram /></a>
            <a href="https://www.facebook.com/sundari.silk259/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-[#FFD700]"><FaFacebook /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-10 border-t border-gray-600 pt-6">
        <p>&copy; {new Date().getFullYear()} Sundari Silk Palace. All Rights Reserved.</p>
        <p className="text-xs">Made with ❤️ by <a href="https://www.linkedin.com/in/meet-asodariya-6475b2243/" target="_blank" rel="noopener noreferrer">Meet Asodariya</a></p>
      </div>
    </div>
  );
};

export default Footer;