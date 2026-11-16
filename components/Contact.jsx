import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { Reveal } from "./Section";
import { profile } from "../data/profile";

const links = [
  { name: "Email", href: `mailto:${profile.email}`, label: profile.email, icon: HiOutlineEnvelope },
  { name: "LinkedIn", href: profile.links.linkedin, label: "in/niamh-gowran", icon: FaLinkedin },
  { name: "GitHub", href: profile.links.github, label: "@ngowran", icon: FaGithub },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-zinc-900 px-6 py-14 text-center sm:px-12 dark:bg-zinc-900">
          <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-pink-400/20 blur-3xl" />
          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">Let&apos;s talk</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-zinc-300">
            Whether it&apos;s observability, cloud infrastructure or a project idea, I&apos;d love to hear from you.
          </p>
          <ul className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {links.map(({ name, href, label, icon: Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-brand-400 hover:bg-white/10"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                  <span className="sr-only">{name}: </span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
