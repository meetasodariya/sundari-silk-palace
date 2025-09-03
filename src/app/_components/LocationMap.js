const LocationMap = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif font-bold text-[#800020] mb-4">Visit Our Store</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <div className="text-left">
            <h3 className="text-2xl font-bold font-serif text-gray-800">Our Address</h3>
            <p className="mt-2 text-lg text-gray-600">Meghaninagar Cross Road, near Meena Bazaar, Meghaninagar, Ahmedabad - 380016.</p>
            <h3 className="text-2xl font-bold font-serif text-gray-800 mt-6">Contact Us</h3>
            <p className="mt-2 text-lg text-gray-600">Phone: +91 90330 11431</p>
            <h3 className="text-2xl font-bold font-serif text-gray-800 mt-6">Store Hours</h3>
            <p className="mt-2 text-lg text-gray-600">Monday - Sunday: 10 a.m. to 9 p.m.</p>
          </div>
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-2xl">
            {/* **IMPORTANT**: Generate your own embed code from Google Maps and paste it here */}
             <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14684.762994165421!2d72.59990195541995!3d23.0534674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86a7aaee0811%3A0xbe98192fa9e68a82!2sSundari%20Silk%20Palace!5e0!3m2!1sen!2sin!4v1756656082262!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;