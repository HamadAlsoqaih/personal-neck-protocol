import { useState, memo } from "react";

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
              cue: "⚠️ Shoulder note: Zero weight. Skip Y position if anterior shoulder discomfort.",
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
};

const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21" /></svg>
);

const ChevronDown = ({ open }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const AlertIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

const ExerciseCard = memo(function ExerciseCard({ ex }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ background: "#1a1f2e", borderRadius: 10, marginBottom: 8, overflow: "hidden", border: "1px solid #2a3040" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", background: "none", border: "none", color: "#e8eaf0", fontFamily: "inherit", fontSize: 15, fontWeight: 600, textAlign: "left", cursor: "pointer", gap: 8 }}>
        <span style={{ flex: 1 }}>{ex.name}</span>
        <span style={{ fontSize: 12, color: "#6ec8c8", fontWeight: 500, whiteSpace: "nowrap", marginRight: 8 }}>{ex.sets}</span>
        <ChevronDown open={open} />
      </button>
      {open && (
        <div style={{ padding: "0 16px 14px", borderTop: "1px solid #2a3040" }}>
          <p style={{ margin: "12px 0 8px", color: "#b0b8c8", fontSize: 14, lineHeight: 1.55 }}>{ex.how}</p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: ex.cue || ex.video ? 10 : 0 }}>
            {ex.reps && ex.reps !== "—" && (
              <div style={{ fontSize: 13, color: "#8892a6" }}>
                <span style={{ color: "#6ec8c8", fontWeight: 600 }}>Reps: </span>{ex.reps}
              </div>
            )}
          </div>
          {ex.cue && (
            <div style={{ display: "flex", gap: 6, alignItems: "flex-start", padding: "8px 10px", background: "#2a2215", borderRadius: 6, marginBottom: ex.video ? 10 : 0, border: "1px solid #4a3a15" }}>
              <span style={{ color: "#d4a843", marginTop: 1, flexShrink: 0 }}><AlertIcon /></span>
              <span style={{ fontSize: 13, color: "#d4a843", lineHeight: 1.45 }}>{ex.cue}</span>
            </div>
          )}
          {ex.video && (
            <a href={ex.video} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 14px", background: "#c0392b", borderRadius: 6, color: "#fff", fontSize: 13, fontWeight: 600, textDecoration: "none", marginTop: 4 }}>
              <PlayIcon /> Watch Video
            </a>
          )}
        </div>
      )}
    </div>
  );
});

function PhaseSection({ section }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10, paddingBottom: 6, borderBottom: "1px solid #252a38" }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: "#6ec8c8", textTransform: "uppercase", letterSpacing: 0.8 }}>{section.name}</span>
        <span style={{ fontSize: 12, color: "#6b7385" }}>{section.time}</span>
      </div>
      {section.exercises.map((ex, i) => <ExerciseCard key={i} ex={ex} />)}
    </div>
  );
}

const TABS = [
  { id: "program", label: "Program" },
  { id: "videos", label: "Videos" },
  { id: "desk", label: "Desk Setup" },
  { id: "timeline", label: "Timeline" },
];

export default function NeckProtocol() {
  const [activePhase, setActivePhase] = useState(0);
  const [tab, setTab] = useState("program");

  return (
    <div style={{ minHeight: "100vh", background: "#0f1219", color: "#e8eaf0", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", maxWidth: 480, margin: "0 auto" }}>

      {/* Header */}
      <div style={{ padding: "20px 16px 0", textAlign: "center" }}>
        <h1 style={{ fontSize: 22, fontWeight: 800, margin: 0, letterSpacing: -0.5, color: "#fff" }}>NECK PROTOCOL</h1>
        <p style={{ fontSize: 13, color: "#6b7385", margin: "4px 0 16px" }}>Release · Activate · Strengthen · Maintain</p>
      </div>

      {/* Tab bar */}
      <div style={{ display: "flex", gap: 4, padding: "0 12px", marginBottom: 16, overflowX: "auto" }}>
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{ flex: 1, padding: "10px 0", fontSize: 13, fontWeight: tab === t.id ? 700 : 500, color: tab === t.id ? "#0f1219" : "#8892a6", background: tab === t.id ? "#6ec8c8" : "#1a1f2e", border: "none", borderRadius: 8, cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s", whiteSpace: "nowrap", minWidth: 70 }}>{t.label}</button>
        ))}
      </div>

      {/* PROGRAM TAB */}
      {tab === "program" && (
        <div style={{ padding: "0 12px 40px" }}>

          {/* Phase selector */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 16 }}>
            {data.phases.map((p, i) => (
              <button key={p.id} onClick={() => setActivePhase(i)} style={{ padding: "12px 10px", background: activePhase === i ? "#1e2a38" : "#14181f", border: activePhase === i ? "2px solid #6ec8c8" : "2px solid #1e2330", borderRadius: 10, cursor: "pointer", textAlign: "left", fontFamily: "inherit" }}>
                <div style={{ fontSize: 11, color: activePhase === i ? "#6ec8c8" : "#5a6375", fontWeight: 600, marginBottom: 2 }}>{p.weeks}</div>
                <div style={{ fontSize: 14, color: activePhase === i ? "#fff" : "#8892a6", fontWeight: 700 }}>{p.title}</div>
              </button>
            ))}
          </div>

          {/* Active phase info */}
          <div style={{ padding: "10px 14px", background: "#151a25", borderRadius: 8, marginBottom: 16, border: "1px solid #252a38" }}>
            <div style={{ fontSize: 12, color: "#6ec8c8", fontWeight: 600 }}>{data.phases[activePhase].freq}</div>
          </div>

          {/* Sections + exercises */}
          {data.phases[activePhase].sections.map((sec, i) => <PhaseSection key={i} section={sec} />)}

          {/* Phase 3 warning */}
          {activePhase === 2 && (
            <div style={{ display: "flex", gap: 8, padding: "12px 14px", background: "#2a1515", borderRadius: 8, border: "1px solid #4a2020", marginTop: 8 }}>
              <span style={{ color: "#e05555", flexShrink: 0, marginTop: 1 }}><AlertIcon /></span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#e05555", marginBottom: 4 }}>Before starting Phase 3</div>
                <div style={{ fontSize: 13, color: "#c07070", lineHeight: 1.5 }}>Get a cervical MRI. You've had symptoms 1-3 years with movement-provoked pain and no dedicated neck imaging. Rule out disc issues before progressive loading.</div>
              </div>
            </div>
          )}

          {/* No bridges warning */}
          {(activePhase === 2 || activePhase === 3) && (
            <div style={{ display: "flex", gap: 8, padding: "12px 14px", background: "#2a1515", borderRadius: 8, border: "1px solid #4a2020", marginTop: 8 }}>
              <span style={{ color: "#e05555", flexShrink: 0, marginTop: 1 }}><AlertIcon /></span>
              <span style={{ fontSize: 13, color: "#c07070", lineHeight: 1.5 }}>Do NOT do neck bridges. Excessive cervical compression — risk of bone spurs.</span>
            </div>
          )}
        </div>
      )}

      {/* VIDEOS TAB */}
      {tab === "videos" && (
        <div style={{ padding: "0 12px 40px" }}>
          <p style={{ fontSize: 13, color: "#6b7385", margin: "0 0 12px 4px" }}>All exercise demonstrations</p>
          {data.videos.map((v, i) => (
            <a key={i} href={v.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: "#1a1f2e", borderRadius: 10, marginBottom: 8, textDecoration: "none", border: "1px solid #2a3040" }}>
              <div style={{ width: 40, height: 40, borderRadius: 8, background: "#c0392b", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <PlayIcon />
              </div>
              <span style={{ fontSize: 15, fontWeight: 600, color: "#e8eaf0" }}>{v.name}</span>
            </a>
          ))}
        </div>
      )}

      {/* DESK SETUP TAB */}
      {tab === "desk" && (
        <div style={{ padding: "0 12px 40px" }}>
          <div style={{ padding: "14px 16px", background: "#1e2a38", borderRadius: 10, border: "2px solid #6ec8c8", marginBottom: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#6ec8c8", marginBottom: 4 }}>Do this immediately</div>
            <div style={{ fontSize: 13, color: "#8892a6", lineHeight: 1.5 }}>No exercise protocol will overcome 8-12 hours of bad desk setup. Fix these first.</div>
          </div>
          {data.workstation.map((w, i) => (
            <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", padding: "14px 16px", background: "#1a1f2e", borderRadius: 10, marginBottom: 8, border: "1px solid #2a3040" }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#151a25", border: "2px solid #6ec8c8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 13, fontWeight: 700, color: "#6ec8c8" }}>{i + 1}</div>
              <span style={{ fontSize: 14, color: "#c8cdd8", lineHeight: 1.45 }}>{w.rule}</span>
            </div>
          ))}
        </div>
      )}

      {/* TIMELINE TAB */}
      {tab === "timeline" && (
        <div style={{ padding: "0 12px 40px" }}>
          <p style={{ fontSize: 13, color: "#6b7385", margin: "0 0 16px 4px" }}>What to expect with consistency</p>
          <div style={{ position: "relative", paddingLeft: 24 }}>
            <div style={{ position: "absolute", left: 7, top: 8, bottom: 8, width: 2, background: "linear-gradient(to bottom, #6ec8c8, #2a3040)", borderRadius: 2 }} />
            {data.timeline.map((t, i) => (
              <div key={i} style={{ position: "relative", marginBottom: 20 }}>
                <div style={{ position: "absolute", left: -20, top: 4, width: 12, height: 12, borderRadius: "50%", background: "#0f1219", border: "2px solid #6ec8c8" }} />
                <div style={{ fontSize: 13, fontWeight: 700, color: "#6ec8c8", marginBottom: 2 }}>{t.when}</div>
                <div style={{ fontSize: 14, color: "#b0b8c8", lineHeight: 1.45 }}>{t.what}</div>
              </div>
            ))}
          </div>

          {/* Red flags */}
          <div style={{ marginTop: 20, padding: "14px 16px", background: "#2a1515", borderRadius: 10, border: "1px solid #4a2020" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#e05555", marginBottom: 8 }}>Stop & get imaging if:</div>
            {["Numbness or tingling down your arm", "Pain increases with the program", "Symptoms worsen or spread"].map((r, i) => (
              <div key={i} style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: i < 2 ? 6 : 0 }}>
                <span style={{ color: "#e05555" }}>×</span>
                <span style={{ fontSize: 13, color: "#c07070" }}>{r}</span>
              </div>
            ))}
          </div>

          {/* Shoulder note */}
          <div style={{ marginTop: 12, padding: "14px 16px", background: "#151a25", borderRadius: 10, border: "1px solid #252a38" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#8892a6", marginBottom: 4 }}>Shoulder restrictions</div>
            <div style={{ fontSize: 13, color: "#6b7385", lineHeight: 1.5 }}>No free-weight overhead press or barbell bench. Start prone raises with zero weight. All exercises designed within your clearance.</div>
          </div>
        </div>
      )}
    </div>
  );
}
