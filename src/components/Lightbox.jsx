import { motion, AnimatePresence } from "framer-motion";

export default function Lightbox({ image, alt, onClose }) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6 cursor-zoom-out"
        >
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            src={image}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full rounded-lg border border-slate-700"
          />
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white text-3xl leading-none hover:text-amber-400"
          >
            &times;
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}