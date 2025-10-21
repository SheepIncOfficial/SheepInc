const MediaPage = () => {
  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-6">Media</h1>
      <p className="text-lg text-base-content mb-4">
        Explore our game trailers, screenshots, and other media showcasing our latest projects.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Trailer 1 → Croc Attack GIF */}
        <div className="bg-base-200 overflow-hidden rounded-lg h-48">
          <img
            src="https://res.cloudinary.com/dyivheffs/image/upload/v1760111973/Desert_oasis_sheep_grazing_1_tca9dd.gif"
            alt="Desert oasis sheep grazing 1"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Screenshot 1 → Croc Misses GIF */}
        <div className="bg-base-200 overflow-hidden rounded-lg h-48">
          <img
            src="https://res.cloudinary.com/dyivheffs/image/upload/v1760113419/The_cycle_of_life_1_compressed_g00nd3.gif"
            alt="cycle of life 1 compressed"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Trailer 2 → Croc Wins GIF */}
        <div className="bg-base-200 overflow-hidden rounded-lg h-48">
          <img
            src="https://res.cloudinary.com/dyivheffs/image/upload/v1760113991/saving_pvt_sheep_1_compressed_dqzyf5.gif"
            alt="saving pvt sheep 1 compressed"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MediaPage;
