"use client";
import { motion } from "framer-motion";

const experiences = [
//   {
//     id: "1",
//     title: "some fucking job",
//     href: "https://example.com",
//     date: "June 2026",
//   },
  {
    id: "2",
    title: "Freelancing",
    href: "https://github.com/aniismess",
    date: "June 2025 - Present",
  },
  {
    id: "3",
    title: "backend intern at SSSOMPCG",
    href: "https://ssssompcg.org/",
    date: "May 2025 - July 2025",
  },
];

export default function Experience() {
  return (
    <section className="relative flex flex-col gap-4">
      <div className="space-y-4">
        {experiences.map((experience, index) => (
          <motion.a
            key={experience.id}
            href={experience.href}
            target="_blank"
            rel="noreferrer"
            className="relative z-10 flex cursor-pointer flex-col gap-10 rounded-lg border border-secondary-foreground bg-secondary p-4 hover:shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ 
              duration: 0.3
            }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs md:text-base">
                {experience.date}
              </span>
              <h3 className="text-xs md:text-base">
                {experience.id === "3" ? (
                  <>
                    FullStack Intern at{" "}
                    <span className="underline decoration-dashed underline-offset-[5px]">
                      SSSOMPCG
                    </span>
                  </>
                ) : experience.id === "2" ? (
                  <>
                    Freelancing at{" "}
                    <span className="underline decoration-dashed underline-offset-[5px]">
                      GitHub
                    </span>
                  </>
                
                ) : (
                  experience.title
                )}
              </h3>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}