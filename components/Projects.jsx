import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import Section, { Reveal } from "./Section";
import { projects } from "../data/profile";

function Placeholder({ name }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-500 via-emerald-400 to-pink-300">
      <span className="text-3xl font-bold tracking-tight text-white/90">{name}</span>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Side projects" title="Things I've built">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={`Screenshot of ${p.name}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <Placeholder name={p.name} />
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-zinc-900 dark:text-white">{p.name}</h3>
                  <HiArrowUpRight className="h-4 w-4 shrink-0 text-zinc-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600" />
                </div>
                <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <li key={t} className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
