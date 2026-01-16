"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            Getting a ride is simple. We make medical transportation easy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {HOW_IT_WORKS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-20 h-20 bg-green text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg"
              >
                {item.step}
              </motion.div>
              <h3 className="text-xl font-semibold text-navy mb-2">{item.title}</h3>
              <p className="text-gray">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Connecting lines for desktop */}
        <div className="hidden md:flex justify-center mt-8">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <span className="text-green text-2xl">📱</span>
            <div className="w-24 h-1 bg-green/30 rounded" />
            <span className="text-green text-2xl">🚐</span>
            <div className="w-24 h-1 bg-green/30 rounded" />
            <span className="text-green text-2xl">🏥</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
