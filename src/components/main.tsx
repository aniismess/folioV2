"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
const roles = ["unemployed", "shitposter",  "backend-developer", "writer"];

const textVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export const Main = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex-grow">
      <div className="flex items-center justify-between mb-2">
        <div className="flex flex-col">
          <h1 className="font-ppModwest text-2xl">Animesh Mishra</h1>
          <h2 className="text-secondary-foreground mb-4 font-sm overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.7 }}
                className="block"
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </h2>
        </div>
        { <a
          href="https://drive.google.com/file/d/1mF4ymb0bEkVcQvnZ-rn_EPUEViXz2e2s/view?usp=sharing"
          className="hidden md:flex items-center gap-1 text-base text-secondary-foreground"
          download="Animesh_Mishra_Resume.pdf"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Download Resume"
        >
          resume <ExternalLink size={12} />
        </a> }
      </div>

      <p className="mb-2">
        20 y/o cs grad. I mostly code out of passion. I learn and adapt quickly. I post a lot{" "}
        <a
          href="https://github.com/aniismess"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dashed underline-offset-[5px]"
        >
          at Github
        </a>
        {" "}.
        {}
      </p>

      <p>{`Views are my own and dont reflect any organisation. Shoutout to Basketball and Studying bout niche things.`}</p>

      
    </section>
  );
};
