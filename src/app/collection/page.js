// src/app/collection/page.js

import Image from 'next/image'; // Make sure to import the Image component

const CollectionPage = () => {
    // **IMPORTANT**: Create this data array with all your products
    const products = [
        { name: 'Bandhani Sarees', category: 'Saree', image: '/images/collection/bandhani.jpg' },
        { name: 'Cotton Kurtis', category: 'Kurti', image: '/images/collection/kurtis.jpg' },
        { name: 'Silk Sarees', category: 'Saree', image: '/images/collection/silk.jpg' },
        { name: 'Festive Lehenga', category: 'Lehenga', image: '/images/collection/lahengas.jpg' },
        { name: 'Cotton Sarees', category: 'Saree', image: '/images/collection/cotton.jpg' },
        { name: 'Patola Sarees', category: 'Saree', image: '/images/collection/patolas.jpg' },
        { name: 'Chaniya Cholis', category: 'Chaniya Choli', image: '/images/collection/chaniya-choli.jpg' },
        { name: 'Banarasi Sarees', category: 'Saree', image: '/images/collection/banarasi.jpg' },
    ];

    return (
        <div className="bg-brand-off-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <h1 className="text-5xl font-serif font-bold text-center text-brand-maroon mb-12">
                    Our Collection
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="group rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 bg-white">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={500}  // Provide a width (e.g., 500 pixels)
                                height={700} // Provide a height (e.g., 700 pixels)
                                className="w-full h-auto object-cover" // `h-auto` maintains aspect ratio
                            />
                            <div className="p-4">
                                <h3 className="font-bold text-lg text-brand-charcoal">{product.name}</h3>
                                <p className="text-gray-600">{product.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CollectionPage;