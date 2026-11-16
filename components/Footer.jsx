import Link from "next/link";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>
          Built with Next.js &amp; Tailwind ·{" "}
          <Link href="/game" className="hover:text-brand-600">🌼 play a game</Link>
        </p>
      </div>
    </footer>
  );
}
