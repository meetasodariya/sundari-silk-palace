// src/app/contact/page.js
'use client';

import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { submitInquiry } from '@/lib/api';

const INITIAL_FORM = { name: '', phone: '', email: '', message: '' };

const ContactPage = () => {
    const [form,       setForm]       = useState(INITIAL_FORM);
    const [status,     setStatus]     = useState('idle'); // idle | loading | success | error
    const [feedback,   setFeedback]   = useState('');
    const [fieldErrors, setFieldErrors] = useState({});

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
        // Clear field error on change
        if (fieldErrors[e.target.name]) {
            setFieldErrors(prev => ({ ...prev, [e.target.name]: null }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic client-side validation
        if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
            setStatus('error');
            setFeedback('Please fill in Name, Phone, and Message.');
            return;
        }

        setStatus('loading');
        setFieldErrors({});

        const result = await submitInquiry(form);

        if (result.success) {
            setStatus('success');
            setFeedback(result.message);
            setForm(INITIAL_FORM);
        } else {
            setStatus('error');
            setFeedback(result.error || 'Something went wrong. Please try again.');
            if (result.fieldErrors) setFieldErrors(result.fieldErrors);
        }
    };

    return (
        <div className="bg-brand-off-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-16">

                {/* ── Page Header ── */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-serif font-bold text-brand-maroon">Visit &amp; Contact Us</h1>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        We welcome you to our store to experience our collection firsthand.
                        Have a question? Send us a message and we&apos;ll get back to you.
                    </p>
                </div>

                {/* ── Full-Width Map ── */}
                <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-2xl border-4 border-white mb-16">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14684.762994165421!2d72.59990195541995!3d23.0534674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86a7aaee0811%3A0xbe98192fa9e68a82!2sSundari%20Silk%20Palace!5e0!3m2!1sen!2sin!4v1756656082262!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Sundari Silk Palace Location"
                    />
                </div>

                {/* ── Two-column layout: Info + Form ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info Cards */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif font-bold text-brand-charcoal mb-6">Store Details</h2>

                        <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
                            <FaMapMarkerAlt className="text-3xl text-brand-maroon mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-serif font-bold text-brand-charcoal">Our Address</h3>
                                <p className="text-gray-600 mt-1">
                                    Meghaninagar Cross Road, near Meena Bazaar,<br />
                                    Meghaninagar, Ahmedabad — 380016
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
                            <FaPhone className="text-3xl text-brand-maroon mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-serif font-bold text-brand-charcoal">Call Us</h3>
                                <a
                                    href="tel:+919033011431"
                                    className="text-gray-600 mt-1 hover:text-brand-maroon transition-colors block"
                                >
                                    +91 90330 11431
                                </a>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
                            <FaClock className="text-3xl text-brand-maroon mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-serif font-bold text-brand-charcoal">Store Hours</h3>
                                <p className="text-gray-600 mt-1">Monday – Sunday<br />10:00 a.m. – 9:00 p.m.</p>
                            </div>
                        </div>
                    </div>

                    {/* ── Contact / Inquiry Form ── */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <FaEnvelope className="text-3xl text-brand-maroon" />
                            <h2 className="text-3xl font-serif font-bold text-brand-charcoal">Send an Inquiry</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                            {/* Name */}
                            <div>
                                <label htmlFor="inquiry-name" className="block text-sm font-semibold text-gray-700 mb-1">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="inquiry-name"
                                    name="name"
                                    type="text"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="e.g. Priya Sharma"
                                    className={`w-full border rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-maroon transition ${
                                        fieldErrors.name ? 'border-red-400' : 'border-gray-300'
                                    }`}
                                />
                                {fieldErrors.name && (
                                    <p className="text-red-500 text-xs mt-1">{fieldErrors.name}</p>
                                )}
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="inquiry-phone" className="block text-sm font-semibold text-gray-700 mb-1">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="inquiry-phone"
                                    name="phone"
                                    type="tel"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="e.g. 9876543210"
                                    className={`w-full border rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-maroon transition ${
                                        fieldErrors.phone ? 'border-red-400' : 'border-gray-300'
                                    }`}
                                />
                                {fieldErrors.phone && (
                                    <p className="text-red-500 text-xs mt-1">{fieldErrors.phone}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="inquiry-email" className="block text-sm font-semibold text-gray-700 mb-1">
                                    Email <span className="text-gray-400 font-normal">(optional)</span>
                                </label>
                                <input
                                    id="inquiry-email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="e.g. priya@email.com"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-maroon transition"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="inquiry-message" className="block text-sm font-semibold text-gray-700 mb-1">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="inquiry-message"
                                    name="message"
                                    rows={4}
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell us what you're looking for…"
                                    className={`w-full border rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-maroon transition resize-none ${
                                        fieldErrors.message ? 'border-red-400' : 'border-gray-300'
                                    }`}
                                />
                                {fieldErrors.message && (
                                    <p className="text-red-500 text-xs mt-1">{fieldErrors.message}</p>
                                )}
                            </div>

                            {/* Status Feedback Banner */}
                            {status === 'success' && (
                                <div className="flex items-center gap-3 bg-green-50 border border-green-300 text-green-700 rounded-lg px-4 py-3">
                                    <FaCheckCircle className="flex-shrink-0" />
                                    <p className="text-sm font-medium">{feedback}</p>
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="flex items-center gap-3 bg-red-50 border border-red-300 text-red-600 rounded-lg px-4 py-3">
                                    <FaExclamationCircle className="flex-shrink-0" />
                                    <p className="text-sm font-medium">{feedback}</p>
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-brand-maroon text-white font-semibold py-3 rounded-lg hover:opacity-90 active:scale-95 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? 'Sending…' : 'Send Inquiry'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;