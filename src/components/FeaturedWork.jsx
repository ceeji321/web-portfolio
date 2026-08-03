import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "./Lightbox";
import aadStudio from "../assets/featured-work/aad-studio.png";

export default function FeaturedWork() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="featured-work" className="py-24 px-6 bg-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-semibold text-white mb-10">
          Featured Work
        </h2>

        <div className="group border border-slate-800 rounded-lg overflow-hidden hover:border-amber-400 transition-colors">
          <button
            onClick={() => setActiveImage(aadStudio)}
            className="block w-full overflow-hidden cursor-zoom-in"
          >
            <img
              src={aadStudio}
              alt="AAD Studio Portfolio Website"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </button>
          <div className="p-6">
            <p className="text-white text-lg font-medium mb-2">
              AAD Studio — Architect Portfolio Website
            </p>
            <p className="text-slate-400 text-sm mb-3">
              Client project for Napoleon Anulacion Jr. (AAD Studio). Built a
              fully responsive portfolio website featuring a custom lightbox
              image gallery, styled navigation, and optimized hero sections
              for showcasing architectural work.
            </p>
            <p className="text-amber-400 text-xs">
              React &middot; Vite &middot; Tailwind CSS
            </p>
          </div>
        </div>
      </motion.div>

      <Lightbox
        image={activeImage}
        alt="AAD Studio Portfolio Website"
        onClose={() => setActiveImage(null)}
      />
    </section>
  );
}