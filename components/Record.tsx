import { roles, stack } from "@/content/resume";

function Plus() {
  return <span className="bar__plus" aria-hidden="true" />;
}

/** Roles and stack: two columns, each a giant word over a stack of filled bars that open in place. */
export function Record() {
  return (
    <section className="record" id="roles" aria-label="Roles and stack">
      <div className="record__col">
        <h2 className="word" data-reveal>
          Roles
        </h2>
        <div className="bars">
          {roles.map((role, i) => (
            <details
              key={role.company}
              className="bar"
              open={i === 0}
              data-tags={role.focus.join(" ")}
              data-reveal
              style={{ "--i": i } as React.CSSProperties}
            >
              <summary>
                <span className="bar__name">{role.company}</span>
                <span className="bar__meta">{role.dates}</span>
                <Plus />
              </summary>
              <div className="bar__panel">
                <p className="bar__title">{role.title}</p>
                <ul className="bar__points">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>

      <div className="record__col">
        <h2 className="word" data-reveal>
          Stack
        </h2>
        <div className="bars">
          {stack.map((group, i) => (
            <details
              key={group.group}
              className="bar"
              open={i === 0}
              data-reveal
              style={{ "--i": i } as React.CSSProperties}
            >
              <summary>
                <span className="bar__name">{group.group}</span>
                <span className="bar__meta">{group.items.length}</span>
                <Plus />
              </summary>
              <div className="bar__panel">
                <ul className="bar__items">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
