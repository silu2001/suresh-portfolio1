import React from 'react';
import { motion } from 'framer-motion';
import { Send, Coffee, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message Sent Successfully 🎉");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Playful Divider Top */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -mt-[1px]">
                <svg fill="#fff0f5" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-[100%] h-[40px]">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#fff0f5] rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-[#ffb8b8]/40 border-4 border-white flex flex-col md:flex-row gap-12 items-center"
                >
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-black text-[#ff4757] mb-4">Let's Chat! 💬</h2>
                        <p className="text-xl text-[#ff6b81] mb-8">
                            Have a cool project in mind? Or just want to talk about the best coffee spots? I'm all ears!
                        </p>
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="inline-flex items-center justify-center p-6 bg-white rounded-full text-[#ff4757] shadow-lg mb-8"
                        >
                            <Coffee size={40} />
                        </motion.div>

                        <div className="flex justify-center md:justify-start gap-4 mb-8 md:mb-0">
                            {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ scale: 1.2, rotate: 5, backgroundColor: "#ffb8b8", color: "#fff" }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 bg-white text-[#ff6b81] rounded-full shadow-sm transition-colors border border-transparent hover:border-[#ffb8b8]"
                                >
                                    <Icon size={24} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <form className="flex-1 w-full space-y-4" onSubmit={onSubmit}>
                        <div>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="What's your name?"
                                className="w-full px-6 py-4 rounded-full bg-white border-2 border-transparent focus:border-[#ffb8b8] focus:outline-none focus:ring-4 focus:ring-[#fff0f5] transition-all text-gray-700 shadow-sm"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Where can I reach you?"
                                className="w-full px-6 py-4 rounded-full bg-white border-2 border-transparent focus:border-[#ffb8b8] focus:outline-none focus:ring-4 focus:ring-[#fff0f5] transition-all text-gray-700 shadow-sm"
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                required
                                rows="4"
                                placeholder="Tell me everything..."
                                className="w-full px-6 py-4 rounded-[2rem] bg-white border-2 border-transparent focus:border-[#ffb8b8] focus:outline-none focus:ring-4 focus:ring-[#fff0f5] transition-all text-gray-700 shadow-sm resize-none"
                            ></textarea>
                        </div>
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full px-8 py-4 bg-[#ff4757] text-white rounded-full font-bold text-lg transition-all shadow-[0_6px_0_#ff6b81] hover:shadow-[0_2px_0_#ff6b81] hover:translate-y-1 hover:bg-[#ff5e6d] flex items-center justify-center gap-2"
                        >
                            Send Message <Send size={20} />
                        </motion.button>
                        <span className="block text-center text-[#ff6b81] font-medium mt-4">{result}</span>
                    </form>
                </motion.div>
            </div>

            <footer className="text-center pb-8 pt-12 text-[#ffb8b8] font-medium">
                <p>Made with 💖 and a lot of ☕ by Suresh</p>
            </footer>
        </section>
    );
};

export default Contact;
