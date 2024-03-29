import React, { createRef } from "react";

export default function CopyCode({ svg, children }) {
  if (!svg) {
    svg = (
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 488.3 488.3"
        fill="#EC4899"
      >
        <g>
          <g>
            <path
              d="M314.25,85.4h-227c-21.3,0-38.6,17.3-38.6,38.6v325.7c0,21.3,17.3,38.6,38.6,38.6h227c21.3,0,38.6-17.3,38.6-38.6V124
            C352.75,102.7,335.45,85.4,314.25,85.4z M325.75,449.6c0,6.4-5.2,11.6-11.6,11.6h-227c-6.4,0-11.6-5.2-11.6-11.6V124
            c0-6.4,5.2-11.6,11.6-11.6h227c6.4,0,11.6,5.2,11.6,11.6V449.6z"
            />
            <path
              d="M401.05,0h-227c-21.3,0-38.6,17.3-38.6,38.6c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5c0-6.4,5.2-11.6,11.6-11.6h227
            c6.4,0,11.6,5.2,11.6,11.6v325.7c0,6.4-5.2,11.6-11.6,11.6c-7.5,0-13.5,6-13.5,13.5s6,13.5,13.5,13.5c21.3,0,38.6-17.3,38.6-38.6
            V38.6C439.65,17.3,422.35,0,401.05,0z"
            />
          </g>
        </g>
      </svg>
    );
  }

  const contentRef = createRef();

  function copy() {
    if (!contentRef.current) return;
    const content = contentRef.current.innerHTML.replaceAll(
      /<span[^>]*?class="[^"]*?linenumber[^"]*?".*?>\d*?<\/span>/gi,
      ""
    );
    try {
      navigator.clipboard.write([
        new window.ClipboardItem({ "text/html": new Blob([content], { type: "text/html" }) }),
      ]);
    } catch (error) {
      console.error(error);
      console.error(
        "ClipboardItem not supported by this browser yet. Copying plain text instead of rich text..."
      );
      const temp = document.createElement("div");
      temp.innerHTML = content;
      navigator.clipboard.writeText(temp.textContent);
    }
  }

  const overlay = {
    zIndex: 1000,
  };

  return (
    <div className="relative group">
      <div className="absolute top-0 left-0 w-full transition duration-200 ease-in-out">
        <button
          className="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 absolute w-5 right-4 top-4 cursor-pointer transform duration-300 rotate-0 hover:rotate-360 group-focus-within:rotate-360"
          onClick={copy}
          title="Copiar el código"
          style={overlay}
        >
          {svg}
        </button>
      </div>
      <div ref={contentRef}>{children}</div>
    </div>
  );
}
