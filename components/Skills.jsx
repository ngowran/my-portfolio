import Section, { Reveal } from "./Section";
import { skills } from "../data/profile";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Toolbox" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">{s.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm font-medium text-zinc-800 transition hover:border-brand-500 hover:text-brand-700 dark:border-zinc-700 dark:text-zinc-200 dark:hover:text-brand-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
