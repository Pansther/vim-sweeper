const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center">
      <div className="mt-8 text-gray-500">
        Copyright © {new Date().getFullYear()} wwDev
      </div>
      <nav className="mt-2 mb-8 text-gray-500">
        <ul className="flex gap-4">
          <li>
            <a target="_blank" href="https://github.com/Pansther/vim-sweeper">
              GitHub
            </a>
          </li>
          |
          <li>
            <a target="_blank" href="#">
              How to Play
            </a>
          </li>
          |
          <li>
            <a target="_blank" href="https://wwdev-docs.vercel.app">
              My Website
            </a>
          </li>
          |
          <li>
            <a
              target="_blank"
              href="https://github.com/Pansther/minesweeper-tui"
            >
              TUI Version
            </a>
          </li>
          |
          <li>
            <a target="_blank" href="https://wwdev-minesweeper.vercel.app/">
              Web App Version
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
