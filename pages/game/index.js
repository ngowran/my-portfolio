import Head from "next/head";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";
import Nav from "../../components/Navbar";
import Garden from "../../components/Game/Garden";
import { Bee, Bloom, Golden } from "../../components/Game/Flower";

const legend = [
  { sprite: <Bloom hue={330} />, label: "Flower", value: "+10" },
  { sprite: <Golden />, label: "Golden", value: "+50 · +2s" },
  { sprite: <Bee />, label: "Bee", value: "−25" },
];

export default function Game() {
  return (
    <>
      <Head>
        <title>Bloom Rush · Niamh Gowran</title>
        <meta name="description" content="A tiny flower-picking arcade game." />
      </Head>
      <Nav />
      <main className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-medium text-zinc-500 transition hover:text-brand-600 dark:hover:text-brand-400"
        >
          <HiArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>

        <div className="mb-8 mt-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">A tiny game</p>
          <h1 className="mt-1 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">Bloom Rush</h1>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {legend.map((l) => (
              <li
                key={l.label}
                className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white py-1 pl-1 pr-3 text-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <span className="h-7 w-7">{l.sprite}</span>
                <span className="text-zinc-600 dark:text-zinc-400">{l.label}</span>
                <span className="font-bold text-zinc-900 dark:text-white">{l.value}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-zinc-500">Chain picks for combo multipliers up to x4. Missing a flower breaks your combo.</p>
        </div>

        <Garden />
      </main>
    </>
  );
}
