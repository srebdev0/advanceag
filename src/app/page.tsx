"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Placeholder data for testimonials
const testimonials = [
  { quote: "RepurposeAI cut my content creation time by 80%!", author: "– Priya, Content Lead" },
  { quote: "Our LinkedIn engagement doubled in a month.", author: "– Ahmed, Marketing Manager" },
  { quote: "Love the AI voice modeling—always sounds like me!", author: "– Sara, Founder" },
];

export default function Page() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // cycle testimonials every 5s
  useState(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-4 bg-white bg-opacity-10 backdrop-blur sticky top-0 shadow-lg z-50">
        <div className="text-2xl font-bold">✍️ RepurposeAI</div>
        <ul className="flex space-x-6">
          <li><a href="#features" className="hover:underline">Features</a></li>
          <li><a href="#workflow" className="hover:underline">Workflow</a></li>
          <li><a href="#integrations" className="hover:underline">Integrations</a></li>
          <li><a href="#pricing" className="hover:underline">Pricing</a></li>
          <li><a href="#faq" className="hover:underline">FAQ</a></li>
        </ul>
        <a
          href="#contact"
          className="border border-white hover:bg-white hover:text-black transition font-semibold py-2 px-6 rounded-full"
        >
          Request Demo
        </a>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 py-24 max-w-3xl mx-auto">
        <motion.h1
          className="text-6xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          One Asset, Endless Content
        </motion.h1>
        <motion.p
          className="text-xl mb-8 max-w-2xl"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Turn a single video, blog or podcast into LinkedIn posts, X threads, Instagram captions, newsletters and more—instantly, in your authentic voice.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="#features"
            className="inline-block border border-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-black transition shadow-lg"
          >
            👉 See It Live
          </a>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white bg-opacity-5 backdrop-blur py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Key Features</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { title: "Voice Modeling", desc: "AI learns your tone from past posts for authentic output." },
              { title: "Multi-Format Generation", desc: "LinkedIn, X, Instagram, newsletters, blog summaries." },
              { title: "Platform-Optimized", desc: "Length & style tailored for each channel." },
              { title: "Auto-Scheduling", desc: "Integrate with Buffer, Hootsuite & native APIs." },
              { title: "Analytics & Feedback", desc: "Track performance & improve future assets." },
              { title: "One-Click Revisions", desc: "Tweak tone, length, or emphasis instantly." },
            ].map((f, idx) => (
              <motion.div
                key={idx}
                className="p-6 border border-white bg-white bg-opacity-10 rounded-lg"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { step: '1', title: 'Upload', desc: 'Video, podcast, webinar or blog URL' },
              { step: '2', title: 'Customize', desc: 'Select formats & voice preference' },
              { step: '3', title: 'Publish', desc: 'Download or auto-schedule assets' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="p-6 border border-white bg-white bg-opacity-10 rounded-lg"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div className="text-4xl font-bold mb-2">{item.step}</div>
                <h3 className="text-2xl font-semibold mb-1">{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="bg-white bg-opacity-5 backdrop-blur py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Seamless Integrations</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['Buffer','Hootsuite','LinkedIn','Twitter','Instagram'].map((logo, idx) => (
              <div key={idx} className="p-4 bg-white bg-opacity-10 rounded-lg">
                <span className="font-semibold text-xl">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Preview */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Analytics & Feedback</h2>
          <div className="h-64 bg-white bg-opacity-10 rounded-lg flex items-center justify-center">
            {/* Replace with actual chart component */}
            <p className="italic">[Interactive performance chart goes here]</p>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="bg-white bg-opacity-5 backdrop-blur py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What Users Say</h2>
          <motion.blockquote
            className="italic text-lg mb-4"
            key={currentTestimonial}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            “{testimonials[currentTestimonial].quote}”
          </motion.blockquote>
          <p className="font-semibold">{testimonials[currentTestimonial].author}</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'How long until I get my assets?', a: 'Most users receive ready-to-post content within minutes.' },
              { q: 'Can I tweak tone or length?', a: 'Yes! One-click revisions let you fine-tune any asset.' },
              { q: 'What platforms are supported?', a: 'LinkedIn, X, Instagram, newsletters, blogs & more.' },
              { q: 'Is scheduling included?', a: 'Available in Growth & Pro plans via integrations.' },
            ].map((item, idx) => (
              <details key={idx} className="bg-white bg-opacity-10 rounded-lg p-4">
                <summary className="font-semibold cursor-pointer">{item.q}</summary>
                <p className="mt-2">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white bg-opacity-5 backdrop-blur py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Pricing Plans</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { name: 'Starter', price: '$30/mo', perks: ['30 assets/month', 'Basic repurposing'] },
              { name: 'Growth', price: '$150/mo', perks: ['100 assets/month', 'Voice modeling', 'Platform tips'] },
              { name: 'Pro', price: '$300/mo', perks: ['Unlimited assets', 'Auto-schedule', 'Feedback loop'] },
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                className="p-6 border border-white rounded-lg"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2 mb-4">
                  {plan.perks.map((perk, i) => <li key={i}>• {perk}</li>)}
                </ul>
                <a href="#contact" className="inline-block border border-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition">
                  Choose Plan
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get Started Today</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-white bg-opacity-10 border border-white" />
            <input type="email" placeholder="Email Address" className="w-full p-3 rounded-lg bg-white bg-opacity-10 border border-white" />
            <button type="submit" className="w-full border border-white font-bold py-3 rounded-lg hover:bg-white hover:text-black transition">
              Request Demo
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white bg-opacity-5 backdrop-blur text-center text-sm opacity-70 py-8 px-6">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li><a className="hover:underline">About Us</a></li>
              <li><a className="hover:underline">Blog</a></li>
              <li><a className="hover:underline">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul className="space-y-1">
              <li><a className="hover:underline">Help Center</a></li>
              <li><a className="hover:underline">API Docs</a></li>
              <li><a className="hover:underline">Developers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <ul className="flex space-x-4 justify-center">
              <li><a className="hover:underline">LinkedIn</a></li>
              <li><a className="hover:underline">X</a></li>
              <li><a className="hover:underline">Instagram</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-6">© $(date +%Y) RepurposeAI. All rights reserved.</p>
      </footer>
    </main>
  );
}
