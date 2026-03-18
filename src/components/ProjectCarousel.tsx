import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectCarouselProps {
  images: string[];
  title: string;
  hasAudio?: boolean;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ images, title, hasAudio }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = Math.abs(page % images.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
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
    <div className="flex items-center justify-between w-full h-full gap-8 md:gap-16">
      {/* Left Arrow */}
      <button
        onClick={() => paginate(-1)}
        className="text-4xl md:text-6xl font-light hover:scale-110 transition-transform duration-300"
        aria-label="Previous"
      >
        {"<"}
      </button>

      {/* Main Viewport */}
      <div className="relative flex-grow min-h-[50vh] flex items-center justify-center overflow-hidden">

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
            className="w-full h-full flex items-center justify-center"
          >
            {isVideo(images[imageIndex]) ? (
              <video
                src={images[imageIndex]}
                autoPlay
                loop
                muted={!hasAudio}
                playsInline
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={images[imageIndex]}
                alt={`${title} - image ${imageIndex + 1}`}
                className="w-full h-full object-contain"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => paginate(1)}
        className="text-4xl md:text-6xl font-light hover:scale-110 transition-transform duration-300"
        aria-label="Next"
      >
        {">"}
      </button>
    </div>
  );
};

export default ProjectCarousel;
