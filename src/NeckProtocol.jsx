import { useState } from "react";

// ============================================================
// PHOTOS: To add real photos, create an /img folder next to
// this file on GitHub and drop in photos named exactly like
// the "img" field below (e.g. img/supine-chin-nod.jpg).
// If a photo is missing or fails to load, the built-in
// diagram automatically shows instead. Nothing breaks.
// ============================================================

const C = {
  bg: "#0f1219", card: "#1a1f2e", cardBorder: "#2a3040", panel: "#151a25",
  panelBorder: "#252a38", text: "#e8eaf0", sub: "#8892a6", muted: "#6b7385",
  accent: "#6ec8c8", red: "#c0392b", warnBg: "#2a2215", warnBorder: "#4a3a15",
  warnText: "#d4a843", dangerBg: "#2a1515", dangerBorder: "#4a2020",
  dangerText: "#e05555", dangerSub: "#c07070", body: "#b0b8c8", figure: "#e8eaf0",
};

const D = ({ children }) => (
  <svg width="100%" viewBox="0 0 300 170" style={{ display: "block", background: "#12161f", borderRadius: 8 }}>
    <defs>
      <marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="#6ec8c8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </marker>
    </defs>
    {children}
  </svg>
);
const F = { stroke: C.figure, strokeWidth: 2.5, strokeLinecap: "round", fill: "none" };
const Acc = { stroke: C.accent, strokeWidth: 2, fill: "none", markerEnd: "url(#ar)" };
const Lbl = ({ x, y, children, anchor = "middle", color = C.sub }) => (
  <text x={x} y={y} textAnchor={anchor} fontSize="11" fill={color} fontFamily="-apple-system, sans-serif">{children}</text>
);

const diagrams = {
  trapRelease: (
    <D>
      <line x1="235" y1="20" x2="235" y2="150" stroke={C.muted} strokeWidth="3" />
      <circle cx="185" cy="45" r="12" {...F} />
      <line x1="192" y1="55" x2="212" y2="90" {...F} />
      <line x1="212" y1="90" x2="205" y2="140" {...F} />
      <circle cx="222" cy="62" r="7" fill={C.accent} />
      <Lbl x={70} y={60}>Ball between trap</Lbl>
      <Lbl x={70} y={74}>and wall</Lbl>
      <path d="M 120 65 L 205 65" {...Acc} />
      <Lbl x={70} y={130}>Lean in, hold on</Lbl>
      <Lbl x={70} y={144}>tender spots</Lbl>
    </D>
  ),
  suboccipital: (
    <D>
      <line x1="20" y1="130" x2="280" y2="130" stroke={C.muted} strokeWidth="2" />
      <circle cx="70" cy="108" r="14" {...F} />
      <line x1="84" y1="115" x2="160" y2="122" {...F} />
      <line x1="160" y1="122" x2="205" y2="85" {...F} />
      <line x1="205" y1="85" x2="230" y2="126" {...F} />
      <circle cx="56" cy="120" r="6" fill={C.accent} />
      <circle cx="66" cy="124" r="6" fill={C.accent} />
      <Lbl x={78} y={50}>2 balls at base of skull</Lbl>
      <path d="M 60 58 L 58 108" {...Acc} />
      <Lbl x={200} y={60}>Knees bent, relax 2 min</Lbl>
    </D>
  ),
  scmStretch: (
    <D>
      <circle cx="150" cy="45" r="14" transform="rotate(-20 150 45)" {...F} />
      <line x1="150" y1="59" x2="150" y2="115" {...F} />
      <line x1="150" y1="80" x2="120" y2="115" {...F} />
      <line x1="150" y1="80" x2="180" y2="112" {...F} />
      <line x1="120" y1="115" x2="118" y2="128" {...F} />
      <path d="M 165 30 A 25 25 0 0 1 178 48" {...Acc} />
      <Lbl x={232} y={35}>Rotate away +</Lbl>
      <Lbl x={232} y={49}>chin up to ceiling</Lbl>
      <Lbl x={80} y={145}>Hand under thigh</Lbl>
      <Lbl x={80} y={159}>on stretch side</Lbl>
    </D>
  ),
  trapStretch: (
    <D>
      <circle cx="150" cy="48" r="14" transform="rotate(25 150 48)" {...F} />
      <line x1="150" y1="62" x2="150" y2="118" {...F} />
      <line x1="150" y1="85" x2="190" y2="70" {...F} />
      <line x1="190" y1="70" x2="172" y2="42" {...F} />
      <path d="M 138 30 A 22 22 0 0 0 126 50" {...Acc} />
      <Lbl x={65} y={40}>Ear to opposite</Lbl>
      <Lbl x={65} y={54}>shoulder</Lbl>
      <Lbl x={232} y={100}>Opposite hand</Lbl>
      <Lbl x={232} y={114}>gently assists</Lbl>
    </D>
  ),
  levatorStretch: (
    <D>
      <circle cx="150" cy="50" r="14" transform="rotate(40 150 50)" {...F} />
      <line x1="150" y1="64" x2="150" y2="120" {...F} />
      <line x1="150" y1="88" x2="185" y2="65" {...F} />
      <line x1="185" y1="65" x2="162" y2="40" {...F} />
      <path d="M 150 22 A 30 30 0 0 1 176 34" {...Acc} />
      <Lbl x={70} y={35}>Turn 45° toward</Lbl>
      <Lbl x={70} y={49}>armpit, pull down</Lbl>
      <Lbl x={225} y={140}>Gentle pressure only</Lbl>
    </D>
  ),
  chinNod: (
    <D>
      <line x1="20" y1="135" x2="280" y2="135" stroke={C.muted} strokeWidth="2" />
      <circle cx="65" cy="112" r="14" {...F} />
      <line x1="79" y1="119" x2="160" y2="127" {...F} />
      <line x1="160" y1="127" x2="205" y2="88" {...F} />
      <line x1="205" y1="88" x2="230" y2="131" {...F} />
      <path d="M 74 96 A 30 30 0 0 1 55 92" {...Acc} />
      <Lbl x={68} y={45}>Gentle nod "yes"</Lbl>
      <Lbl x={68} y={59}>small movement</Lbl>
      <circle cx="65" cy="112" r="2.5" fill={C.accent} />
      <Lbl x={202} y={45}>Head stays on floor,</Lbl>
      <Lbl x={202} y={59}>knees bent</Lbl>
    </D>
  ),
  wallChinTuck: (
    <D>
      <line x1="70" y1="15" x2="70" y2="155" stroke={C.muted} strokeWidth="3" />
      <circle cx="92" cy="48" r="14" {...F} />
      <line x1="92" y1="62" x2="95" y2="118" {...F} />
      <line x1="95" y1="118" x2="150" y2="118" {...F} />
      <line x1="150" y1="118" x2="150" y2="150" {...F} />
      <path d="M 128 40 L 112 40" {...Acc} />
      <Lbl x={212} y={38}>Chin nod, then lift</Lbl>
      <Lbl x={212} y={52}>head barely off wall</Lbl>
      <Lbl x={212} y={66}>(hair still touching)</Lbl>
      <Lbl x={160} y={148} anchor="start">Sit tall in chair</Lbl>
    </D>
  ),
  headLift: (
    <D>
      <line x1="20" y1="135" x2="280" y2="135" stroke={C.muted} strokeWidth="2" />
      <circle cx="65" cy="100" r="14" {...F} />
      <line x1="78" y1="108" x2="160" y2="127" {...F} />
      <line x1="160" y1="127" x2="205" y2="88" {...F} />
      <line x1="205" y1="88" x2="230" y2="131" {...F} />
      <path d="M 65 80 L 65 62" {...Acc} />
      <Lbl x={72} y={45}>Tuck chin FIRST,</Lbl>
      <Lbl x={72} y={59} color={C.warnText}>then lift just off floor</Lbl>
      <Lbl x={210} y={55}>Hold 5-10 sec</Lbl>
    </D>
  ),
  isometric: (
    <D>
      <circle cx="150" cy="50" r="14" {...F} />
      <line x1="150" y1="64" x2="150" y2="120" {...F} />
      <line x1="150" y1="85" x2="112" y2="60" {...F} />
      <line x1="112" y1="60" x2="128" y2="45" {...F} />
      <path d="M 108 48 L 126 48" {...Acc} />
      <path d="M 172 48 L 158 48" stroke={C.warnText} strokeWidth="2" fill="none" markerEnd="url(#ar)" />
      <Lbl x={62} y={30}>Palm pushes,</Lbl>
      <Lbl x={62} y={44}>head resists</Lbl>
      <Lbl x={232} y={30}>NO movement</Lbl>
      <Lbl x={150} y={155}>4 directions: front, back, left, right</Lbl>
    </D>
  ),
  proneTW: (
    <D>
      <line x1="20" y1="120" x2="280" y2="120" stroke={C.muted} strokeWidth="2" />
      <circle cx="60" cy="105" r="12" {...F} />
      <line x1="72" y1="108" x2="185" y2="112" {...F} />
      <line x1="185" y1="112" x2="240" y2="112" {...F} />
      <line x1="95" y1="108" x2="80" y2="78" {...F} />
      <line x1="105" y1="110" x2="125" y2="80" {...F} />
      <path d="M 85 70 L 85 55" {...Acc} />
      <Lbl x={115} y={35}>Lift arms in T then W,</Lbl>
      <Lbl x={115} y={49}>thumbs up, squeeze blades</Lbl>
      <Lbl x={172} y={152} color={C.warnText}>Face down · no weight · skip Y</Lbl>
    </D>
  ),
  scapRetract: (
    <D>
      <circle cx="150" cy="42" r="14" {...F} />
      <line x1="150" y1="56" x2="150" y2="118" {...F} />
      <rect x="128" y="68" width="16" height="26" rx="3" fill="none" stroke={C.accent} strokeWidth="2" />
      <rect x="156" y="68" width="16" height="26" rx="3" fill="none" stroke={C.accent} strokeWidth="2" />
      <path d="M 122 81 L 138 81" {...Acc} />
      <path d="M 178 81 L 162 81" {...Acc} />
      <Lbl x={58} y={85}>Squeeze</Lbl>
      <Lbl x={242} y={85}>together</Lbl>
      <Lbl x={150} y={152}>...and DOWN toward back pockets</Lbl>
    </D>
  ),
  neckCurl: (
    <D>
      <rect x="90" y="105" width="180" height="14" rx="3" fill={C.muted} />
      <line x1="110" y1="119" x2="110" y2="150" stroke={C.muted} strokeWidth="4" />
      <line x1="245" y1="119" x2="245" y2="150" stroke={C.muted} strokeWidth="4" />
      <circle cx="62" cy="88" r="13" {...F} />
      <line x1="75" y1="94" x2="150" y2="100" {...F} />
      <line x1="150" y1="100" x2="230" y2="100" {...F} />
      <rect x="48" y="66" width="26" height="7" rx="2" fill={C.accent} />
      <path d="M 62 60 A 26 26 0 0 1 82 52" {...Acc} />
      <Lbl x={168} y={30}>Head off bench edge, towel + plate</Lbl>
      <Lbl x={168} y={44}>on forehead. Tuck chin, curl up</Lbl>
    </D>
  ),
  neckExt: (
    <D>
      <rect x="90" y="95" width="180" height="14" rx="3" fill={C.muted} />
      <line x1="110" y1="109" x2="110" y2="145" stroke={C.muted} strokeWidth="4" />
      <line x1="245" y1="109" x2="245" y2="145" stroke={C.muted} strokeWidth="4" />
      <circle cx="62" cy="100" r="13" {...F} />
      <line x1="75" y1="97" x2="150" y2="92" {...F} />
      <line x1="150" y1="92" x2="230" y2="92" {...F} />
      <rect x="48" y="112" width="26" height="7" rx="2" fill={C.accent} />
      <path d="M 58 128 A 28 28 0 0 0 46 108" {...Acc} />
      <Lbl x={168} y={30}>Face down, plate on back of head.</Lbl>
      <Lbl x={168} y={44} color={C.warnText}>Extend to neutral only</Lbl>
    </D>
  ),
  lateralCurl: (
    <D>
      <rect x="90" y="100" width="180" height="14" rx="3" fill={C.muted} />
      <line x1="110" y1="114" x2="110" y2="148" stroke={C.muted} strokeWidth="4" />
      <line x1="245" y1="114" x2="245" y2="148" stroke={C.muted} strokeWidth="4" />
      <circle cx="62" cy="93" r="13" {...F} />
      <line x1="75" y1="95" x2="230" y2="97" {...F} />
      <rect x="46" y="86" width="7" height="22" rx="2" fill={C.accent} />
      <path d="M 62 72 A 22 22 0 0 1 78 66" {...Acc} />
      <Lbl x={168} y={30}>Side-lying, plate on temple.</Lbl>
      <Lbl x={168} y={44}>Lateral flex head up</Lbl>
    </D>
  ),
  pullApart: (
    <D>
      <circle cx="150" cy="40" r="13" {...F} />
      <line x1="150" y1="53" x2="150" y2="115" {...F} />
      <line x1="150" y1="72" x2="95" y2="72" {...F} />
      <line x1="150" y1="72" x2="205" y2="72" {...F} />
      <line x1="95" y1="72" x2="205" y2="72" stroke={C.red} strokeWidth="3" strokeDasharray="5,4" />
      <path d="M 88 72 L 65 72" {...Acc} />
      <path d="M 212 72 L 235 72" {...Acc} />
      <Lbl x={150} y={140}>Arms straight, pull band apart,</Lbl>
      <Lbl x={150} y={154}>squeeze blades together</Lbl>
    </D>
  ),
  pushUpPlus: (
    <D>
      <line x1="230" y1="15" x2="230" y2="155" stroke={C.muted} strokeWidth="3" />
      <circle cx="120" cy="45" r="13" {...F} />
      <line x1="128" y1="55" x2="150" y2="120" {...F} />
      <line x1="150" y1="120" x2="158" y2="150" {...F} />
      <line x1="135" y1="70" x2="225" y2="62" {...F} />
      <path d="M 165 95 L 200 92" {...Acc} />
      <Lbl x={95} y={110}>At the top, push</Lbl>
      <Lbl x={95} y={124}>extra — spread</Lbl>
      <Lbl x={95} y={138}>blades apart</Lbl>
      <Lbl x={265} y={40}>Wall</Lbl>
    </D>
  ),
  pecStretch: (
    <D>
      <line x1="150" y1="15" x2="150" y2="155" stroke={C.muted} strokeWidth="3" strokeDasharray="4,4" />
      <circle cx="120" cy="48" r="13" {...F} />
      <line x1="120" y1="61" x2="118" y2="120" {...F} />
      <line x1="120" y1="75" x2="150" y2="60" {...F} />
      <line x1="150" y1="60" x2="152" y2="40" {...F} />
      <line x1="118" y1="120" x2="140" y2="150" {...F} />
      <path d="M 100 95 A 30 30 0 0 0 100 60" {...Acc} />
      <Lbl x={70} y={40}>Forearm on frame,</Lbl>
      <Lbl x={70} y={54}>elbow at 90°</Lbl>
      <Lbl x={215} y={110}>Step through &</Lbl>
      <Lbl x={215} y={124}>lean until chest</Lbl>
      <Lbl x={215} y={138}>stretches</Lbl>
    </D>
  ),
  thoracicExt: (
    <D>
      <line x1="20" y1="140" x2="280" y2="140" stroke={C.muted} strokeWidth="2" />
      <circle cx="150" cy="118" r="16" fill="none" stroke={C.accent} strokeWidth="2.5" />
      <Lbl x={150} y={122} color={C.accent}>roller</Lbl>
      <circle cx="70" cy="95" r="12" {...F} />
      <line x1="80" y1="102" x2="135" y2="112" {...F} />
      <line x1="135" y1="112" x2="165" y2="112" {...F} />
      <line x1="165" y1="112" x2="220" y2="135" {...F} />
      <line x1="220" y1="135" x2="240" y2="135" {...F} />
      <line x1="70" y1="83" x2="55" y2="55" {...F} />
      <path d="M 60 70 A 30 30 0 0 1 78 52" {...Acc} />
      <Lbl x={130} y={35}>Roller under upper back.</Lbl>
      <Lbl x={130} y={49}>Support head, extend back over it</Lbl>
    </D>
  ),
  wallAngel: (
    <D>
      <line x1="60" y1="12" x2="60" y2="158" stroke={C.muted} strokeWidth="3" />
      <circle cx="82" cy="42" r="13" {...F} />
      <line x1="82" y1="55" x2="84" y2="120" {...F} />
      <line x1="82" y1="70" x2="70" y2="50" {...F} />
      <line x1="70" y1="50" x2="82" y2="35" {...F} />
      <line x1="84" y1="72" x2="98" y2="52" {...F} />
      <line x1="98" y1="52" x2="86" y2="36" {...F} />
      <path d="M 82 30 L 82 18" {...Acc} />
      <path d="M 98 40 L 104 28" {...Acc} />
      <Lbl x={175} y={55}>Back flat on wall,</Lbl>
      <Lbl x={175} y={69}>slide arms up/down</Lbl>
      <Lbl x={175} y={95} color={C.warnText}>Only as high as</Lbl>
      <Lbl x={175} y={109} color={C.warnText}>stays pain-free</Lbl>
    </D>
  ),
};

const data = {
  phases: [
    {
      id: 1, title: "Release & Activate", weeks: "Weeks 1–2", freq: "Daily · 15-20 min",
      sections: [
        { name: "Release", time: "5 min", exercises: [
          { name: "Upper Trap Release", d: "trapRelease", img: "img/upper-trap-release.jpg",
            how: "Lacrosse ball between your upper trap and a wall. Lean in and hold on tender spots.",
            sets: "30-60 sec/spot", reps: "Each side", cue: null,
            video: "https://www.youtube.com/watch?v=TjGryDCabdI" },
          { name: "Suboccipital Release", d: "suboccipital", img: "img/suboccipital-release.jpg",
            how: "Lie on your back, knees bent. Two taped lacrosse balls (peanut shape) at the base of your skull. Relax and let gravity work.",
            sets: "2 min", reps: "—", cue: null,
            video: "https://www.youtube.com/watch?v=qKEnv6JiB1Q" },
        ]},
        { name: "Stretch", time: "7 min", exercises: [
          { name: "SCM Stretch", d: "scmStretch", img: "img/scm-stretch.jpg",
            how: "Sit tall, hand under thigh on the stretch side. Rotate head away from that side, then gently tilt chin up toward the ceiling.",
            sets: "2 × 30 sec", reps: "Each side", cue: null,
            video: "https://www.youtube.com/watch?v=MOcggg0rNTI" },
          { name: "Upper Trap Stretch", d: "trapStretch", img: "img/upper-trap-stretch.jpg",
            how: "Drop your ear to the opposite shoulder. Reach down with the other hand. Gentle assist with the top hand.",
            sets: "2 × 30 sec", reps: "Each side", cue: null,
            video: "https://www.youtube.com/watch?v=-r0eoFS7_5Q" },
          { name: "Levator Scapulae Stretch", d: "levatorStretch", img: "img/levator-stretch.jpg",
            how: "Turn your head 45° toward your armpit. Gently pull your head down with your hand until you feel the stretch down the side/back of the neck.",
            sets: "2 × 30 sec", reps: "Each side", cue: null,
            video: "https://www.youtube.com/watch?v=GSoXPJRnR6E" },
          { name: "Doorway Pec Stretch", d: "pecStretch", img: "img/pec-stretch.jpg",
            how: "Forearm vertical on the door frame, elbow at 90°. Step forward with the same-side leg and lean until you feel the stretch across your chest. Tight pecs are the front half of your posture problem.",
            sets: "2 × 30 sec", reps: "Each side",
            cue: "Shoulder note: keep the stretch in the chest, not the front of the shoulder joint. Ease off if the shoulder complains.",
            video: "https://www.youtube.com/watch?v=M850sCj9LHQ" },
        ]},
        { name: "Deep Neck Flexor Activation", time: "5-10 min", exercises: [
          { name: "Supine Chin Nod", d: "chinNod", img: "img/supine-chin-nod.jpg",
            how: "Lie on your back, knees bent. Gently nod 'yes' — imagine rotating around a rod through your ears. Feel the back of your neck lengthen.",
            sets: "3 × 10", reps: "5 sec hold each",
            cue: "If your SCM bulges hard, you're going too aggressively. The movement is small and subtle.",
            video: "https://www.youtube.com/watch?v=HUdnNs-NbJg" },
          { name: "Wall Lean Chin Tuck", d: "wallChinTuck", img: "img/wall-chin-tuck.jpg",
            how: "Sit in a chair with your head against a wall. Chin nod, then lift your head barely off the wall — hair still touching.",
            sets: "3 × 3-5", reps: "5 sec hold each", cue: null,
            video: "https://www.youtube.com/watch?v=yemVMNDrFqs" },
        ]},
      ],
    },
    {
      id: 2, title: "Build Motor Control", weeks: "Weeks 3–4", freq: "Phase 1 daily + Strength 3×/week · 25 min",
      sections: [
        { name: "Mobility (do first)", time: "5 min", exercises: [
          { name: "Thoracic Extension on Foam Roller", d: "thoracicExt", img: "img/thoracic-extension.jpg",
            how: "Foam roller under your upper back, knees bent, hands supporting your head. Extend your upper back over the roller. Move the roller up/down a few segments. Forward head posture rides on a stiff upper back — this frees it.",
            sets: "2 × 8", reps: "Slow, controlled",
            cue: "Keep your abs slightly engaged so the movement comes from the upper back, not the low back. Don't let your neck fall backward.",
            video: "https://www.youtube.com/watch?v=9Y11Kc0E0og" },
          { name: "Wall Angels", d: "wallAngel", img: "img/wall-angels.jpg",
            how: "Stand with back flat against a wall, chin tucked. Arms against the wall, slide them up and down like a snow angel, keeping contact.",
            sets: "2 × 10", reps: "Slow",
            cue: "Shoulder note: only slide as high as stays pain-free. Stop short of full overhead — don't force the top range with your labrum repair.",
            video: "https://www.youtube.com/watch?v=1UU4VvklQ44" },
        ]},
        { name: "Strengthening", time: "20 min · 3×/week", exercises: [
          { name: "Supine Head Lift + Chin Tuck", d: "headLift", img: "img/head-lift.jpg",
            how: "Chin nod FIRST, then lift your head just off the ground. If you can't hold the tuck during the lift, go back to wall leans.",
            sets: "3 × 8-10", reps: "5-10 sec hold", cue: null,
            video: "https://www.youtube.com/watch?v=MR-sYsHvAqo" },
          { name: "Isometric Neck Holds (4 directions)", d: "isometric", img: "img/isometric-holds.jpg",
            how: "Sit tall, chin tucked. Press your palm against forehead, back of head, then each side. Push at 50-60% effort. No movement at all.",
            sets: "3 reps each direction", reps: "5-6 sec hold",
            cue: "Directions: forward, back, left, right.",
            video: "https://www.youtube.com/watch?v=nKFW-NxVNBI" },
          { name: "Prone T-W Raises", d: "proneTW", img: "img/prone-tw.jpg",
            how: "Lie face down. Arms in T (thumbs up), hold 3 sec. Then W (elbows bent, squeeze blades), hold 3 sec. Bodyweight only.",
            sets: "2 × 8 each position", reps: "3 sec hold",
            cue: "Shoulder note: zero weight. Skip the Y position if you feel any anterior shoulder discomfort.",
            video: "https://www.youtube.com/watch?v=QdGTI4Lshg4" },
          { name: "Seated Scapular Retraction", d: "scapRetract", img: "img/scap-retraction.jpg",
            how: "Sit tall, arms at sides. Squeeze your shoulder blades together and DOWN toward your back pockets.",
            sets: "3 × 12", reps: "5 sec hold", cue: null,
            video: "https://www.youtube.com/watch?v=b1snr_g3MZY" },
        ]},
      ],
    },
    {
      id: 3, title: "Load & Strengthen", weeks: "Weeks 5–8", freq: "Release/stretch/mobility daily + Strength 3×/week · 30 min",
      sections: [
        { name: "Progressive Loading", time: "30 min · 3×/week", exercises: [
          { name: "Plate-Loaded Neck Curl", d: "neckCurl", img: "img/neck-curl.jpg",
            how: "Lie on your back on a bench, head off the edge. Towel + 2.5-5 lb plate on your forehead. Chin tuck first, then curl your head up. 2 sec up, 2 sec down.",
            sets: "2 × 15-20", reps: "Slow tempo",
            cue: "Progress the load only when you can do 20 clean reps.",
            video: "https://www.youtube.com/watch?v=o78kjeBJUBQ" },
          { name: "Plate-Loaded Neck Extension", d: "neckExt", img: "img/neck-extension.jpg",
            how: "Lie face down on a bench, head off the edge. Towel + plate on the back of your head. Extend up to neutral only — never hyperextend.",
            sets: "2 × 15-20", reps: "Controlled", cue: null,
            video: "https://www.youtube.com/watch?v=hYqVUHC-GhE" },
          { name: "Plate-Loaded Lateral Curl", d: "lateralCurl", img: "img/lateral-curl.jpg",
            how: "Lie on your side on a bench, head off the edge. Towel + light plate on your temple. Lateral flex your head up toward your shoulder. Same setup as the neck curl video, just on your side.",
            sets: "2 × 12-15", reps: "Each side", cue: null,
            video: "https://www.youtube.com/watch?v=o78kjeBJUBQ" },
          { name: "Isometric Holds — Upgraded", d: "isometric", img: "img/isometric-holds.jpg",
            how: "Same 4 directions, now at 70-80% effort. Add a second angle with your neck slightly rotated.",
            sets: "3 reps each direction", reps: "8-10 sec hold",
            cue: "Isometric strength transfers roughly 30° around the trained angle — that's why you use two positions.",
            video: "https://www.youtube.com/watch?v=nKFW-NxVNBI" },
          { name: "Band Pull-Aparts", d: "pullApart", img: "img/band-pull-apart.jpg",
            how: "Light band, arms extended at chest height. Pull the band apart until it touches your chest. Squeeze rear delts and mid traps. Keep shoulders down.",
            sets: "3 × 15-20", reps: "—", cue: null,
            video: "https://www.youtube.com/watch?v=LoBBo1dtY6I" },
          { name: "Push-Up Plus (Wall)", d: "pushUpPlus", img: "img/push-up-plus.jpg",
            how: "Wall push-ups. At the top, push extra — spread your shoulder blades apart. This fires the serratus anterior.",
            sets: "3 × 12", reps: "—",
            cue: "Shoulder-safe and critical for scapular stability.",
            video: "https://www.youtube.com/watch?v=ILNQF20c1dU" },
        ]},
      ],
    },
    {
      id: 4, title: "Maintenance", weeks: "Week 9+", freq: "2-3×/week neck work + daily habits",
      sections: [
        { name: "Neck Training (add to sessions)", time: "2-3×/week", exercises: [
          { name: "Neck Curls", d: "neckCurl", img: "img/neck-curl.jpg", how: "Same as Phase 3.", sets: "2 × 15-20", reps: "—", cue: null, video: "https://www.youtube.com/watch?v=o78kjeBJUBQ" },
          { name: "Neck Extensions", d: "neckExt", img: "img/neck-extension.jpg", how: "Same as Phase 3.", sets: "3 × 15-20", reps: "—", cue: null, video: "https://www.youtube.com/watch?v=hYqVUHC-GhE" },
          { name: "Lateral Curls", d: "lateralCurl", img: "img/lateral-curl.jpg", how: "Same as Phase 3.", sets: "2 × 12-15 each", reps: "—", cue: null, video: "https://www.youtube.com/watch?v=o78kjeBJUBQ" },
          { name: "Isometrics (3 directions)", d: "isometric", img: "img/isometric-holds.jpg", how: "Forward, back, lateral.", sets: "2 reps each", reps: "10 sec hold", cue: null, video: "https://www.youtube.com/watch?v=nKFW-NxVNBI" },
          { name: "Band Pull-Aparts / Face Pulls", d: "pullApart", img: "img/band-pull-apart.jpg", how: "Light band or cable.", sets: "3 × 15", reps: "—", cue: null, video: "https://www.youtube.com/watch?v=LoBBo1dtY6I" },
        ]},
        { name: "Daily Non-Negotiables", time: "Every day, forever", exercises: [
          { name: "Chin Tucks", d: "wallChinTuck", img: "img/wall-chin-tuck.jpg", how: "At your desk, in the car, standing. Spread throughout the day.", sets: "3 × 10", reps: "Throughout day", cue: null, video: "https://www.youtube.com/watch?v=HUdnNs-NbJg" },
          { name: "SCM + Upper Trap Stretch", d: "scmStretch", img: "img/scm-stretch.jpg", how: "Same as Phase 1.", sets: "2× daily", reps: "30 sec each side", cue: null, video: "https://www.youtube.com/watch?v=MOcggg0rNTI" },
          { name: "Doorway Pec Stretch", d: "pecStretch", img: "img/pec-stretch.jpg", how: "Keep the front of the chain open. Same as Phase 1.", sets: "1× daily", reps: "30 sec each side", cue: null, video: "https://www.youtube.com/watch?v=M850sCj9LHQ" },
          { name: "Suboccipital Release", d: "suboccipital", img: "img/suboccipital-release.jpg", how: "Lacrosse balls at the base of your skull.", sets: "End of work day", reps: "2 min", cue: null, video: "https://www.youtube.com/watch?v=qKEnv6JiB1Q" },
        ]},
      ],
    },
  ],
  workstation: [
    "Monitor top at or slightly below eye level",
    "Screen at arm's length (20-26 inches)",
    "Laptop: external keyboard + mouse, laptop on a stand",
    "Phone at eye level — stop dropping your head",
    "Break every 45-60 min: stand, 10 chin tucks, walk 2 min",
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
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21" /></svg>
);
const Chevron = ({ open }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s", flexShrink: 0 }}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const Alert = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

function ExerciseCard({ ex }) {
  const [open, setOpen] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);
  const showDiagram = imgFailed || !ex.img;
  return (
    <div style={{ background: C.card, borderRadius: 10, marginBottom: 8, overflow: "hidden", border: `1px solid ${C.cardBorder}` }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", background: "none", border: "none", color: C.text, fontFamily: "inherit", fontSize: 15, fontWeight: 600, textAlign: "left", cursor: "pointer", gap: 8 }}>
        <span style={{ flex: 1 }}>{ex.name}</span>
        <span style={{ fontSize: 12, color: C.accent, fontWeight: 500, whiteSpace: "nowrap" }}>{ex.sets}</span>
        <Chevron open={open} />
      </button>
      {open && (
        <div style={{ padding: "0 16px 14px", borderTop: `1px solid ${C.cardBorder}` }}>
          <div style={{ margin: "12px 0" }}>
            {!showDiagram && (
              <img src={ex.img} alt={ex.name} onError={() => setImgFailed(true)}
                style={{ width: "100%", borderRadius: 8, display: "block" }} />
            )}
            {showDiagram && diagrams[ex.d]}
          </div>
          <p style={{ margin: "0 0 10px", color: C.body, fontSize: 14, lineHeight: 1.55 }}>{ex.how}</p>
          {ex.reps && ex.reps !== "—" && (
            <div style={{ fontSize: 13, color: C.sub, marginBottom: 10 }}>
              <span style={{ color: C.accent, fontWeight: 600 }}>Hold/Reps: </span>{ex.reps}
            </div>
          )}
          {ex.cue && (
            <div style={{ display: "flex", gap: 6, alignItems: "flex-start", padding: "8px 10px", background: C.warnBg, borderRadius: 6, marginBottom: 10, border: `1px solid ${C.warnBorder}` }}>
              <span style={{ color: C.warnText, marginTop: 1, flexShrink: 0 }}><Alert /></span>
              <span style={{ fontSize: 13, color: C.warnText, lineHeight: 1.45 }}>{ex.cue}</span>
            </div>
          )}
          {ex.video && (
            <a href={ex.video} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "9px 16px", background: C.red, borderRadius: 6, color: "#fff", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
              <PlayIcon /> Watch Video
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function Section({ section }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10, paddingBottom: 6, borderBottom: `1px solid ${C.panelBorder}` }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: C.accent, textTransform: "uppercase", letterSpacing: 0.8 }}>{section.name}</span>
        <span style={{ fontSize: 12, color: C.muted }}>{section.time}</span>
      </div>
      {section.exercises.map((ex, i) => <ExerciseCard key={i} ex={ex} />)}
    </div>
  );
}

function Warning({ title, children }) {
  return (
    <div style={{ display: "flex", gap: 8, padding: "12px 14px", background: C.dangerBg, borderRadius: 8, border: `1px solid ${C.dangerBorder}`, marginTop: 8 }}>
      <span style={{ color: C.dangerText, flexShrink: 0, marginTop: 1 }}><Alert /></span>
      <div>
        {title && <div style={{ fontSize: 13, fontWeight: 700, color: C.dangerText, marginBottom: 4 }}>{title}</div>}
        <div style={{ fontSize: 13, color: C.dangerSub, lineHeight: 1.5 }}>{children}</div>
      </div>
    </div>
  );
}

export default function NeckProtocol() {
  const [activePhase, setActivePhase] = useState(0);
  const [tab, setTab] = useState("program");
  const tabs = [
    { id: "program", label: "Program" },
    { id: "desk", label: "Desk Setup" },
    { id: "timeline", label: "Timeline" },
  ];
  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", maxWidth: 480, margin: "0 auto" }}>
      <div style={{ padding: "20px 16px 0", textAlign: "center" }}>
        <h1 style={{ fontSize: 22, fontWeight: 800, margin: 0, letterSpacing: -0.5, color: "#fff" }}>NECK PROTOCOL</h1>
        <p style={{ fontSize: 13, color: C.muted, margin: "4px 0 16px" }}>Release · Activate · Strengthen · Maintain</p>
      </div>

      <div style={{ display: "flex", gap: 4, padding: "0 12px", marginBottom: 16 }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{ flex: 1, padding: "10px 0", fontSize: 13, fontWeight: tab === t.id ? 700 : 500, color: tab === t.id ? C.bg : C.sub, background: tab === t.id ? C.accent : C.card, border: "none", borderRadius: 8, cursor: "pointer", fontFamily: "inherit" }}>{t.label}</button>
        ))}
      </div>

      {tab === "program" && (
        <div style={{ padding: "0 12px 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 16 }}>
            {data.phases.map((p, i) => (
              <button key={p.id} onClick={() => setActivePhase(i)} style={{ padding: "12px 10px", background: activePhase === i ? "#1e2a38" : "#14181f", border: activePhase === i ? `2px solid ${C.accent}` : "2px solid #1e2330", borderRadius: 10, cursor: "pointer", textAlign: "left", fontFamily: "inherit" }}>
                <div style={{ fontSize: 11, color: activePhase === i ? C.accent : "#5a6375", fontWeight: 600, marginBottom: 2 }}>{p.weeks}</div>
                <div style={{ fontSize: 14, color: activePhase === i ? "#fff" : C.sub, fontWeight: 700 }}>{p.title}</div>
              </button>
            ))}
          </div>

          <div style={{ padding: "10px 14px", background: C.panel, borderRadius: 8, marginBottom: 16, border: `1px solid ${C.panelBorder}` }}>
            <div style={{ fontSize: 12, color: C.accent, fontWeight: 600 }}>{data.phases[activePhase].freq}</div>
          </div>

          {data.phases[activePhase].sections.map((sec, i) => <Section key={i} section={sec} />)}

          {activePhase === 2 && (
            <Warning title="Before starting Phase 3">
              Get a cervical MRI first. You've had symptoms 1-3 years with movement-provoked pain and no dedicated neck imaging. Rule out disc issues before progressive loading.
            </Warning>
          )}
          {(activePhase === 2 || activePhase === 3) && (
            <Warning>Do NOT do neck bridges. Excessive cervical compression — risk of bone spurs.</Warning>
          )}
        </div>
      )}

      {tab === "desk" && (
        <div style={{ padding: "0 12px 40px" }}>
          <div style={{ padding: "14px 16px", background: "#1e2a38", borderRadius: 10, border: `2px solid ${C.accent}`, marginBottom: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: C.accent, marginBottom: 4 }}>Do this immediately</div>
            <div style={{ fontSize: 13, color: C.sub, lineHeight: 1.5 }}>No exercise protocol will overcome 8-12 hours of bad desk setup. Fix these first.</div>
          </div>
          {data.workstation.map((rule, i) => (
            <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", padding: "14px 16px", background: C.card, borderRadius: 10, marginBottom: 8, border: `1px solid ${C.cardBorder}` }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: C.panel, border: `2px solid ${C.accent}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 13, fontWeight: 700, color: C.accent }}>{i + 1}</div>
              <span style={{ fontSize: 14, color: "#c8cdd8", lineHeight: 1.45 }}>{rule}</span>
            </div>
          ))}
        </div>
      )}

      {tab === "timeline" && (
        <div style={{ padding: "0 12px 40px" }}>
          <p style={{ fontSize: 13, color: C.muted, margin: "0 0 16px 4px" }}>What to expect with consistency</p>
          <div style={{ position: "relative", paddingLeft: 24 }}>
            <div style={{ position: "absolute", left: 7, top: 8, bottom: 8, width: 2, background: `linear-gradient(to bottom, ${C.accent}, ${C.cardBorder})`, borderRadius: 2 }} />
            {data.timeline.map((t, i) => (
              <div key={i} style={{ position: "relative", marginBottom: 20 }}>
                <div style={{ position: "absolute", left: -20, top: 4, width: 12, height: 12, borderRadius: "50%", background: C.bg, border: `2px solid ${C.accent}` }} />
                <div style={{ fontSize: 13, fontWeight: 700, color: C.accent, marginBottom: 2 }}>{t.when}</div>
                <div style={{ fontSize: 14, color: C.body, lineHeight: 1.45 }}>{t.what}</div>
              </div>
            ))}
          </div>
          <Warning title="Stop & get imaging if:">
            Numbness or tingling down your arm · Pain increases with the program · Symptoms worsen or spread
          </Warning>
          <div style={{ marginTop: 12, padding: "14px 16px", background: C.panel, borderRadius: 10, border: `1px solid ${C.panelBorder}` }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: C.sub, marginBottom: 4 }}>Shoulder restrictions</div>
            <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.5 }}>No free-weight overhead press or barbell bench. Start prone raises with zero weight. All exercises here are designed within your clearance.</div>
          </div>
        </div>
      )}
    </div>
  );
}
