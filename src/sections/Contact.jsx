import { useState } from 'react';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(form);
    };

    return (
        <section
            className="w-full min-h-screen text-white flex flex-col justify-center items-center px-4 py-16"
            style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
        >
            <div className="max-w-xl w-full">
                <h1 className="text-white text-4xl font-black text-center mb-10">
                    Contact Me
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6 backdrop-blur-md p-10 rounded-xl shadow-lg">
                    {/* Name */}
                    <div className="text-left">
                        {/* <label className="block mb-2 text-sm font-medium text-white text-left">Name</label> */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full h-12 px-4 rounded-xl border border-[#54463b] bg-[#181411] text-white placeholder:text-[#baa99c] focus:border-[#f2730c] focus:outline-none transition"
                        />
                    </div>

                    {/* Email */}
                    <div className="text-left">
                        {/* <label className="block mb-2 text-sm font-medium text-white text-left">Email</label> */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full h-12 px-4 rounded-xl border border-[#54463b] bg-[#181411] placeholder:text-[#baa99c] focus:border-[#f2730c] focus:outline-none transition"
                        />
                    </div>

                    {/* Phone */}
                    <div className="text-left">
                        {/* <label className="block mb-2 text-sm font-medium text-white text-left">Phone</label> */}
                        <input
                            type="text"
                            name="phone"
                            placeholder="Your phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full h-12 px-4 rounded-xl border border-[#54463b] bg-[#181411] placeholder:text-[#baa99c] focus:border-[#f2730c] focus:outline-none transition"
                        />
                    </div>

                    {/* Message */}
                    <div className="text-left">
                        {/* <label className="block mb-2 text-sm font-medium text-white text-left">Message</label> */}
                        <textarea
                            name="message"
                            placeholder="Your message"
                            value={form.message}
                            onChange={handleChange}
                            className="w-full min-h-[120px] p-4 rounded-xl border border-[#54463b] bg-[#181411] placeholder:text-[#baa99c] focus:border-[#f2730c] focus:outline-none transition resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-[#f2730c] hover:bg-[#d6600b] transition-all text-white font-bold px-6 py-3 rounded-xl w-full md:w-auto"
                        >
                            Submit
                        </button>
                    </div>

                    {/* Social / Contact Links */}
                    <div className="flex justify-center items-center gap-6 mt-6">
                        {/* Phone */}
                        <a
                            href="tel:8309159912"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-20 flex flex-col items-center text-white hover:text-[#f2730c] transition"
                        >
                            <span className="text-2xl">📞</span>
                            <span className="text-sm mt-1">Call</span>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:arkanestdesigns@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-20 flex flex-col items-center text-white hover:text-[#f2730c] transition"
                        >
                            <span className="text-2xl">📧</span>
                            <span className="text-sm mt-1">Email</span>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://instagram.com/YOUR_USERNAME"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-20 flex flex-col items-center text-white hover:text-[#f2730c] transition"
                        >
                            <span className="text-2xl">📷</span>
                            <span className="text-sm mt-1">Instagram</span>
                        </a>
                    </div>

                </form>
            </div>
        </section>
    );
};

export default Contact;
