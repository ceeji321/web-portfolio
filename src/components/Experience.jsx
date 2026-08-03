import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-semibold text-white mb-8">
          Work Experience
        </h2>

        <div className="border-l-2 border-amber-400 pl-6">
          <p className="text-white font-medium">
            AMA Computer — Work Immersion
          </p>
          <p className="text-amber-400 text-sm mb-2">April 2024</p>
          <p className="text-slate-500 text-sm mb-3">
            Citi Appliance Bldg., Calasiao-Urdaneta Rd, Calasiao, Pangasinan
          </p>
          <ul className="text-slate-400 text-sm space-y-1 list-disc list-inside">
            <li>Assisted students with network cabling procedures</li>
            <li>
              Performed computer disassembly and reassembly for hardware
              maintenance training
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}