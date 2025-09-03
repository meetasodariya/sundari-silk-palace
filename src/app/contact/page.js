// src/app/contact/page.js
'use client';

import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <div className="bg-brand-off-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* --- Page Header --- */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-serif font-bold text-brand-maroon">Visit Us</h1>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        We welcome you to our store to experience our collection firsthand. Find all the details you need to plan your visit below.
                    </p>
                </div>

                {/* --- Full-Width Map --- */}
                <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-2xl border-4 border-white mb-16">
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

                {/* --- Contact Details Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {/* Address Card */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <FaMapMarkerAlt className="text-4xl text-brand-maroon mx-auto mb-4" />
                        <h3 className="text-2xl font-serif font-bold text-brand-charcoal mb-2">Our Address</h3>
                        <p className="text-lg text-gray-600">
                            Meghaninagar Cross Road, near Meena Bazaar, Meghaninagar, Ahmedabad - 380016.
                        </p>
                    </div>

                    {/* Phone Card */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <FaPhone className="text-4xl text-brand-maroon mx-auto mb-4" />
                        <h3 className="text-2xl font-serif font-bold text-brand-charcoal mb-2">Call Us</h3>
                        <a href="tel:+919033011431" className="text-lg text-gray-600 hover:text-brand-maroon transition-colors">
                            +91 90330 11431
                        </a>
                    </div>

                    {/* Hours Card */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <FaClock className="text-4xl text-brand-maroon mx-auto mb-4" />
                        <h3 className="text-2xl font-serif font-bold text-brand-charcoal mb-2">Store Hours</h3>
                        <p className="text-lg text-gray-600">
                            Monday - Sunday <br /> 10:00 a.m. – 9:00 p.m.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;