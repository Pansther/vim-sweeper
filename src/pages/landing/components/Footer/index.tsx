const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center text-center font-mono text-sm text-muted-foreground">
      <div className="mt-8">
        Copyright © {new Date().getFullYear()} wwDev
      </div>
      <nav className="mt-3 mb-8" aria-label="Footer navigation">
        <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          <li>
            <a
              className="rounded-sm transition-colors hover:text-primary motion-reduce:transition-none"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Pansther/vim-sweeper"
            >
              GitHub
            </a>
          </li>
          <li aria-hidden="true">·</li>
          <li>
            <a
              className="rounded-sm transition-colors hover:text-primary motion-reduce:transition-none"
              href="#"
            >
              How to Play
            </a>
          </li>
          <li aria-hidden="true">·</li>
          <li>
            <a
              className="rounded-sm transition-colors hover:text-primary motion-reduce:transition-none"
              target="_blank"
              rel="noreferrer"
              href="https://wwdev-docs.vercel.app"
            >
              My Website
            </a>
          </li>
          <li aria-hidden="true">·</li>
          <li>
            <a
              className="rounded-sm transition-colors hover:text-primary motion-reduce:transition-none"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Pansther/minesweeper-tui"
            >
              TUI Version
            </a>
          </li>
          <li aria-hidden="true">·</li>
          <li>
            <a
              className="rounded-sm transition-colors hover:text-primary motion-reduce:transition-none"
              target="_blank"
              rel="noreferrer"
              href="https://wwdev-minesweeper.vercel.app/"
            >
              Web App Version
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
