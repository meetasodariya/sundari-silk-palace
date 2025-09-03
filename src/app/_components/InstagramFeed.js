const InstagramFeed = () => {
  // **IMPORTANT**: Replace these with your actual Instagram Reel embed codes
  const reels = [
    '<iframe src="https://www.instagram.com/reel/DNklKrMPQNr/embed" width="300" height="535" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
    '<iframe src="https://www.instagram.com/reel/DMmfyIYCrpJ/embed" width="300" height="535" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
    '<iframe src="https://www.instagram.com/reel/C-CZkUvCbYp/embed" width="300" height="535" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif font-bold text-[#800020] mb-4">Fresh Off The Gram</h2>
        <p className="text-lg text-gray-600 mb-12">Follow us <a href="https://www.instagram.com/sundarisilk/" target="_blank" rel="noopener noreferrer" className="text-[#FFD700] font-bold">@sundarisilk</a> for our latest collections.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {reels.map((reel, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg" dangerouslySetInnerHTML={{ __html: reel }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;