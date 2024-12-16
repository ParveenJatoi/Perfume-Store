"use client"
import React from 'react';

const AutoVideoPlay: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-full max-w-4xl">
        {/* Video playing automatically */}
        <video 
          src="https://videos.pexels.com/video-files/10536481/10536481-uhd_2732_1440_25fps.mp4"
          // Replace with your video URL
          autoPlay 
          muted 
          loop 
          controls
          className="w-full rounded-lg shadow-lg"
        >
          Your browser does not support the video tag.
        </video>

       
      </div>
    </div>
  );
};

export default AutoVideoPlay;