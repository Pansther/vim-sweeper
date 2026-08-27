const HeroBanner = () => {
  return (
    <header className="flex min-h-20 items-center justify-between gap-4 border-b bg-base px-4 py-3 sm:px-6 relative">
      <div className="flex items-center gap-3 absolute" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-destructive" />
        <span className="size-2.5 rounded-full bg-warning" />
        <span className="size-2.5 rounded-full bg-success" />
      </div>

      <div className="w-full flex justify-center min-w-0 text-center">
        <h1 className="mt-1 font-mono text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
          vim-sweeper
        </h1>
      </div>
    </header>
  );
};

export default HeroBanner;
