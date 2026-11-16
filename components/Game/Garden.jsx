import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { Bee, Bloom, Golden } from "./Flower";

const CELLS = 9;
const ROUND_MS = 30000;
const BEST_KEY = "bloom-rush-best";
const HUES = [330, 290, 350, 10, 265, 315];
// Keyboard layout mirrors the 3x3 board.
const KEYS = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];
const NUMPAD = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];

const multiplierFor = (combo) => (combo >= 20 ? 4 : combo >= 10 ? 3 : combo >= 5 ? 2 : 1);

function readBest() {
  try {
    return Number(window.localStorage.getItem(BEST_KEY)) || 0;
  } catch {
    return 0;
  }
}

function writeBest(v) {
  try {
    window.localStorage.setItem(BEST_KEY, String(v));
  } catch {}
}

function freshGame() {
  return {
    clock: 0, // game time in ms, only advances while the tab is visible
    timeLeft: ROUND_MS,
    score: 0,
    combo: 0,
    bestCombo: 0,
    hits: 0,
    misses: 0,
    stings: 0,
    cells: Array(CELLS).fill(null),
    nextSpawn: 400,
    uid: 0,
  };
}

function Burst({ color }) {
  return (
    <>
      {[...Array(8)].map((_, i) => {
        const a = (i / 8) * Math.PI * 2;
        return (
          <motion.span
            key={i}
            className="absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full"
            style={{ background: color }}
            initial={{ x: "-50%", y: "-50%", opacity: 1, scale: 1 }}
            animate={{ x: Math.cos(a) * 46, y: Math.sin(a) * 46, opacity: 0, scale: 0.4 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          />
        );
      })}
    </>
  );
}

export default function Garden() {
  const game = useRef(freshGame());
  const raf = useRef(0);
  const last = useRef(0);
  const statusRef = useRef("idle");
  const fxId = useRef(0);
  const shake = useAnimationControls();

  const [status, setStatus] = useState("idle"); // idle | countdown | playing | over
  const [countdown, setCountdown] = useState(3);
  const [, setFrame] = useState(0);
  const [fx, setFx] = useState([]);
  const [best, setBest] = useState(0);
  const [newBest, setNewBest] = useState(false);

  useEffect(() => setBest(readBest()), []);

  const setStatusBoth = (s) => {
    statusRef.current = s;
    setStatus(s);
  };

  const addFx = useCallback((cell, text, color, burst) => {
    const id = ++fxId.current;
    setFx((list) => [...list, { id, cell, text, color, burst }]);
    setTimeout(() => setFx((list) => list.filter((f) => f.id !== id)), 800);
  }, []);

  const endGame = useCallback(() => {
    cancelAnimationFrame(raf.current);
    const g = game.current;
    g.cells = Array(CELLS).fill(null);
    const prev = readBest();
    const isBest = g.score > prev;
    if (isBest) {
      writeBest(g.score);
      setBest(g.score);
    }
    setNewBest(isBest);
    setStatusBoth("over");
  }, []);

  const spawn = useCallback(() => {
    const g = game.current;
    const empty = g.cells.map((c, i) => (c ? -1 : i)).filter((i) => i >= 0);
    if (!empty.length) return;
    const cell = empty[Math.floor(Math.random() * empty.length)];
    const progress = Math.min(g.clock / ROUND_MS, 1);
    const life = 1500 - 650 * progress;
    const r = Math.random();
    let type = "bloom";
    if (r < 0.06) type = "golden";
    else if (g.clock > 4000 && r < 0.06 + 0.12 + 0.08 * progress) type = "bee";
    g.cells[cell] = {
      id: ++g.uid,
      type,
      hue: HUES[Math.floor(Math.random() * HUES.length)],
      life: type === "bee" ? life * 1.4 : type === "golden" ? life * 0.85 : life,
      until: g.clock + (type === "bee" ? life * 1.4 : type === "golden" ? life * 0.85 : life),
    };
  }, []);

  const loop = useCallback(
    (now) => {
      const g = game.current;
      // Clamp the step so switching tabs effectively pauses the game.
      const dt = Math.min(now - (last.current || now), 100);
      last.current = now;
      g.clock += dt;
      g.timeLeft -= dt;

      g.cells = g.cells.map((c) => {
        if (c && g.clock >= c.until) {
          if (c.type !== "bee") {
            g.combo = 0;
            g.misses += 1;
          }
          return null;
        }
        return c;
      });

      if (g.clock >= g.nextSpawn) {
        const progress = Math.min(g.clock / ROUND_MS, 1);
        spawn();
        if (progress > 0.45 && Math.random() < 0.35) spawn();
        const gap = 760 - 420 * progress;
        g.nextSpawn = g.clock + gap * (0.7 + Math.random() * 0.6);
      }

      if (g.timeLeft <= 0) {
        g.timeLeft = 0;
        endGame();
        setFrame((f) => f + 1);
        return;
      }
      setFrame((f) => f + 1);
      raf.current = requestAnimationFrame(loop);
    },
    [spawn, endGame]
  );

  const start = useCallback(() => {
    if (statusRef.current === "countdown" || statusRef.current === "playing") return;
    game.current = freshGame();
    setFx([]);
    setNewBest(false);
    setStatusBoth("countdown");
    setCountdown(3);
    let n = 3;
    const tick = () => {
      n -= 1;
      if (n > 0) {
        setCountdown(n);
        setTimeout(tick, 650);
      } else {
        setStatusBoth("playing");
        last.current = 0;
        raf.current = requestAnimationFrame(loop);
      }
    };
    setTimeout(tick, 650);
  }, [loop]);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  const hit = useCallback(
    (i) => {
      if (statusRef.current !== "playing") return;
      const g = game.current;
      const c = g.cells[i];
      if (!c) return;
      g.cells[i] = null;

      if (c.type === "bee") {
        g.score = Math.max(0, g.score - 25);
        g.combo = 0;
        g.stings += 1;
        addFx(i, "−25 ouch!", "#ef4444", false);
        shake.start({ x: [0, -10, 10, -6, 6, 0], transition: { duration: 0.35 } });
        return;
      }

      g.combo += 1;
      g.bestCombo = Math.max(g.bestCombo, g.combo);
      g.hits += 1;
      const pts = (c.type === "golden" ? 50 : 10) * multiplierFor(g.combo);
      g.score += pts;
      if (c.type === "golden") {
        g.timeLeft += 2000;
        addFx(i, `+${pts} · +2s`, "#f59e0b", true);
      } else {
        addFx(i, `+${pts}`, `hsl(${c.hue} 80% 60%)`, true);
      }
    },
    [addFx, shake]
  );

  // Keyboard controls
  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key.toLowerCase();
      if ((k === " " || k === "enter") && statusRef.current !== "playing" && statusRef.current !== "countdown") {
        e.preventDefault();
        start();
        return;
      }
      let idx = KEYS.indexOf(k);
      if (idx < 0) idx = NUMPAD.indexOf(k);
      if (idx >= 0) hit(idx);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hit, start]);

  const g = game.current;
  const mult = multiplierFor(g.combo);
  const seconds = Math.ceil(g.timeLeft / 1000);
  const timePct = Math.min(100, (g.timeLeft / ROUND_MS) * 100);
  const accuracy = g.hits + g.misses ? Math.round((g.hits / (g.hits + g.misses)) * 100) : 0;

  return (
    <div className="mx-auto w-full max-w-xl">
      {/* HUD */}
      <div className="mb-4 grid grid-cols-3 items-end gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Score</p>
          <motion.p
            key={g.score}
            initial={{ scale: 1.25 }}
            animate={{ scale: 1 }}
            className="origin-left text-3xl font-bold tabular-nums text-zinc-900 dark:text-white"
          >
            {g.score}
          </motion.p>
        </div>
        <div className="text-center">
          <AnimatePresence mode="popLayout">
            {g.combo >= 2 && (
              <motion.span
                key={mult}
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.4, opacity: 0 }}
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-bold text-white shadow ${
                  mult >= 4
                    ? "bg-gradient-to-r from-fuchsia-500 to-amber-400"
                    : mult === 3
                    ? "bg-pink-500"
                    : mult === 2
                    ? "bg-brand-500"
                    : "bg-zinc-400 dark:bg-zinc-600"
                }`}
              >
                {g.combo} combo{mult > 1 && ` · x${mult}`}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <div className="text-right">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Best</p>
          <p className="text-3xl font-bold tabular-nums text-zinc-900 dark:text-white">{best}</p>
        </div>
      </div>

      {/* Timer */}
      <div className="mb-4 flex items-center gap-3">
        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
          <div
            className={`h-full rounded-full transition-colors ${
              seconds <= 5 && status === "playing" ? "bg-red-500" : "bg-gradient-to-r from-brand-500 to-emerald-400"
            }`}
            style={{ width: `${timePct}%` }}
          />
        </div>
        <span
          className={`w-10 text-right text-sm font-semibold tabular-nums ${
            seconds <= 5 && status === "playing" ? "text-red-500" : "text-zinc-600 dark:text-zinc-400"
          }`}
        >
          {seconds}s
        </span>
      </div>

      {/* Board */}
      <motion.div animate={shake} className="relative">
        <div
          className="grid select-none grid-cols-3 gap-2 rounded-3xl bg-gradient-to-b from-emerald-300 to-green-500 p-2 shadow-xl sm:gap-3 sm:p-3 dark:from-emerald-800 dark:to-green-950"
          role="group"
          aria-label="Garden: tap flowers as they bloom, avoid bees"
        >
          {g.cells.map((c, i) => (
            <button
              key={i}
              type="button"
              onPointerDown={(e) => {
                e.preventDefault();
                hit(i);
              }}
              aria-label={c ? (c.type === "bee" ? "Bee, avoid" : "Flower, tap") : "Empty patch"}
              className="relative aspect-square touch-manipulation overflow-visible rounded-2xl bg-emerald-200/40 outline-none ring-white/70 transition focus-visible:ring-4 active:scale-95 dark:bg-emerald-950/30"
              tabIndex={-1}
            >
              {/* soil */}
              <span className="absolute inset-x-[18%] bottom-[10%] h-[18%] rounded-[50%] bg-gradient-to-b from-amber-800 to-amber-950 shadow-inner" />
              <span className="absolute left-2 top-1.5 hidden text-[10px] font-bold uppercase text-emerald-900/40 md:block dark:text-emerald-200/30">
                {KEYS[i]}
              </span>

              <AnimatePresence>
                {c && (
                  <motion.div
                    key={c.id}
                    className="absolute inset-[12%] bottom-[18%]"
                    initial={{ y: 30, scale: 0.2, rotate: -20, opacity: 0 }}
                    animate={{ y: 0, scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0, rotate: 30, opacity: 0, transition: { duration: 0.18 } }}
                    transition={{ type: "spring", stiffness: 420, damping: 18 }}
                  >
                    {/* life ring */}
                    <svg viewBox="0 0 100 100" className="absolute inset-[-8%] h-[116%] w-[116%] -rotate-90" aria-hidden>
                      <circle
                        cx="50"
                        cy="50"
                        r="47"
                        fill="none"
                        strokeWidth="4"
                        strokeLinecap="round"
                        stroke={c.type === "bee" ? "#ef4444" : c.type === "golden" ? "#f59e0b" : "#ffffff"}
                        strokeOpacity=".85"
                        pathLength="100"
                        strokeDasharray="100"
                        style={{ animation: `lifering ${c.life}ms linear forwards` }}
                      />
                    </svg>
                    <div className={c.type === "bee" ? "h-full w-full animate-[buzz_0.4s_ease-in-out_infinite]" : "h-full w-full animate-[sway_1.6s_ease-in-out_infinite]"}>
                      {c.type === "bee" ? <Bee /> : c.type === "golden" ? <Golden /> : <Bloom hue={c.hue} />}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {fx
                .filter((f) => f.cell === i)
                .map((f) => (
                  <span key={f.id} className="pointer-events-none absolute inset-0">
                    {f.burst && <Burst color={f.color} />}
                    <motion.span
                      className="absolute left-1/2 top-1/3 whitespace-nowrap text-lg font-extrabold drop-shadow sm:text-xl"
                      style={{ color: f.color, WebkitTextStroke: "0.5px #fff" }}
                      initial={{ x: "-50%", y: 0, opacity: 1, scale: 0.8 }}
                      animate={{ y: -44, opacity: 0, scale: 1.15 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      {f.text}
                    </motion.span>
                  </span>
                ))}
            </button>
          ))}
        </div>

        {/* Overlays */}
        <AnimatePresence>
          {status !== "playing" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center rounded-3xl bg-zinc-950/55 p-6 text-center backdrop-blur-sm"
            >
              {status === "idle" && (
                <div>
                  <p className="text-4xl">🌸</p>
                  <h2 className="mt-2 text-3xl font-extrabold text-white">Bloom Rush</h2>
                  <p className="mx-auto mt-2 max-w-xs text-sm text-zinc-200">
                    30 seconds. Tap flowers before they wilt, chain combos, dodge the bees.
                  </p>
                  <button
                    type="button"
                    onClick={start}
                    className="mt-6 rounded-full bg-white px-7 py-3 font-bold text-zinc-900 shadow-lg transition hover:scale-105 active:scale-95"
                  >
                    Play
                  </button>
                  <p className="mt-3 hidden text-xs text-zinc-300 md:block">or press Space</p>
                </div>
              )}

              {status === "countdown" && (
                <AnimatePresence mode="popLayout">
                  <motion.p
                    key={countdown}
                    initial={{ scale: 2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    className="text-8xl font-black text-white drop-shadow-lg"
                  >
                    {countdown}
                  </motion.p>
                </AnimatePresence>
              )}

              {status === "over" && (
                <motion.div initial={{ scale: 0.85 }} animate={{ scale: 1 }}>
                  {newBest && (
                    <motion.p
                      initial={{ rotate: -8, scale: 0 }}
                      animate={{ rotate: -4, scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.2 }}
                      className="mx-auto mb-3 w-fit rounded-full bg-amber-400 px-3 py-1 text-xs font-black uppercase tracking-wider text-amber-950"
                    >
                      New best!
                    </motion.p>
                  )}
                  <p className="text-sm font-semibold uppercase tracking-widest text-zinc-300">Final score</p>
                  <p className="text-6xl font-black tabular-nums text-white">{g.score}</p>
                  <dl className="mx-auto mt-5 grid max-w-xs grid-cols-3 gap-2 text-white">
                    <div className="rounded-xl bg-white/10 p-2">
                      <dt className="text-[10px] uppercase tracking-wider text-zinc-300">Picked</dt>
                      <dd className="text-xl font-bold">{g.hits}</dd>
                    </div>
                    <div className="rounded-xl bg-white/10 p-2">
                      <dt className="text-[10px] uppercase tracking-wider text-zinc-300">Accuracy</dt>
                      <dd className="text-xl font-bold">{accuracy}%</dd>
                    </div>
                    <div className="rounded-xl bg-white/10 p-2">
                      <dt className="text-[10px] uppercase tracking-wider text-zinc-300">Best combo</dt>
                      <dd className="text-xl font-bold">{g.bestCombo}</dd>
                    </div>
                  </dl>
                  {g.stings > 0 && (
                    <p className="mt-3 text-xs text-zinc-300">
                      Stung {g.stings} time{g.stings === 1 ? "" : "s"} 🐝
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={start}
                    className="mt-6 rounded-full bg-white px-7 py-3 font-bold text-zinc-900 shadow-lg transition hover:scale-105 active:scale-95"
                  >
                    Play again
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <p className="mt-4 hidden text-center text-xs text-zinc-500 md:block">
        Keyboard: <kbd className="font-semibold">Q W E / A S D / Z X C</kbd> or the number pad
      </p>
    </div>
  );
}
