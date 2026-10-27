"use client";

import { useEffect, useState } from "react";
import { focusLabels, projects, roles, type Focus } from "@/content/resume";

type Choice = Focus | "all";

const choices: Choice[] = ["all", "ai", "web", "edge", "data"];

function count(choice: Choice) {
  if (choice === "all") return `All ${projects.length} projects and ${roles.length} roles`;
  const p = projects.filter((x) => x.focus.includes(choice)).length;
  const r = roles.filter((x) => x.focus.includes(choice)).length;
  const work = `${p} of ${projects.length} projects`;
  return r ? `${work}, ${r} of ${roles.length} roles` : work;
}

/**
 * The page's one live thing: a recruiter picks what they are hiring for and the
 * work and roles that prove it come forward. Without script every item stays shown.
 */
export function FocusControl() {
  const [choice, setChoice] = useState<Choice>("all");

  // A filtered view can be shared: ?for=ai opens the page briefed for that role.
  useEffect(() => {
    const asked = new URLSearchParams(window.location.search).get("for");
    if (asked && (choices as string[]).includes(asked)) setChoice(asked as Choice);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const url = new URL(window.location.href);
    if (choice === "all") {
      delete root.dataset.focus;
      url.searchParams.delete("for");
    } else {
      root.dataset.focus = choice;
      url.searchParams.set("for", choice);
    }
    window.history.replaceState(null, "", url);
  }, [choice]);

  return (
    <div className="focus" role="group" aria-labelledby="focus-label" data-reveal>
      <p id="focus-label" className="focus__label">
        Hiring for
      </p>
      <div className="focus__opts">
        {choices.map((c) => (
          <button
            key={c}
            type="button"
            className="focus__opt"
            aria-pressed={choice === c}
            onClick={() => setChoice(c)}
          >
            {c === "all" ? "Everything" : focusLabels[c]}
          </button>
        ))}
      </div>
      <p className="focus__count" aria-live="polite">
        {count(choice)}
      </p>
    </div>
  );
}
