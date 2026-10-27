import { Fragment } from "react";
import { courses, wins } from "@/content/resume";

/** Recognition as a table: no lines, alternate rows on a tone step, one blank row between groups. */
export function Wins() {
  const total = courses.reduce((n, c) => n + c.items.length, 0);

  return (
    <section className="wins" id="wins" aria-labelledby="wins-title">
      <h2 id="wins-title" className="wins__title d2" data-reveal>
        <span>Wins and</span>
        <span>credentials</span>
      </h2>

      <table className="ledger" data-reveal>
        <caption className="sr-only">Hackathon results, credentials, education and campus roles</caption>
        <colgroup>
          <col className="c1" />
          <col className="c2" />
          <col className="c3" />
          <col className="c4" />
        </colgroup>
        <thead className="sr-only">
          <tr>
            <th scope="col">Kind</th>
            <th scope="col">What</th>
            <th scope="col">Where</th>
            <th scope="col">Result</th>
          </tr>
        </thead>
        {wins.map((group, g) => (
          <Fragment key={group.group}>
            {g > 0 && (
              <tbody aria-hidden="true">
                <tr className="gap">
                  <td colSpan={4} />
                </tr>
              </tbody>
            )}
            <tbody>
              {group.rows.map((row, i) => (
                <tr key={row.title}>
                  <th scope="row">{i === 0 ? group.group : ""}</th>
                  <td>{row.title}</td>
                  <td>{row.body}</td>
                  <td>{row.result}</td>
                </tr>
              ))}
            </tbody>
          </Fragment>
        ))}
      </table>

      <details className="courses">
        <summary>
          All {total} course certificates
          <span className="bar__plus" aria-hidden="true" />
        </summary>
        <div className="courses__grid">
          {courses.map((c) => (
            <div key={c.issuer}>
              <h3>
                {c.issuer}, {c.items.length}
              </h3>
              <ul>
                {c.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </details>
    </section>
  );
}
