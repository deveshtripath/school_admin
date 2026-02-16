import React from "react";

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

const paths = {
  home: <path d="M4 10.5 12 4l8 6.5v8a2 2 0 0 1-2 2h-4v-6H10v6H6a2 2 0 0 1-2-2z" {...common} />,
  spark: (
    <path
      d="M12 2l1.8 5.4L19 9.2l-5.2 1.8L12 16l-1.8-5L5 9.2l5.2-1.8z"
      fill="currentColor"
      stroke="none"
    />
  ),
  doc: <path d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z M14 3v4h4" {...common} />,
  check: <path d="M20 6 9 17l-5-5" {...common} />,
  upload: <path d="M12 16V4m0 0 4 4m-4-4L8 8M4 20h16" {...common} />,
  chart: <path d="M4 19V5m0 14h16M8 17v-6m4 6V7m4 10v-4" {...common} />,
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" {...common} />
      <path d="M16 3.1a4 4 0 0 1 0 7.8" {...common} />
      <path d="M12 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" {...common} />
    </>
  ),
  calendar: <path d="M8 2v3m8-3v3M4 7h16M6 11h4m-4 4h4m4-4h4m-4 4h4M5 4h14a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" {...common} />,
  bell: <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7M13.7 21a2 2 0 0 1-3.4 0" {...common} />,
  shield: <path d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6z" {...common} />,
  logout: <path d="M10 17l1 1-1-1zm8-5H10m8 0-3-3m3 3-3 3M4 4h6a2 2 0 0 1 2 2v2M6 20h4a2 2 0 0 0 2-2v-2" {...common} />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" {...common} />,
  download: <path d="M12 3v10m0 0 4-4m-4 4-4-4M4 21h16" {...common} />,
  flag: <path d="M6 21V4m0 0h10l-1 3 1 3H6" {...common} />
};

export default function Icon({ name, size = 18, title }) {
  const content = paths[name] || null;
  return (
    <svg className="icon" viewBox="0 0 24 24" width={size} height={size} aria-label={title} role={title ? "img" : "presentation"}>
      {content}
    </svg>
  );
}

