import { pursuits } from "@/content/resume";

/** The title holds still on the left while the pictures of life off the clock pass on the right. */
export function Life() {
  return (
    <section className="life" id="life" aria-labelledby="life-title">
      <div className="life__pin">
        <h2 id="life-title" className="d2" data-reveal>
          Off the clock
        </h2>
        <p className="life__intro" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
          National-level basketball, state-level rifle shooting, district-level chess, and the
          Sahyadri trails at the weekend. The habits carry over: train, aim, plan, climb.
        </p>
      </div>
      <div className="life__reel">
        {pursuits.map((p, i) => (
          <figure key={p.name} className="pass" data-reveal style={{ "--i": i % 2 } as React.CSSProperties}>
            <div className="pass__frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image.src} width={p.image.w} height={p.image.h} alt={p.image.alt} loading="lazy" decoding="async" />
            </div>
            <figcaption>
              <span className="pass__name">{p.name}</span>
              <span className="pass__level">{p.level}</span>
              <span className="pass__line">{p.line}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
