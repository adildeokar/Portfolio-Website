import { person } from "@/content/resume";

function Arrow({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M4 12 12 4M5.5 4H12v6.5" />
    </svg>
  );
}

/** The address set in display rows: every way to reach Adil, each row a link. */
export function Contact() {
  const external = { target: "_blank", rel: "noopener noreferrer" };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="row row--hello" data-reveal>
        <h2 id="contact-title" className="row__text">
          Say hello
        </h2>
        <a className="round" href={`mailto:${person.email}`} aria-label={`Email ${person.email}`}>
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M2 8h11M9 4l4 4-4 4" />
          </svg>
        </a>
      </div>
      <a className="row" href={`mailto:${person.email}`} data-reveal>
        <span className="row__text">{person.email}</span>
        <Arrow className="row__go" />
      </a>
      <a className="row" href={person.phoneHref} data-reveal>
        <span className="row__text">{person.phone}</span>
        <Arrow className="row__go" />
      </a>
      <a className="row" href={person.linkedin} {...external} data-reveal>
        <span className="row__text">LinkedIn</span>
        <Arrow className="row__go" />
      </a>
      <a className="row" href={person.github} {...external} data-reveal>
        <span className="row__text">GitHub</span>
        <Arrow className="row__go" />
      </a>
      <p className="row" data-reveal>
        <span className="row__text">Pune, India, UTC+5:30</span>
      </p>
    </section>
  );
}
