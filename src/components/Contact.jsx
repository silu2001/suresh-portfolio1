import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Github, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
    const [result, setResult] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending message...");
        const formData = new FormData(event.target);

        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message sent successfully.");
                event.target.reset();
            } else {
                setResult(data.message || "Something went wrong.");
            }
        } catch (error) {
            setResult("Network error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-400">
                            Get In Touch
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Ready to start your next project? Let's build something exceptional together.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-10"
                    >
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-textPrimary mb-6">Contact Information</h3>
                            
                            <div className="flex items-center gap-4 text-textSecondary border border-white/5 p-4 rounded-xl bg-surface/30">
                                <div className="w-12 h-12 bg-surface flex items-center justify-center rounded-lg border border-border text-accent">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-textSecondary/70 mb-1">Email</p>
                                    <p className="text-textPrimary text-sm sm:text-base">hello@suresh.dev</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4 text-textSecondary border border-white/5 p-4 rounded-xl bg-surface/30">
                                <div className="w-12 h-12 bg-surface flex items-center justify-center rounded-lg border border-border text-accent">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-textSecondary/70 mb-1">Location</p>
                                    <p className="text-textPrimary text-sm sm:text-base">San Francisco, CA</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-textPrimary mb-6">Social Profiles</h3>
                            <div className="flex gap-4">
                                {[Github, Twitter, Linkedin].map((Icon, i) => (
                                    <motion.a
                                        key={i}
                                        href="#"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-12 h-12 bg-surface text-textSecondary border border-border rounded-lg flex items-center justify-center hover:bg-surfaceHover hover:text-textPrimary transition-all hover:border-white/20"
                                    >
                                        <Icon size={20} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-[1.5]"
                    >
                        <form onSubmit={onSubmit} className="bg-surface/50 p-8 rounded-2xl border border-white/5 shadow-2xl backdrop-blur-sm space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-textSecondary">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accentGlow transition-all text-textPrimary placeholder-textSecondary/30 outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-textSecondary">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accentGlow transition-all text-textPrimary placeholder-textSecondary/30 outline-none"
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-textSecondary">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accentGlow transition-all text-textPrimary placeholder-textSecondary/30 outline-none resize-none"
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-8 py-4 bg-textPrimary text-background rounded-lg font-semibold text-base transition-all shadow-lg hover:bg-white hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                {!isSubmitting && <Send size={18} />}
                            </motion.button>

                            {result && (
                                <motion.p 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center text-sm font-medium text-textSecondary"
                                >
                                    {result}
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
