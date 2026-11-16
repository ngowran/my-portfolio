import { useId } from "react";

// Pretty SVG sprites for the game. Each one is drawn in a 100x100 box.

export function Bloom({ hue = 330 }) {
  const id = useId().replace(/:/g, "");
  const petal = `hsl(${hue} 85% 72%)`;
  const petalDeep = `hsl(${hue} 70% 52%)`;
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full drop-shadow-md" aria-hidden>
      <defs>
        <radialGradient id={`p${id}`} cx="50%" cy="85%" r="90%">
          <stop offset="0%" stopColor={petalDeep} />
          <stop offset="100%" stopColor={petal} />
        </radialGradient>
        <radialGradient id={`c${id}`} cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#fff7c2" />
          <stop offset="100%" stopColor="#f59e0b" />
        </radialGradient>
      </defs>
      {[...Array(8)].map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="27"
          rx="12"
          ry="22"
          fill={`url(#p${id})`}
          transform={`rotate(${i * 45} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="14" fill={`url(#c${id})`} />
      <circle cx="45" cy="46" r="2" fill="#92400e" opacity=".5" />
      <circle cx="54" cy="49" r="2" fill="#92400e" opacity=".5" />
      <circle cx="49" cy="55" r="2" fill="#92400e" opacity=".5" />
    </svg>
  );
}

export function Golden() {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]" aria-hidden>
      <defs>
        <radialGradient id={`g${id}`} cx="50%" cy="80%" r="90%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fde68a" />
        </radialGradient>
      </defs>
      {[...Array(12)].map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="24"
          rx="8"
          ry="24"
          fill={`url(#g${id})`}
          stroke="#fff7"
          strokeWidth="1"
          transform={`rotate(${i * 30} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="13" fill="#fffbeb" stroke="#f59e0b" strokeWidth="3" />
      <path d="M50 41 l2.6 5.6 6 .7 -4.5 4.1 1.2 6 -5.3 -3 -5.3 3 1.2 -6 -4.5 -4.1 6 -.7z" fill="#f59e0b" />
    </svg>
  );
}

export function Bee() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full drop-shadow-md" aria-hidden>
      <g className="origin-[50px_38px] animate-[wing_120ms_ease-in-out_infinite_alternate]">
        <ellipse cx="38" cy="32" rx="14" ry="18" fill="#e0f2fe" opacity=".85" stroke="#7dd3fc" strokeWidth="1.5" transform="rotate(-25 38 32)" />
        <ellipse cx="62" cy="32" rx="14" ry="18" fill="#e0f2fe" opacity=".85" stroke="#7dd3fc" strokeWidth="1.5" transform="rotate(25 62 32)" />
      </g>
      <ellipse cx="50" cy="58" rx="26" ry="22" fill="#facc15" stroke="#1c1917" strokeWidth="2.5" />
      <path d="M38 39 q-3 19 0 38" stroke="#1c1917" strokeWidth="7" fill="none" />
      <path d="M53 36 q-3 22 0 44" stroke="#1c1917" strokeWidth="7" fill="none" />
      <path d="M75 52 l9 6 -9 6" fill="#1c1917" />
      <circle cx="31" cy="54" r="3.5" fill="#1c1917" />
      <circle cx="30" cy="53" r="1.2" fill="#fff" />
      <path d="M26 63 q4 3 8 0" stroke="#1c1917" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}
