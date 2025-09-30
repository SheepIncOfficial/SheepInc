const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section (Navbar comes from App.jsx) */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold text-primary mb-6 font-mono">
          Sheep, Inc.
        </h1>
        <p className="text-lg text-base-content/80 max-w-2xl">
          Sheep, Inc. — a life-sim roguelike where you breed, survive, and defend your flock
          against predators in ever-tougher biomes.
        </p>
      </main>
    </div>
  );
};

export default HomePage;
