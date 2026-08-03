import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-slate-950"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-32 h-32 rounded-full overflow-hidden border-2 border-amber-400 mb-6"
      >
        <img
          src="/src/assets/profile.png"
          alt="CJ F. Cendana"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl md:text-5xl font-semibold text-white mb-3"
      >
        CJ F. Cendana
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-amber-400 text-lg mb-4"
      >
        Web Developer | BSIT Student
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-slate-400 max-w-xl mb-8"
      >
        A Bachelor of Science in Information Technology student specializing
        in web development and network infrastructure. Experienced in
        front-end development, computer hardware maintenance, and technical
        troubleshooting.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <button
          onClick={() =>
            document
              .getElementById("featured-work")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="px-6 py-3 bg-amber-400 text-slate-950 font-medium rounded-lg hover:bg-amber-300 transition-colors"
        >
          View My Work
        </button>
      </motion.div>
    </section>
  );
}