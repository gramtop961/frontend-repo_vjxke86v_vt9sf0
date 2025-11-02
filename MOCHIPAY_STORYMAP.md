MochiPay Interactive Story Map and Architecture

Navigation Map and Folder Structure
- src/
  - App.jsx (router + layout)
  - main.jsx (existing)
  - index.css (existing)
  - store.js (global mock state + actions + chime)
  - components/
    - Navbar.jsx (top navigation)
    - Hero.jsx (Spline hero + CTA)
    - Features.jsx (cards linking to routes)
    - SavingsNarrative.jsx (goal progress story)
    - CelebrationRoom.jsx (/celebrations)
    - TransactionJourney.jsx (/storytelling)
    - SecuritySphere.jsx (/safety)
    - CoachArena.jsx (/coach)
    - PaymentPlayground.jsx (/playground)
    - Dashboard.jsx (/dashboard)

React Router Structure (in App.jsx)
- / → Landing (Hero, Features, SavingsNarrative)
- /celebrations → CelebrationRoom
- /storytelling → TransactionJourney
- /safety → SecuritySphere
- /coach → CoachArena
- /playground → PaymentPlayground
- /dashboard → Dashboard

State Management Strategy
- Implemented: lightweight Context + useReducer for mock data and actions.
- Recommended evolution: swap to Zustand for ergonomics or Redux Toolkit for complex flows.
- Store shape example:
  {
    user: { id, name },
    preferences: { soundOn },
    xp: number,
    streak: number,
    badges: [{ id, name, icon, earnedAt }],
    goals: [{ id, title, target, saved }],
    transactions: [{ id, date, amount, merchant, category, status }],
    security: { score, lastCheck, tips: string[] }
  }
- Actions: ADD_TXN, SAVE_PROGRESS, TOGGLE_SOUND, ADD_BADGE, INCREMENT_XP, SET_STREAK
- Utilities: playChime() WebAudio beep on success interactions

Story Beats and Interactions per Route
1) / (Landing)
   - Tone: Warm, inviting, celebratory
   - Visual: Full-width Spline cover with floating credit cards; amber-orange gradient overlay
   - Interactions: motion fade-in of headline; CTA buttons to Playground (practice) and Journey (learn)
   - Animations: framer-motion enter transitions; subtle gradient wash

2) /celebrations (CelebrationRoom)
   - Tone: High-energy cheer squad
   - Mochi line: “You did it! XP +{xp}. Streak {streak} days.”
   - Interactions: Tap a primary button to play a chime; badges float on hover
   - Animations: spring-in panel; hover lift on badges; confetti icon flair

3) /storytelling (TransactionJourney)
   - Tone: Curious narrator
   - Mochi line: “Each payment is a step. Let’s replay your highlights!”
   - Interactions: Scroll reveals timeline cards; color-coded amounts
   - Animations: slide-in on view; staggered list

4) /safety (SecuritySphere)
   - Tone: Calm guardian
   - Mochi line: “I’m your shield. Let’s keep your credits cozy and safe.”
   - Interactions: Hover morph on security card; safety tips list
   - Animations: animated border-radius morph; gradient score text

5) /coach (CoachArena)
   - Tone: Encouraging coach
   - Mochi line: “Mini wins make mega momentum.”
   - Interactions: XP Boost button adds XP and plays chime
   - Animations: hover scale and tap micro-interactions

6) /playground (PaymentPlayground)
   - Tone: Safe experiment lab
   - Mochi line: “Try a safe, simulated transfer. I’ll guide every step.”
   - Interactions: Input recipient and amount → Send Mock Payment; new txn added; XP +6
   - Animations: hover lift on action; feedback copy

7) /dashboard (Dashboard)
   - Tone: Proud mentor
   - Mochi line: “Your journey glows! Keep the streak alive.”
   - Interactions: Progress bars for goals; recent activity feed; badges overview
   - Animations: card slide-in; animated progress bars

Animation and Sound Design Notes
- Each route has at least one framer-motion transition
- WebAudio chime in store.playChime() used on celebratory actions
- Spline hero is interactive by default; overlay uses pointer-events: none so scene stays interactive

Visual Sitemap (text tree)
/
├─ Hero (Spline Cover)
├─ Features →
│  ├─ /celebrations (CelebrationRoom)
│  ├─ /storytelling (TransactionJourney)
│  ├─ /safety (SecuritySphere)
│  └─ /playground (PaymentPlayground)
└─ SavingsNarrative
/celebrations
/storytelling
/safety
/coach
/playground
/dashboard
