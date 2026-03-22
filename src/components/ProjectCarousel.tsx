import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectCarouselProps {
  images: string[];
  title: string;
  hasAudio?: boolean;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ images, title, hasAudio }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);

  const imageIndex = Math.abs(page % images.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    setAspectRatio(null); // Reset aspect ratio for the next item
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const isVideo = (url: string) => url.toLowerCase().endsWith('.mp4') || url.toLowerCase().endsWith('.webm');

  return (
    <div className="flex items-center justify-between w-full gap-4 md:gap-12 min-h-[30vh]">
      {/* Left Arrow */}
      <button
        onClick={() => paginate(-1)}
        className="text-4xl md:text-6xl font-light hover:scale-110 transition-transform duration-300 flex-shrink-0 z-10"
        aria-label="Previous"
      >
        {"<"}
      </button>

      {/* Main Viewport Container */}
      <div className="relative flex-grow flex items-center justify-center overflow-hidden w-full max-w-4xl mx-auto">
        
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 }
            }}
            className="w-full flex items-center justify-center max-h-[60vh]"
            style={aspectRatio ? { aspectRatio: `${aspectRatio}` } : {}}
          >
            {isVideo(images[imageIndex]) ? (
              <video
                src={images[imageIndex]}
                autoPlay
                loop
                muted={!hasAudio}
                playsInline
                onLoadedMetadata={(e) => {
                  const target = e.target as HTMLVideoElement;
                  if (target.videoWidth && target.videoHeight) {
                    setAspectRatio(target.videoWidth / target.videoHeight);
                  }
                }}
                className="w-full h-full object-contain max-h-[60vh]"
              />
            ) : (
              <img
                src={images[imageIndex]}
                alt={`${title} - image ${imageIndex + 1}`}
                onLoad={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.naturalWidth && target.naturalHeight) {
                    setAspectRatio(target.naturalWidth / target.naturalHeight);
                  }
                }}
                className="w-full h-full object-contain max-h-[60vh]"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => paginate(1)}
        className="text-4xl md:text-6xl font-light hover:scale-110 transition-transform duration-300 flex-shrink-0 z-10"
        aria-label="Next"
      >
        {">"}
      </button>
    </div>
  );
};

export default ProjectCarousel;
