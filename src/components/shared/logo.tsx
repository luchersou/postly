export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <svg
        width="32"
        height="32"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="56" height="52" rx="12" fill="#6366f1" />
        <polygon points="8,52 20,52 14,62" fill="#6366f1" />
        <polygon
          points="22,10 28,26 34,18 26,40 20,22 14,30"
          fill="white"
        />
      </svg>
      <span className="text-lg font-semibold tracking-tight">Postly</span>
    </a>
  );
}