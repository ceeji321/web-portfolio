import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "./Lightbox";
import wordScramble from "../assets/academic-project/word-scramble.png";
import networkTopology from "../assets/academic-project/network-topology.png";
import contactBook from "../assets/academic-project/contact-book.png";
import trimbook from "../assets/academic-project/trimbook.png";
import specsmart from "../assets/academic-project/specsmart.png";

const projects = [
  {
    title: "Word Scramble Game",
    desc: "A command-line interface word game challenging users to unscramble letters within a set time limit.",
    tech: "Python",
    image: wordScramble,
    link: "#",
  },
  {
    title: "Network Topology Explorer",
    desc: "A web application demonstrating different network topology structures and their real-world applications.",
    tech: "HTML, CSS, JavaScript",
    image: networkTopology,
    link: "https://networktopologyproject.netlify.app/",
  },
  {
    title: "Contact Book Application",
    desc: "A Java-based desktop application for storing, searching, and archiving personal contact information.",
    tech: "Java",
    image: contactBook,
    link: "#",
  },
  {
    title: "TrimBook",
    desc: "A barbershop booking website allowing customers to browse barbers, view services, and book appointments online.",
    tech: "React, Tailwind CSS",
    image: trimbook,
    link: "#",
  },
  {
    title: "SpecSmart",
    desc: "An AI-powered tech comparison platform featuring an AI chat advisor, side-by-side device comparisons, and image-based hardware recognition.",
    tech: "React, Tailwind CSS",
    image: specsmart,
    link: "https://specsmart-zeta.vercel.app",
  },
];

export default function AcademicProjects() {
  const [activeImage, setActiveImage] = useState(null);
  const [activeAlt, setActiveAlt] = useState("");

  return (
    <section id="academic-projects" className="py-24 px-6 bg-slate-950">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-white mb-10">Academic Projects</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group border border-slate-800 rounded-lg overflow-hidden hover:border-amber-400 transition-colors">
              <button onClick={() => { setActiveImage(project.image); setActiveAlt(project.title); }} className="block w-full overflow-hidden cursor-zoom-in">
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
              </button>
              <div className="p-4">
                <p className="text-white font-medium mb-2">{project.title}</p>
                <p className="text-slate-400 text-sm mb-3">{project.desc}</p>
                <div className="flex items-center justify-between">
                  <p className="text-amber-400 text-xs">{project.tech}</p>
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-xs text-slate-400 hover:text-amber-400">Visit site &rarr;</a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Lightbox image={activeImage} alt={activeAlt} onClose={() => setActiveImage(null)} />
    </section>
  );
}