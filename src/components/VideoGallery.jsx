import React, { useState, useRef } from 'react';
import { videos } from '../constants/videos';

const VideoGallery = () => {
    const [activeVideo, setActiveVideo] = useState(null);

    const handlePlay = (id) => {
        setActiveVideo(id);
    };

    return (
        <div className="mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Video Gallery</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 screen-max-width">
                {videos.map((video) => (
                    <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        {activeVideo === video.id ? (
                            <video
                                controls
                                className="w-full"
                                style={{ width: '1080px' }}
                                src={video.src}
                                autoPlay
                            >
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <div
                                className="relative w-full h-0 pb-[133%] cursor-pointer" // Aspect ratio 1080x1440
                                onClick={() => handlePlay(video.id)}
                            >
                                <video
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                    src={video.src}
                                    muted
                                    playsInline
                                    onLoadedData={(e) => {
                                        e.target.currentTime = 0.1; // Set to a small time value to load the first frame
                                        e.target.pause();
                                    }}
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        )}
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{video.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoGallery;
