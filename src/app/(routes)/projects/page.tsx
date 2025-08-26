"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: "SSSOVMS",
    title: "SSSOVMS",
    description: "a management system made for national level NGO to manage their volunteers.",
        href: "https://github.com/aniismess/vms",
  },
  {
    id: "hotfiles",
    title: "hotfiles",
    description: "my personal dotfiles with installation script for i3-wm arch linux setup.",
    href: "https://github.com/aniismess/hotfiles",
  },
  {
    id: "Jresume",
    title: "Jresume",
    description: "application for building resumes with pre-defined templates.",
    href: "https://github.com/aniismess/resumebuilder",  },
];

export default function Projects() {
  return (
    <motion.div className="relative flex flex-col gap-4">
      {projects.map((project) => (
        <motion.a
          key={project.id}
          href={project.href}
          target="_blank"
          className="relative z-10 -mx-1 flex cursor-pointer flex-col gap-1 rounded-lg border border-secondary-foreground bg-secondary p-4  hover:bg-secondary/80 hover:shadow-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          rel="noreferrer"
        >
          <h1 className="relative z-10 text-sm font-medium md:text-base">{project.title}</h1>
          <p className="text-sm text-secondary-foreground relative z-10">
            {project.description}
          </p>
        </motion.a>
      ))}
    </motion.div>
  );
}
