import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { projects } from '../data/projects';


import ProjectCarousel from '../components/ProjectCarousel';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projects.find(p => p.id === Number(id)) : null;

  if (!project) {
    return <div className="py-32 text-center text-slate-400 font-sans uppercase text-xs tracking-widest-editorial">Projet non trouvé.</div>;
  }

  return (
    <div className="pb-32 px-4 md:px-12 max-w-7xl mx-auto">
      {/* Editorial Layout: [ < ] [ Carousel ] [ > ] [ Metadata ] */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-12">
        
        {/* Carousel Section */}
        <div className="w-full md:flex-1 order-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center"
          >
            <ProjectCarousel images={project.images} title={project.title} hasAudio={project.hasAudio} />
          </motion.div>
        </div>

        {/* Metadata Section (Right side as per reference) */}
        <div className="w-full md:w-80 flex-shrink-0 order-2 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-1">
              <h1 className="text-2xl font-bold tracking-tighter uppercase">{project.title}</h1>
              <div className="font-sans text-[10px] tracking-[0.2em] font-medium space-y-1">
                {project.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </div>
            </div>

            <p className="text-sm leading-relaxed text-brandDark/80">
              {project.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Back Link */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-32 border-t border-subtle-grid pt-12 flex justify-start"
      >
        <Link to="/" className="nav-link text-[10px] tracking-widest-editorial group flex items-center gap-4 uppercase font-bold">
          <span className="group-hover:-translate-x-2 transition-transform duration-300">←</span> RETOUR AU PORTFOLIO
        </Link>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
