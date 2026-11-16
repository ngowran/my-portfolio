import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiBars3, HiXMark } from "react-icons/hi2";
import logo from "../public/logo.png";

const navigation = [
  { name: "Experience", href: "/#experience" },
  { name: "Education", href: "/#education" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Contact", href: "/#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-zinc-200/70 bg-white/80 backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/80"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/#top" className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-white">
          <Image src={logo} alt="" width={32} height={32} className="h-8 w-8 rounded-full" priority />
          <span>Niamh Gowran</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition hover:text-brand-600 dark:text-zinc-400 dark:hover:text-brand-400"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-zinc-700 md:hidden dark:text-zinc-300"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <HiXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <ul className="space-y-1 px-4 pb-4 md:hidden">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
