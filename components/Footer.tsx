import { person } from "@/content/resume";
import credits from "@/public/images/world/credits.json";

interface Credit {
  title: string;
  creator: string | null;
  license: string;
  licenseUrl: string | null;
  page: string;
}

export function Footer() {
  const list = credits as Credit[];

  return (
    <footer className="foot">
      <div className="foot__top">
        <div className="foot__invite" data-reveal>
          <h2 className="d2">
            <span>Hard problem?</span>
            <span>Let’s talk.</span>
          </h2>
          <a className="button" href={`mailto:${person.email}`}>
            Email me
          </a>
        </div>
        <ul className="foot__links" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
          <li>
            <a href={person.resume} download>
              Résumé, PDF
            </a>
          </li>
          <li>
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={person.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={person.phoneHref}>{person.phone}</a>
          </li>
        </ul>
      </div>

      <p className="foot__credits">
        Pictures via Wikimedia Commons:{" "}
        {list.map((c, i) => (
          <span key={c.page}>
            <a href={c.page} target="_blank" rel="noopener noreferrer">
              {c.title}
            </a>
            {c.creator ? ` by ${c.creator}` : ""},{" "}
            {c.licenseUrl ? (
              <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer">
                {c.license}
              </a>
            ) : (
              c.license
            )}
            {i < list.length - 1 ? "; " : "."}
          </span>
        ))}
      </p>

      <div className="foot__legal">
        <span>© {new Date().getFullYear()} Adil Deokar</span>
        <a href="#top">Back to top</a>
      </div>

      <p className="foot__name" aria-hidden="true">
        Adil Deokar
      </p>
    </footer>
  );
}
