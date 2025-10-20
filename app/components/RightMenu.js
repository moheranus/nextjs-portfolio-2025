import { useEffect, useState } from "react";
import clsx from "clsx";

const items = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export default function RightMenu() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sectionEls = items.map(i => document.getElementById(i.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        // find entry with largest intersectionRatio
        let best = { ratio: 0, id: active };
        for (const e of entries) {
          if (e.intersectionRatio > best.ratio) {
            best = { ratio: e.intersectionRatio, id: e.target.id };
          }
        }
        if (best.id && best.id !== active) setActive(best.id);
      },
      {
        root: null,
        threshold: Array.from({length: 21}, (_, i) => i/20) // many thresholds for smooth detection
      }
    );

    sectionEls.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [active]);

  function handleClick(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setActive(id);
    }
  }

  return (
    <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <ul className="menu bg-panel p-2 rounded-md backdrop-blur-md border border-white/5">
        {items.map(it => (
          <li key={it.id} className="mb-2 last:mb-0">
            <button
              onClick={() => handleClick(it.id)}
              className={clsx(
                "px-3 py-2 rounded-md text-sm font-medium transition-all duration-150",
                active === it.id ? "menu-item-active" : "text-zinc-400 hover:text-white/90"
              )}
              aria-current={active === it.id ? "true" : "false"}
            >
              <span className="block leading-none">{it.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
