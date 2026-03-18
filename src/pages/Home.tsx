import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { projects } from '../data/projects';


const Home: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Portfolio Grid - Exact structure from user reference */}
      <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-dense gap-[1px] bg-subtle-grid border border-subtle-grid">
        {projects.map((project, index) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className={`grid-cell bg-base-off-white group relative overflow-hidden flex justify-center items-center ${project.span} ${project.span?.includes('row-span-1') ? 'aspect-[3/2]' : ''} ${project.span?.includes('row-span-2') ? 'aspect-[3/4]' : ''}`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="w-full h-full"
            >
              {project.images[0].toLowerCase().endsWith('.mp4') || project.images[0].toLowerCase().endsWith('.webm') ? (
                <video
                  src={project.images[0]}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}

              {/* Overlay with info on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-8 text-center backdrop-blur-[2px]">
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/80 mb-3">
                  {project.category}
                </p>
                <h3 className="text-2xl md:text-3xl font-normal italic tracking-tight text-white leading-tight">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>


    </div>
  );
};

export default Home;
