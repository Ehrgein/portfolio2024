import React from "react";

function RevealFooter() {
  return (
    <div
      className="relative z-20 h-[800px]"
      style={{ clipPath: "polygon(0%, 0, 100% 0%, 100% 100%, 0 100%" }}
    >
      <footer className="sticky bottom-0 text-8xl">
        <h3 className="text-6xl">Hi, this is the footer!</h3>
      </footer>
    </div>
  );
}

export default RevealFooter;
