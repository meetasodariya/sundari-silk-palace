import { Lora, Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: 'Sundari Silk Palace - 36 Years of Timeless Elegance',
  description: 'Discover a wide variety of traditional and contemporary silk and cotton sarees at Sundari Silk Palace in Meghaninagar, Ahmedabad.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${lora.variable} ${montserrat.variable} font-sans`}>
        <Navbar />
        <main className="pt-20"> {/* Add padding to main to avoid content hiding behind fixed navbar */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}