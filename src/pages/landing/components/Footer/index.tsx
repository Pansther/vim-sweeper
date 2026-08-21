const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center">
      <div className="mt-8 text-gray-500">
        Copyright © {new Date().getFullYear()} wwDev
      </div>
      <div className="mt-2 mb-8 text-gray-500 flex gap-4">
        <a target="_blank" href="https://github.com/Pansther/vim-sweeper">
          GitHub
        </a>
        |
        <a target="_blank" href="#">
          How to Play
        </a>
        |
        <a target="_blank" href="https://wwdev-docs.vercel.app">
          My Website
        </a>
      </div>
    </footer>
  );
};

export default Footer;
