"use client";

import { useEffect, useState } from "react";

/** The name line loops for as long as the page is open, so visitors can stop it. */
export function PauseMotion() {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("is-paused", paused);
  }, [paused]);

  return (
    <button type="button" className="pause" aria-pressed={paused} onClick={() => setPaused((p) => !p)}>
      {paused ? "Play the name" : "Pause the name"}
    </button>
  );
}
