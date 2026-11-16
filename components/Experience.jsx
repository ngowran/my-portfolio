import { HiArrowUpRight } from "react-icons/hi2";
import Section, { Reveal } from "./Section";
import { experience } from "../data/profile";

function Point({ point }) {
  return (
    <li className="relative pl-5 leading-7 before:absolute before:left-0 before:top-[0.7rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-zinc-300 dark:before:bg-zinc-600">
      {point.text}
      {point.link && (
        <a href={point.link} target="_blank" rel="noopener noreferrer" aria-label="Learn more"
          className="ml-1 inline-flex translate-y-0.5 text-brand-600 hover:text-brand-700 dark:text-brand-400">
          <HiArrowUpRight className="h-4 w-4" />
        </a>
      )}
    </li>
  );
}

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience">
      <div className="space-y-6">
        {experience.map((org) => (
          <Reveal key={org.company}>
            <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
              <header className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  {org.link ? (
                    <a href={org.link} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 dark:hover:text-brand-400">
                      {org.company}
                    </a>
                  ) : (
                    org.company
                  )}
                  {org.team && <span className="font-normal text-zinc-500"> · {org.team}</span>}
                </h3>
              </header>

              <ol className="relative space-y-8 border-l border-zinc-200 pl-6 dark:border-zinc-800">
                {org.roles.map((role, i) => (
                  <li key={role.title + role.date} className="relative">
                    <span
                      className={`absolute -left-[1.85rem] top-1.5 h-3 w-3 rounded-full ring-4 ring-white dark:ring-zinc-900 ${
                        i === 0 ? "bg-brand-500" : "bg-zinc-300 dark:bg-zinc-600"
                      }`}
                    />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h4 className="font-semibold text-zinc-900 dark:text-white">{role.title}</h4>
                      <p className="text-sm tabular-nums text-zinc-500 dark:text-zinc-400">{role.date}</p>
                    </div>
                    <ul className="mt-3 space-y-2 text-[0.95rem]">
                      {role.points.map((p) => (
                        <Point key={p.text} point={p} />
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
