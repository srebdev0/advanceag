"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 to-green-300">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-4 bg-white bg-opacity-80 backdrop-blur sticky top-0 shadow-sm z-50">
        <div className="text-2xl font-bold text-green-800">🌱 AdvanceAg</div>
        <a
          href="#"
          className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-full transition"
        >
          Get Started
        </a>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center flex-1 px-6 py-16">
        <motion.h1
          className="text-5xl font-extrabold text-green-800 mb-4 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get Paid Now. Grow More Later.
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-green-900 mb-8 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Unlock cash advances, loyalty rewards, and carbon bonuses — all without bank headaches.
        </motion.p>
        <motion.a
          href="#"
          className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-4 px-8 rounded-full transition shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          👉 Get Your Advance Now
        </motion.a>
      </section>

      {/* Features */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6 pb-20">
        {[
          {
            title: "🚜 Fast Cash Advances",
            text: "Get money upfront for seed, fertilizer & fuel based on your acres and crop plan — no land collateral needed.",
          },
          {
            title: "🌱 Loyalty Rewards",
            text: "Earn points for cover crops, rotations, and healthy soil. Redeem for discounts or cash bonuses.",
          },
          {
            title: "🌍 Carbon Payments",
            text: "Get paid to build soil carbon — we handle all the paperwork & sell the credits for you.",
          },
          {
            title: "💰 Lower Input Costs",
            text: "Combine advances with loyalty perks to save big on next season’s inputs and services.",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white bg-opacity-80 backdrop-blur p-6 rounded-xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-green-800">
              {item.title}
            </h3>
            <p className="text-green-900">{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center text-green-900 text-sm opacity-80 pb-6">
        © {new Date().getFullYear()} AdvanceAg. All rights reserved.
      </footer>
    </main>
  );
}