import { motion } from "framer-motion";

export const CircuitLines = ({ className = "" }: { className?: string }) => (
  <svg className={`absolute pointer-events-none opacity-[0.06] ${className}`} width="600" height="600" viewBox="0 0 600 600" fill="none">
    <motion.path
      d="M100 0 V200 H300 V400 H500 V600"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "linear" }}
    />
    <motion.path
      d="M300 0 V100 H500 V300 H100 V500 H400 V600"
      stroke="hsl(var(--cyan))"
      strokeWidth="1"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 6, repeat: Infinity, repeatType: "loop", ease: "linear", delay: 1 }}
    />
    <motion.circle cx="300" cy="200" r="4" fill="hsl(var(--primary))" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
    <motion.circle cx="500" cy="400" r="4" fill="hsl(var(--cyan))" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
    <motion.circle cx="100" cy="500" r="3" fill="hsl(var(--primary))" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
  </svg>
);

export const HexGrid = ({ className = "" }: { className?: string }) => (
  <svg className={`absolute pointer-events-none opacity-[0.04] ${className}`} width="800" height="800" viewBox="0 0 800 800" fill="none">
    {[0, 1, 2, 3, 4].map(row =>
      [0, 1, 2, 3].map(col => {
        const x = col * 200 + (row % 2 ? 100 : 0);
        const y = row * 170;
        return (
          <motion.polygon
            key={`${row}-${col}`}
            points={`${x},${y - 50} ${x + 43},${y - 25} ${x + 43},${y + 25} ${x},${y + 50} ${x - 43},${y + 25} ${x - 43},${y - 25}`}
            stroke="hsl(var(--primary))"
            strokeWidth="0.8"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: (row + col) * 0.3 }}
          />
        );
      })
    )}
  </svg>
);

export const FloatingOrbs = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[
      { size: 300, x: "10%", y: "20%", color: "hsl(210 100% 42% / 0.04)", delay: 0, dur: 8 },
      { size: 200, x: "80%", y: "60%", color: "hsl(195 100% 42% / 0.04)", delay: 2, dur: 10 },
      { size: 150, x: "50%", y: "80%", color: "hsl(210 100% 42% / 0.03)", delay: 4, dur: 7 },
    ].map((orb, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full blur-[100px]"
        style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.y, background: orb.color }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: orb.dur, repeat: Infinity, delay: orb.delay, ease: "easeInOut" }}
      />
    ))}
  </div>
);

export const DotGrid = ({ className = "" }: { className?: string }) => (
  <svg className={`absolute pointer-events-none opacity-[0.08] ${className}`} width="400" height="400" viewBox="0 0 400 400">
    {Array.from({ length: 10 }).map((_, row) =>
      Array.from({ length: 10 }).map((_, col) => (
        <motion.circle
          key={`${row}-${col}`}
          cx={col * 40 + 20}
          cy={row * 40 + 20}
          r="1.5"
          fill="hsl(var(--primary))"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: (row + col) * 0.15 }}
        />
      ))
    )}
  </svg>
);
