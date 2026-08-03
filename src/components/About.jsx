import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-900">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-white mb-6">About</h2>
        <p className="text-slate-400 leading-relaxed mb-10">
          I am a Bachelor of Science in Information Technology student at
          PHINMA University of Pangasinan, with a solid foundation in
          network cabling, computer hardware, and IT support. My technical
          toolkit spans both software development and infrastructure — I
          build web applications and desktop software using React, Java,
          Python, HTML, and Node.js, while maintaining hands-on experience
          in computer maintenance and technical troubleshooting. I am
          actively seeking opportunities to apply these skills to
          real-world projects, with the goal of growing into a well-rounded
          professional across both software development and IT
          infrastructure.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="border border-slate-800 rounded-lg p-5">
            <p className="text-amber-400 text-sm mb-1">2024 - Present</p>
            <p className="text-white font-medium">PHINMA University of Pangasinan</p>
            <p className="text-slate-400 text-sm">BS in Information Technology</p>
          </div>
          <div className="border border-slate-800 rounded-lg p-5">
            <p className="text-amber-400 text-sm mb-1">2018 - 2024</p>
            <p className="text-white font-medium">Daniel Maramba National High School</p>
            <p className="text-slate-400 text-sm">TVL - Computer System Servicing</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}