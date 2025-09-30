const MediaPage = () => {
  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-6">Media</h1>
      <p className="text-lg text-base-content mb-4">
        Explore our game trailers, screenshots, and other media showcasing our latest projects.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example media placeholders */}
        <div className="bg-base-200 h-48 flex items-center justify-center">Trailer 1</div>
        <div className="bg-base-200 h-48 flex items-center justify-center">Screenshot 1</div>
        <div className="bg-base-200 h-48 flex items-center justify-center">Trailer 2</div>
      </div>
    </div>
  );
};

export default MediaPage;
