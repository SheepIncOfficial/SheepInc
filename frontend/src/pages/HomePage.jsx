const HomePage = () => {
  // Replace this with your actual Cloudinary GIF URL
  //const gifUrl = "https://res.cloudinary.com/your-cloud-name/image/upload/v123456789/your-gif-file.gif";

  //const gifUrl = "https://res.cloudinary.com/dyivheffs/image/upload/v1759962104/main-sample.png";
  const gifUrl = "https://res.cloudinary.com/dyivheffs/image/upload/v1759991129/sheep_cywbyl.png";
  
  
 
  
  

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section (Navbar comes from App.jsx) */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold text-primary mb-6 font-mono">
          Sheep, Inc.
        </h1>
        {/* Add the GIF here */}
        <img 
          src={gifUrl} 
          alt="Sheep, Inc. gameplay" 
          className="max-w-full h-auto rounded-lg mb-6"
          style={{ maxWidth: '400px' }} // Optional: limit max width
        />
        <p className="text-lg text-base-content/80 max-w-2xl">
          Sheep, Inc. — a life-sim roguelike where you breed, survive, and defend your flock
          against predators in ever-tougher biomes.
        </p>
      </main>
    </div>
  );
};

export default HomePage;
