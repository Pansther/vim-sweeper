const Description = () => {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <h2 className="text-2xl mb-1">Escape the mouse. Master the keys. </h2>
        <p>
          Welcome to a Vim navigation trainer powered by Minesweeper! Ditch the
          mouse and transform every move on the board into pure muscle memory.
          Master{" "}
          <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm font-semibold text-gray-800 dark:bg-gray-800 dark:text-gray-200">
            h, j, k, l
          </code>
          and sharpen your keystrokes while enjoying the classic game you know
          and love.
        </p>
      </div>

      <div>
        <h2 className="text-2xl mb-1">Key Features Section </h2>
        <ul className="list-disc pl-5">
          <li>
            Keyboard-First Design: Fully playable without ever touching a mouse.
          </li>
          <li>
            Vim Motion Integration: Practice{" "}
            <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm font-semibold text-gray-800 dark:bg-gray-800 dark:text-gray-200">
              h, j, k, l
            </code>{" "}
            and movement operators in real time.
          </li>
          <li>
            Instant Visual Feedback: Build muscle memory faster through quick
            game loops.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Description;
