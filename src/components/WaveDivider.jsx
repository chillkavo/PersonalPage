// Structural section transitions styled after the Great Wave off Kanagawa,
// reinterpreted as calm contour lines at rest (top/bottom of the page) and a
// steeper, more dynamic crest around the Experience/Projects sections — the
// wave's character changes as the visitor moves through the story.
const PATHS = {
  calm: 'M0,64 C240,20 480,100 720,64 C960,28 1200,92 1440,56 L1440,120 L0,120 Z',
  dynamic: 'M0,72 C180,10 360,110 540,50 C720,-6 900,118 1080,48 C1260,12 1350,70 1440,40 L1440,120 L0,120 Z',
}

export default function WaveDivider({ tone = 'calm', flip = false }) {
  const d = PATHS[tone]
  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`}
      style={{ height: '70px' }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path d={d} fill="#1C2541" opacity="0.9" />
        <path
          d={d}
          fill="none"
          stroke="#00B4D8"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          transform="translate(0,-6)"
        />
        <path
          d={d}
          fill="none"
          stroke="#6FFFE9"
          strokeOpacity="0.2"
          strokeWidth="1"
          transform="translate(0,-12)"
        />
      </svg>
    </div>
  )
}
