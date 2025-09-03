import Image from "next/image";

const AboutPage = () => {
    return (
        <div className="bg-[#FDFBF7]">
            <div className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-5xl font-serif font-bold text-center text-[#800020] mb-8">Our 36-Year Legacy</h1>
                {/* <Image src="/images/store-front.jpg" alt="Sundari Silk Palace Storefront" className="rounded-lg shadow-xl mb-12 w-full" /> */}
                <div className="text-lg text-gray-700 space-y-6 text-justify">
                    <p>For over three and a half decades, Sundari Silk Palace has been a cherished landmark in Meghaninagar, Ahmedabad. Our journey began with a simple passion: to bring the most exquisite and timeless Indian ethnic wear to the women of our community.</p>
                    <p>We pride ourselves on our curated collection of silk and cotton sarees, including the vibrant and traditional Bandhani. Every piece in our store is selected for its superior quality, intricate design, and exceptional craftsmanship. From daily-wear kurtis to ornate lehenga cholis with real mirror work, our goal is to offer something beautiful for every occasion at a reasonable price.</p>
                    <p>As a family-run business, we believe in building lasting relationships with our customers. We are more than just a retailer; we are a part of your celebrations and your everyday moments of elegance. Thank you for being a part of our story.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;