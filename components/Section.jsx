import { motion } from "framer-motion";

export function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28 ${className}`}>
      <Reveal className="mb-12">
        {eyebrow && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
