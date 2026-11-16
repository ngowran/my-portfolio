import { HiAcademicCap, HiArrowUpRight, HiTrophy } from "react-icons/hi2";
import Section, { Reveal } from "./Section";
import { achievements, education } from "../data/profile";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Where I studied">
      <Reveal>
        <div className="flex flex-col gap-4 rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-50 to-white p-6 sm:flex-row sm:items-center sm:p-8 dark:from-brand-500/10 dark:to-zinc-900/50">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
            <HiAcademicCap className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{education.degree}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{education.date}</p>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">{education.school}</p>
            <p className="mt-2 text-sm font-medium text-brand-700 dark:text-brand-400">{education.result}</p>
          </div>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.05}>
            <a
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full gap-4 rounded-2xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand-500/50 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <HiTrophy className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-zinc-900 dark:text-white">{a.title}</h3>
                  <HiArrowUpRight className="h-4 w-4 shrink-0 text-zinc-400 transition group-hover:text-brand-600" />
                </div>
                <p className="text-xs font-medium text-zinc-500">{a.year}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{a.text}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
