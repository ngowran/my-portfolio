import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMapPin, HiOutlineEnvelope, HiArrowRight } from "react-icons/hi2";
import { profile } from "../data/profile";

export default function Hero() {
  const fade = (delay) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut", delay },
  });

  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-brand-400/25 via-emerald-200/20 to-pink-300/25 blur-3xl dark:from-brand-500/15 dark:via-emerald-900/10 dark:to-pink-500/10" />
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-20 pt-36 sm:px-6 md:pb-28 md:pt-44">
        <motion.p
          {...fade(0)}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-sm text-zinc-600 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
          </span>
          {profile.role} at {profile.company}
        </motion.p>

        <motion.h1
          {...fade(0.1)}
          className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-white"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-brand-600 to-emerald-500 bg-clip-text text-transparent dark:from-brand-400 dark:to-emerald-300">
            {profile.name}
          </span>
          .
        </motion.h1>

        <motion.p {...fade(0.2)} className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {profile.summary}
        </motion.p>

        <motion.div {...fade(0.3)} className="mt-6 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <HiOutlineMapPin className="h-4 w-4" /> {profile.location}
        </motion.div>

        <motion.div {...fade(0.4)} className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#experience"
            className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 dark:bg-white dark:text-zinc-900 dark:hover:bg-brand-400"
          >
            See my work
            <HiArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:border-brand-500 hover:text-brand-600 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-brand-400 dark:hover:text-brand-400"
          >
            <HiOutlineEnvelope className="h-4 w-4" /> Get in touch
          </a>
          <div className="ml-1 flex items-center gap-1">
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="rounded-full p-3 text-zinc-500 transition hover:text-zinc-900 dark:hover:text-white">
              <FaGithub className="h-5 w-5" />
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="rounded-full p-3 text-zinc-500 transition hover:text-[#0A66C2]">
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
