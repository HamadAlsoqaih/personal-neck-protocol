import { useState, useEffect, useMemo, memo } from "react";

const data = {
  phases: [
    {
      id: 1,
      title: "Release & Activate",
      weeks: "Weeks 1–2",
      freq: "Daily · 15-20 min",
      sections: [
        {
          name: "Release",
          time: "5 min",
          exercises: [
            {
              name: "Upper Trap Release",
              how: "Lacrosse ball against wall. Lean into tender spots in upper trap.",
              sets: "30-60 sec per spot",
              reps: "Each side",
              cue: null,
              video: null,
            },
            {
              name: "Suboccipital Release",
              how: "Lie on back. Two taped lacrosse balls (peanut shape) at base of skull. Let gravity do the work.",
              sets: "2 min",
              reps: "—",
              cue: null,
              video: null,
            },
          ],
        },
        {
          name: "Stretch",
          time: "5 min",
          exercises: [
            {
              name: "SCM Stretch",
              how: "Sit tall, hand under thigh on stretch side. Rotate head away from that side, then gently tilt chin up toward ceiling.",
              sets: "2 reps each side",
              reps: "30 sec hold",
              cue: null,
              video: "https://www.youtube.com/watch?v=MOcggg0rNTI",
            },
            {
              name: "Upper Trap Stretch",
              how: "Drop ear to opposite shoulder. Reach down with the other hand.",
              sets: "2 reps each side",
              reps: "30 sec hold",
              cue: null,
              video: "https://www.youtube.com/watch?v=38IMHVBgots",
            },
            {
              name: "Levator Scapulae Stretch",
              how: "Turn head 45° toward armpit. Gently pull head down with hand.",
              sets: "2 reps each side",
              reps: "30 sec hold",
              cue: null,
              video: null,
            },
          ],
        },
        {
          name: "Deep Neck Flexor Activation",
          time: "5-10 min",
          exercises: [
            {
              name: "Supine Chin Nod",
              how: "Lie on back, knees bent. Gently nod 'yes' — imagine rotating around a dowel through your ears. Feel the back of your neck lengthen.",
              sets: "3 × 10",
              reps: "5 sec hold each",
              cue: "If your SCM bulges hard, you're going too aggressively. The movement is small and subtle.",
              video: "https://www.youtube.com/watch?v=HUdnNs-NbJg",
            },
            {
              name: "Wall Lean Chin Tuck",
              how: "Sit in chair with head against wall. Chin nod, then lift head barely off wall. Hair still touching.",
              sets: "3 × 3-5",
              reps: "5 sec hold each",
              cue: null,
              video: "https://www.youtube.com/watch?v=yemVMNDrFqs",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Build Motor Control",
      weeks: "Weeks 3–4",
      freq: "Phase 1 daily + Strength 3×/week · 20 min",
      sections: [
        {
          name: "Strengthening",
          time: "20 min · 3×/week",
          exercises: [
            {
              name: "Supine Head Lift + Chin Tuck",
              how: "Chin nod FIRST, then lift head just off ground. If you can't hold the tuck, go back to wall leans.",
              sets: "3 × 8-10",
              reps: "5-10 sec hold",
              cue: null,
              video: null,
            },
            {
              name: "Isometric Neck Holds (4 directions)",
              how: "Sit tall, chin tucked. Palm against forehead, back of head, each side. 50-60% effort. NO movement — purely isometric.",
              sets: "3 reps each direction",
              reps: "5-6 sec hold",
              cue: "4 directions: forward, back, left, right",
              video: null,
            },
            {
              name: "Prone T-W Raises",
              how: "Face down. Arms in T (thumbs up), hold 3 sec. Then W (elbows bent, squeeze blades), hold 3 sec. No weight. Skip Y if it aggravates your shoulder.",
              sets: "2 × 8 each position",
              reps: "3 sec hold",
              cue: "Shoulder note: Zero weight. Skip Y position if anterior shoulder discomfort.",
              video: null,
            },
            {
              name: "Seated Scapular Retraction",
              how: "Sit tall. Squeeze shoulder blades together and DOWN toward back pockets.",
              sets: "3 × 12",
              reps: "5 sec hold",
              cue: null,
              video: null,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Load & Strengthen",
      weeks: "Weeks 5–8",
      freq: "Release/stretch daily + Strength 3×/week · 25-30 min",
      sections: [
        {
          name: "Progressive Loading",
          time: "25-30 min · 3×/week",
          exercises: [
            {
              name: "Plate-Loaded Neck Curl",
              how: "Supine on bench, head off edge. Towel + 2.5-5 lb plate on forehead. Chin tuck first, curl up. 2 sec up, 2 sec down.",
              sets: "2 × 15-20",
              reps: "Slow tempo",
              cue: "Progress load when you can do 20 clean reps.",
              video: null,
            },
            {
              name: "Plate-Loaded Neck Extension",
              how: "Prone on bench, head off edge. Towel + plate on back of head. Extend to neutral ONLY — no hyperextension.",
              sets: "2 × 15-20",
              reps: "Controlled",
              cue: null,
              video: null,
            },
            {
              name: "Plate-Loaded Lateral Curl",
              how: "Side-lying. Towel + plate on temple. Lateral flex up.",
              sets: "2 × 12-15",
              reps: "Each side",
              cue: null,
              video: null,
            },
            {
              name: "Isometric Holds (Upgraded)",
              how: "Same 4 directions, now at 70-80% effort. Add a second angle with neck slightly rotated.",
              sets: "3 reps each direction",
              reps: "8-10 sec hold",
              cue: "Isometrics transfer ~30° around the trained angle. Use two positions per direction.",
              video: null,
            },
            {
              name: "Band Pull-Aparts",
              how: "Light band, arms extended forward. Pull apart to shoulder width. Squeeze rear delts and mid traps.",
              sets: "3 × 15-20",
              reps: "—",
              cue: null,
              video: null,
            },
            {
              name: "Push-Up Plus (Wall)",
              how: "Wall push-ups. At the top, push extra — protract shoulder blades apart. This fires serratus anterior.",
              sets: "3 × 12",
              reps: "—",
              cue: "Shoulder-safe. Critical for scapular stability.",
              video: null,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Maintenance",
      weeks: "Week 9+",
      freq: "2-3×/week neck work + daily habits",
      sections: [
        {
          name: "Neck Training (add to sessions)",
          time: "2-3×/week",
          exercises: [
            { name: "Neck Curls", how: "Same as Phase 3.", sets: "2 × 15-20", reps: "—", cue: null, video: null },
            { name: "Neck Extensions", how: "Same as Phase 3.", sets: "3 × 15-20", reps: "—", cue: null, video: null },
            { name: "Lateral Curls", how: "Same as Phase 3.", sets: "2 × 12-15 each", reps: "—", cue: null, video: null },
            { name: "Isometrics (3 directions)", how: "Forward, back, lateral.", sets: "2 reps each", reps: "10 sec hold", cue: null, video: null },
            { name: "Band Pull-Aparts / Face Pulls", how: "Light band or cable.", sets: "3 × 15", reps: "—", cue: null, video: null },
          ],
        },
        {
          name: "Daily Non-Negotiables",
          time: "Every day, forever",
          exercises: [
            { name: "Chin Tucks", how: "At desk, in car, standing. Spread throughout the day.", sets: "3 × 10", reps: "Throughout day", cue: null, video: null },
            { name: "SCM + Upper Trap Stretch", how: "Same as Phase 1.", sets: "2× daily", reps: "30 sec each side", cue: null, video: "https://www.youtube.com/watch?v=MOcggg0rNTI" },
            { name: "Suboccipital Release", how: "Lacrosse balls at skull base.", sets: "End of work day", reps: "2 min", cue: null, video: null },
          ],
        },
      ],
    },
  ],
  workstation: [
    { rule: "Monitor top at or slightly below eye level" },
    { rule: "Screen at arm's length (20-26 inches)" },
    { rule: "Laptop: external keyboard + mouse, laptop on stand" },
    { rule: "Phone at eye level — stop dropping your head" },
    { rule: "Break every 45-60 min: stand, 10 chin tucks, walk 2 min" },
  ],
  videos: [
    { name: "Chin Tuck Progressions", url: "https://www.youtube.com/watch?v=HUdnNs-NbJg" },
    { name: "Chin Tuck on Wall", url: "https://www.youtube.com/watch?v=yemVMNDrFqs" },
    { name: "SCM Stretch", url: "https://www.youtube.com/watch?v=MOcggg0rNTI" },
    { name: "SCM Stretch (alt)", url: "https://www.youtube.com/watch?v=dxj12Qk5v28" },
    { name: "Upper Trap / FHP Fix", url: "https://www.youtube.com/watch?v=38IMHVBgots" },
    { name: "Deep Cervical Flexor Activation", url: "https://www.youtube.com/watch?v=SLfXiM5ENzU" },
  ],
  timeline: [
    { when: "Weeks 1–2", what: "Tension relief, improved awareness" },
    { when: "Weeks 3–4", what: "Daily tightness drops" },
    { when: "Weeks 6–8", what: "Visible posture change" },
    { when: "Weeks 8–12", what: "Significant correction" },
    { when: "3–6 months", what: "New posture is your default" },
  ],
  redFlags: [
    "Numbness or tingling down your arm",
    "Pain increases with the program",
    "Symptoms worsen or spread",
  ],
};

const TABS = [
  { id: "program", label: "Program" },
  { id: "videos", label: "Videos" },
  { id: "desk", label: "Desk Setup" },
  { id: "timeline", label: "Timeline" },
];

const STORAGE_KEY = "neckProtocolTracker";

function themeTokens(theme, accent) {
  const dark = theme === "dark";
  const hue = accent === "amber" ? 80 : accent === "indigo" ? 265 : 195;
  return {
    bg: dark ? "oklch(17% 0.014 250)" : "oklch(98% 0.006 250)",
    surface: dark ? "oklch(22% 0.016 250)" : "oklch(100% 0 0)",
    surfaceAlt: dark ? "oklch(25% 0.018 250)" : "oklch(96% 0.007 250)",
    border: dark ? "oklch(32% 0.02 250)" : "oklch(90% 0.012 250)",
    text: dark ? "oklch(95% 0.008 250)" : "oklch(22% 0.02 250)",
    textMuted: dark ? "oklch(70% 0.02 250)" : "oklch(45% 0.02 250)",
    textFaint: dark ? "oklch(52% 0.02 250)" : "oklch(58% 0.02 250)",
    accent: dark ? `oklch(76% 0.13 ${hue})` : `oklch(50% 0.13 ${hue})`,
    accentText: dark ? `oklch(15% 0.02 ${hue})` : `oklch(99% 0.006 ${hue})`,
    accentSoftBg: dark ? `oklch(26% 0.03 ${hue})` : `oklch(94% 0.03 ${hue})`,
    accentShadow: dark ? `oklch(76% 0.13 ${hue} / 0.35)` : `oklch(50% 0.13 ${hue} / 0.3)`,
    accentGradient: `linear-gradient(135deg, oklch(${dark ? "80%" : "58%"} 0.13 ${hue}), oklch(${dark ? "68%" : "46%"} 0.14 ${hue + 40}))`,
    borderShadow: dark ? "oklch(0% 0 0 / 0.3)" : "oklch(50% 0.02 250 / 0.12)",
    cardShadow: dark
      ? "0 1px 2px oklch(0% 0 0 / 0.4), 0 8px 24px oklch(0% 0 0 / 0.28)"
      : "0 1px 2px oklch(50% 0.02 250 / 0.06), 0 8px 20px oklch(50% 0.02 250 / 0.08)",
    streakColor: dark ? "oklch(72% 0.16 45)" : "oklch(55% 0.17 45)",
    warnBg: dark ? "oklch(27% 0.05 80)" : "oklch(94% 0.05 80)",
    warnBorder: dark ? "oklch(40% 0.08 80)" : "oklch(80% 0.09 80)",
    warnText: dark ? "oklch(78% 0.13 80)" : "oklch(45% 0.13 80)",
    dangerBg: dark ? "oklch(25% 0.05 25)" : "oklch(94% 0.045 25)",
    dangerBorder: dark ? "oklch(38% 0.09 25)" : "oklch(82% 0.09 25)",
    dangerText: dark ? "oklch(70% 0.17 25)" : "oklch(50% 0.18 25)",
    dangerTextSoft: dark ? "oklch(66% 0.1 25)" : "oklch(45% 0.1 25)",
  };
}

function cssVars(t) {
  return {
    "--bg": t.bg,
    "--surface": t.surface,
    "--surface-alt": t.surfaceAlt,
    "--border": t.border,
    "--text": t.text,
    "--text-muted": t.textMuted,
    "--text-faint": t.textFaint,
    "--accent": t.accent,
    "--accent-text": t.accentText,
    "--accent-soft-bg": t.accentSoftBg,
    "--accent-shadow": t.accentShadow,
    "--accent-gradient": t.accentGradient,
    "--border-shadow": t.borderShadow,
    "--card-shadow": t.cardShadow,
    "--streak-color": t.streakColor,
    "--warn-bg": t.warnBg,
    "--warn-border": t.warnBorder,
    "--warn-text": t.warnText,
    "--danger-bg": t.dangerBg,
    "--danger-border": t.dangerBorder,
    "--danger-text": t.dangerText,
    "--danger-text-soft": t.dangerTextSoft,
  };
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function diffDays(a, b) {
  return Math.round((new Date(a) - new Date(b)) / 86400000);
}

function parsePhaseDays(weeksStr) {
  if (/\+/.test(weeksStr)) return Infinity;
  const nums = (weeksStr.match(/\d+/g) || []).map(Number);
  if (nums.length >= 2) return (nums[1] - nums[0] + 1) * 7;
  if (nums.length === 1) return nums[0] * 7;
  return Infinity;
}

const initialStore = {
  theme: "dark",
  accent: "teal",
  checked: {},
  checkedDate: null,
  completedPhases: [],
  streak: 0,
  lastActiveDate: null,
  daysDone: {},
};

const NeckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" />
    <path d="M8 14v2a4 4 0 0 0 8 0v-2" />
    <path d="M12 20v2" />
  </svg>
);

const FlameIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c1 3-3 4-3 8a3 3 0 0 0 6 0c0-1-.5-2-1-2 1.5 1 3 3 3 5.5A5.5 5.5 0 0 1 11.5 19 5.5 5.5 0 0 1 6 13.5C6 8 12 6 12 2z" />
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9z" />
  </svg>
);

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

const PlayIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5,3 19,12 5,21" />
  </svg>
);

const ChevronDown = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const AlertIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CheckBadge = ({ accent, accentText }) => (
  <svg width="15" height="15" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill={accent} />
    <polyline points="8 12 11 15 16 9" fill="none" stroke={accentText} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TabIcon = { program: ChecklistTabIcon, videos: PlayIcon, desk: MonitorIcon, timeline: ClockIcon };

function ChecklistTabIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

const ExerciseCard = memo(function ExerciseCard({ ex, index, checked, open, onToggleCheck, onToggleOpen }) {
  return (
    <div className={`exercise-card${checked ? " checked" : ""}`} style={{ animationDelay: `${index * 45}ms` }}>
      <div className="exercise-row">
        <button
          className={`ex-checkbox${checked ? " checked" : ""}`}
          onClick={onToggleCheck}
          aria-label="Mark done"
        >
          {checked && <CheckIcon />}
        </button>
        <button className={`ex-toggle${checked ? " checked" : ""}`} onClick={onToggleOpen}>
          <span className="ex-name">{ex.name}</span>
          <span className="ex-sets">{ex.sets}</span>
          <span className={`ex-chevron${open ? " open" : ""}`}>
            <ChevronDown />
          </span>
        </button>
      </div>
      {open && (
        <div className="ex-detail">
          <p className="ex-how">{ex.how}</p>
          {ex.reps && ex.reps !== "—" && (
            <div className="ex-reps">
              <span className="label">Reps: </span>
              {ex.reps}
            </div>
          )}
          {ex.cue && (
            <div className="ex-cue">
              <AlertIcon />
              <span>{ex.cue}</span>
            </div>
          )}
          {ex.video && (
            <a href={ex.video} target="_blank" rel="noopener noreferrer" className="ex-video-btn">
              <PlayIcon size={12} /> Watch video
            </a>
          )}
        </div>
      )}
    </div>
  );
});

function PhaseSection({ section, checked, openEx, phaseId, sectionIndex, onToggleCheck, onToggleOpen }) {
  return (
    <div className="section-block">
      <div className="section-header">
        <span className="section-name">{section.name}</span>
        <span className="section-time">{section.time}</span>
      </div>
      <div className="exercise-grid">
        {section.exercises.map((ex, i) => {
          const key = `${phaseId}-${sectionIndex}-${i}`;
          return (
            <ExerciseCard
              key={key}
              ex={ex}
              index={i}
              checked={!!checked[key]}
              open={!!openEx[key]}
              onToggleCheck={() => onToggleCheck(key)}
              onToggleOpen={() => onToggleOpen(key)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function NeckProtocol() {
  const [store, setStore] = useState(initialStore);
  const [loaded, setLoaded] = useState(false);
  const [activePhaseIdx, setActivePhaseIdx] = useState(0);
  const [tab, setTab] = useState("program");
  const [openEx, setOpenEx] = useState({});

  useEffect(() => {
    let saved = {};
    try {
      saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch (e) {
      saved = {};
    }
    const today = todayStr();
    let checked = saved.checked || {};
    let streak = saved.streak || 0;
    const lastActiveDate = saved.lastActiveDate || null;
    if (saved.checkedDate !== today) checked = {};
    if (lastActiveDate && lastActiveDate !== today && diffDays(today, lastActiveDate) > 1) {
      streak = 0;
    }
    const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    setStore({
      theme: saved.theme || (prefersLight ? "light" : "dark"),
      accent: saved.accent || "teal",
      checked,
      checkedDate: today,
      completedPhases: saved.completedPhases || [],
      streak,
      lastActiveDate,
      daysDone: saved.daysDone || {},
    });
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch (e) {
      /* ignore */
    }
  }, [loaded, store]);

  const t = useMemo(() => themeTokens(store.theme, store.accent), [store.theme, store.accent]);

  useEffect(() => {
    document.documentElement.style.background = t.bg;
    document.body.style.background = t.bg;
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }
    meta.content = t.bg;
  }, [t]);

  const enrichedPhases = useMemo(
    () =>
      data.phases.map((p) => {
        const keys = [];
        p.sections.forEach((sec, si) => sec.exercises.forEach((ex, ei) => keys.push(`${p.id}-${si}-${ei}`)));
        const doneCount = keys.filter((k) => store.checked[k]).length;
        const total = keys.length;
        const totalDays = parsePhaseDays(p.weeks);
        const daysDone = store.daysDone[p.id] || 0;
        const dayPercent = isFinite(totalDays) ? Math.min(100, Math.round((daysDone / totalDays) * 100)) : 100;
        return { ...p, keys, doneCount, total, totalDays, daysDone, dayPercent };
      }),
    [store.checked, store.daysDone]
  );

  const activePhase = enrichedPhases[activePhaseIdx];
  const isInfinitePhase = !isFinite(activePhase.totalDays);
  const heroPercent = activePhase.dayPercent;
  const heroMessage =
    activePhase.daysDone === 0
      ? "Let's get started"
      : !isInfinitePhase && activePhase.daysDone >= activePhase.totalDays
      ? "Phase complete!"
      : "Keep going";

  const toggleTheme = () => setStore((s) => ({ ...s, theme: s.theme === "dark" ? "light" : "dark" }));

  const selectPhase = (i) => setActivePhaseIdx(i);
  const selectTab = (id) => setTab(id);
  const toggleExOpen = (key) => setOpenEx((o) => ({ ...o, [key]: !o[key] }));

  const toggleExCheck = (key) => {
    setStore((s) => ({ ...s, checked: { ...s.checked, [key]: !s.checked[key] } }));
  };

  const completeToday = () => {
    const today = todayStr();
    setStore((s) => {
      const totalDays = activePhase.totalDays;
      const current = s.daysDone[activePhase.id] || 0;
      const nextDays = isFinite(totalDays) ? Math.min(totalDays, current + 1) : current + 1;
      const daysDone = { ...s.daysDone, [activePhase.id]: nextDays };
      let streak = s.streak;
      let lastActiveDate = s.lastActiveDate;
      if (lastActiveDate !== today) {
        streak += 1;
        lastActiveDate = today;
      }
      let completedPhases = s.completedPhases;
      if (isFinite(totalDays) && nextDays >= totalDays && !completedPhases.includes(activePhase.id)) {
        completedPhases = [...completedPhases, activePhase.id];
      }
      return { ...s, daysDone, streak, lastActiveDate, completedPhases, checked: {} };
    });
  };

  return (
    <div className="app-container" style={cssVars(t)}>
      <div className="app-glow" />
      <div className="app-inner">
        {/* Header */}
        <div className="header-row">
          <div className="header-left">
            <div className="icon-tile" style={{ color: t.accentText }}>
              <NeckIcon />
            </div>
            <div>
              <h1 className="header-title">Neck Protocol</h1>
              <p className="header-subtitle">Release · Activate · Strengthen · Maintain</p>
            </div>
          </div>
          <div className="header-right">
            <div className="streak-pill">
              <span className={`streak-flame${store.streak > 0 ? " active" : ""}`}>
                <FlameIcon />
              </span>
              <span className="streak-count">{store.streak}</span>
            </div>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {store.theme === "dark" ? <MoonIcon key="moon" /> : <SunIcon key="sun" />}
            </button>
          </div>
        </div>

        {/* Hero progress */}
        <div className="hero-card">
          <div
            className="hero-ring"
            style={{ background: `conic-gradient(${t.accent} ${heroPercent}%, ${t.border} 0)` }}
          >
            <div className="hero-ring-inner">{isInfinitePhase ? "∞" : `${heroPercent}%`}</div>
          </div>
          <div>
            <div className="hero-label">Phase {activePhaseIdx + 1}</div>
            <div className="hero-value">
              Day {activePhase.daysDone}
              {!isInfinitePhase && <span className="unit"> / {activePhase.totalDays}</span>}
            </div>
            <div className="hero-message">
              {activePhase.title} — {heroMessage}
            </div>
          </div>
        </div>

        {/* Tab bar */}
        <div className="tab-bar">
          {TABS.map((tb) => {
            const Icon = TabIcon[tb.id];
            return (
              <button
                key={tb.id}
                className={`tab-btn${tab === tb.id ? " active" : ""}`}
                onClick={() => selectTab(tb.id)}
              >
                <Icon />
                {tb.label}
              </button>
            );
          })}
        </div>

        {/* PROGRAM TAB */}
        {tab === "program" && (
          <div className="tab-content">
            <div className="phase-grid">
              {enrichedPhases.map((p, i) => (
                <button
                  key={p.id}
                  className={`phase-card${activePhaseIdx === i ? " active" : ""}`}
                  onClick={() => selectPhase(i)}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="phase-top-row">
                    <span className="phase-weeks">{p.weeks}</span>
                    {store.completedPhases.includes(p.id) && (
                      <span className="phase-badge">
                        <CheckBadge accent={t.accent} accentText={t.accentText} />
                      </span>
                    )}
                  </div>
                  <div className="phase-title">{p.title}</div>
                  <div className="phase-progress-row">
                    <div className="phase-progress-track">
                      <div className="phase-progress-fill" style={{ width: `${p.dayPercent}%` }} />
                    </div>
                    <span className="phase-days-label">{isFinite(p.totalDays) ? `${p.dayPercent}%` : "∞"}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="freq-bar">
              <div>
                <div className="freq-text">{activePhase.freq}</div>
                <div className="freq-done">
                  Today: {activePhase.doneCount} of {activePhase.total} done
                </div>
              </div>
              <button className="reset-btn" onClick={completeToday}>
                Complete today
              </button>
            </div>

            {activePhase.sections.map((sec, si) => (
              <PhaseSection
                key={si}
                section={sec}
                sectionIndex={si}
                phaseId={activePhase.id}
                checked={store.checked}
                openEx={openEx}
                onToggleCheck={toggleExCheck}
                onToggleOpen={toggleExOpen}
              />
            ))}

            {activePhaseIdx === 2 && (
              <div className="danger-box">
                <AlertIcon />
                <div>
                  <div className="danger-title">Before starting Phase 3</div>
                  <div className="danger-text">
                    Get a cervical MRI. You've had symptoms 1-3 years with movement-provoked pain and no dedicated
                    neck imaging. Rule out disc issues before progressive loading.
                  </div>
                </div>
              </div>
            )}

            {(activePhaseIdx === 2 || activePhaseIdx === 3) && (
              <div className="danger-box">
                <AlertIcon />
                <span className="danger-text">
                  Do NOT do neck bridges. Excessive cervical compression — risk of bone spurs.
                </span>
              </div>
            )}
          </div>
        )}

        {/* VIDEOS TAB */}
        {tab === "videos" && (
          <div className="tab-content">
            <p className="tab-intro">All exercise demonstrations</p>
            <div className="videos-grid">
              {data.videos.map((v, i) => (
                <a
                  key={i}
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-row"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="video-icon">
                    <PlayIcon size={13} />
                  </div>
                  <span className="video-name">{v.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* DESK SETUP TAB */}
        {tab === "desk" && (
          <div className="tab-content">
            <div className="desk-callout">
              <div className="desk-callout-title">Do this immediately</div>
              <div className="desk-callout-text">
                No exercise protocol will overcome 8-12 hours of bad desk setup. Fix these first.
              </div>
            </div>
            <div className="workstation-grid">
              {data.workstation.map((w, i) => (
                <div key={i} className="desk-row" style={{ animationDelay: `${i * 50}ms` }}>
                  <div className="desk-badge">{i + 1}</div>
                  <span className="desk-text">{w.rule}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TIMELINE TAB */}
        {tab === "timeline" && (
          <div className="tab-content">
            <p className="tab-intro">What to expect with consistency</p>
            <div className="timeline-wrap">
              <div className="timeline-line" />
              {data.timeline.map((tl, i) => (
                <div key={i} className="timeline-item" style={{ animationDelay: `${i * 70}ms` }}>
                  <div className="timeline-dot" />
                  <div className="timeline-when">{tl.when}</div>
                  <div className="timeline-what">{tl.what}</div>
                </div>
              ))}
            </div>

            <div className="redflags-box">
              <div className="redflags-title">Stop &amp; get imaging if:</div>
              {data.redFlags.map((r, i) => (
                <div key={i} className="redflag-row">
                  <span className="mark">×</span>
                  <span>{r}</span>
                </div>
              ))}
            </div>

            <div className="shoulder-note">
              <div className="shoulder-title">Shoulder restrictions</div>
              <div className="shoulder-text">
                No free-weight overhead press or barbell bench. Start prone raises with zero weight. All exercises
                designed within your clearance.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
