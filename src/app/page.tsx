"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-4 bg-white bg-opacity-10 backdrop-blur sticky top-0 shadow-lg z-50">
        <div className="text-2xl font-bold">✍️ RepurposeAI</div>
        <a
          href="#contact"
          className="border border-white hover:bg-white hover:text-black transition font-semibold py-2 px-6 rounded-full"
        >
          Get Started
        </a>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 py-16 max-w-3xl mx-auto">
        <motion.h1
          className="text-5xl font-extrabold mb-4 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          One Asset, Endless Content
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Upload your video, podcast or blog → get LinkedIn posts, X threads,
          Instagram captions, newsletters & more—tailored to your voice.
        </motion.p>
        <motion.a
          href="#features"
          className="inline-block border border-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-black transition shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          👉 See How It Works
        </motion.a>
      </section>

      {/* Features */}
      <section id="features" className="bg-white bg-opacity-5 backdrop-blur py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Features at a Glance</h2>
          <ul className="space-y-4 text-lg">
            <li>• Upload once, generate multiple formats</li>
            <li>• AI models your brand voice from past posts</li>
            <li>• Platform-specific optimization: LinkedIn, X, Instagram, newsletters</li>
            <li>• Auto-scheduling & analytics add-on</li>
            <li>• Feedback-driven learning for sharper future content</li>
          </ul>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
          {[
            { step: '1', title: 'Upload Asset', desc: 'Video, podcast, webinar or blog URL' },
            { step: '2', title: 'Select Formats', desc: 'LinkedIn, X threads, IG captions, newsletter drafts' },
            { step: '3', title: 'Get Ready-to-Post', desc: 'Assets optimized for engagement' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 border border-white bg-white bg-opacity-10 rounded-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">{item.step}</div>
              <h3 className="text-2xl font-semibold mb-1">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white bg-opacity-5 backdrop-blur py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Pricing Plans</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: 'Starter', price: '$30/mo', perks: ['30 assets', 'Basic repurposing'] },
              { name: 'Growth', price: '$150/mo', perks: ['100 assets', 'Voice modeling', 'Platform tips'] },
              { name: 'Pro', price: '$300/mo', perks: ['Unlimited assets', 'Auto-schedule', 'Feedback loop'] },
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                className="p-6 border border-white rounded-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.perks.map((perk, i) => (
                    <li key={i}>• {perk}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-12 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Repurpose?</h2>
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
      <footer className="text-center text-sm opacity-70 py-6">
        © {new Date().getFullYear()} RepurposeAI. All rights reserved.
      </footer>
    </main>
  );
}
