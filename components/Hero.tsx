import { person } from "@/content/resume";
import { PauseMotion } from "./PauseMotion";

const COPIES = 3;

/** One run of the name. The first copy of the first run is the page's h1; every other copy is decoration. */
function Group({ withHeading }: { withHeading?: boolean }) {
  return (
    <div className="track__group" aria-hidden={withHeading ? undefined : true}>
      {Array.from({ length: COPIES }, (_, i) => (
        <div key={i} className="track__copy">
          {withHeading && i === 0 ? (
            <h1 className="track__name">{person.name}</h1>
          ) : (
            <span className="track__name" aria-hidden="true">
              {person.name}
            </span>
          )}
          <span className="track__dot" aria-hidden="true">
            •
          </span>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <header className="hero" id="top">
      <a className="skip" href="#work">
        Skip to the work
      </a>
      <nav className="topbar" aria-label="Sections">
        <a href="#work">Work</a>
        <a className="topbar__mark" href="#top">
          Adil Deokar
        </a>
        <a href="#contact">Contact</a>
      </nav>

      {/* The name runs across the portrait; its letters are painted in the paper colour inside the square. */}
      <div className="band">
        <div className="band__photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={person.portrait} width={400} height={400} alt="Adil Deokar in a white track jacket" fetchPriority="high" />
        </div>
        <div className="band__line" translate="no">
          <div className="track">
            <Group withHeading />
            <Group />
          </div>
        </div>
      </div>

      <div className="hero__words">
        <p className="hero__lead" data-load style={{ "--d": "520ms" } as React.CSSProperties}>
          {person.line}
        </p>
        <p className="hero__fact" data-load style={{ "--d": "600ms" } as React.CSSProperties}>
          {person.now}
        </p>
      </div>

      <div className="hero__foot">
        <div className="hero__where" data-load style={{ "--d": "680ms" } as React.CSSProperties}>
          <p>
            {person.place}. {person.study}.
          </p>
          <PauseMotion />
        </div>
        <a className="button" href={person.resume} download data-load style={{ "--d": "740ms" } as React.CSSProperties}>
          Download résumé
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M8 2v10M3.5 7.5 8 12l4.5-4.5M2.5 14.5h11" />
          </svg>
        </a>
      </div>
    </header>
  );
}
