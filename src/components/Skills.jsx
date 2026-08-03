import { motion } from "framer-motion";

const itSkills = [
  "Network Cabling",
  "Computer Hardware",
  "Computer Maintenance",
  "Technical Troubleshooting",
];

const devSkills = ["Python", "Java", "HTML", "React JS", "Node JS"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-semibold text-white mb-10">Skills</h2>

        <div className="grid sm:grid-cols-2 gap-10">
          <div>
            <p className="text-amber-400 text-sm font-medium mb-4 uppercase tracking-wide">
              IT & Hardware
            </p>
            <div className="flex flex-wrap gap-2">
              {itSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-full text-sm text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-amber-400 text-sm font-medium mb-4 uppercase tracking-wide">
              Programming & Development
            </p>
            <div className="flex flex-wrap gap-2">
              {devSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-full text-sm text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}