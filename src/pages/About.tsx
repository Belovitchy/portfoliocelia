import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pb-24 grid grid-cols-1 md:grid-cols-12 gap-16 items-start">

      {/* Main Content */}
      <div className="md:col-span-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <p className="text-2xl md:text-3xl font-serif leading-relaxed italic text-deep-charcoal">
            "Tisser un dialogue entre le trait graphique et la fibre, là où le design devient tactile."
          </p>

          <div className="space-y-6 text-lg text-slate-600 font-serif leading-loose text-justify">
            <p>
              Je travaille depuis cinq ans en tant que serveuse dans une crêperie proche du village où j’ai grandi. Cet emploi étudiant m’a accompagnée au fil des années, depuis le passage de mon bac de français à celui de mon diplôme d’art aujourd’hui ; si il n’a a priori pas grand chose à voir avec une pratique artistique, c’est à partir de ce point que j’ai commencé à travailler autour du relationnel. Aujourd’hui, je cherche à réfléchir le design graphique comme un procédé à même de créer du lien.
            </p>
            <p>
              Dans un même temps, j'exploite les techniques du fil – tel que le crochet que je pratique depuis 3 ans – pour créer de nouvelles formes graphiques. Je procède par identification des motifs qui se dégagent des mailles, que je multiplie ensuite par combinaison et superposition. Je cherche ensuite à intégrer ce vocabulaire à ma pratique ; que ce soit comme outil pédagogique ou comme support à la génération d’images, de trames ou de typographies. Par ces procédés, je cherche à proposer des réponses à la question suivante : comment faire image avec des formes graphiques extraites de pratiques manuelles ?
            </p>
            <p>
              En ce sens, je participe à l’ARC Aire de jeu, une option permettant aux étudiants de l’école d’organiser des ateliers pédagogiques à destination d'enfants et d’adolescents, pour les introduire à la création. Ainsi, je leur ai proposé de fabriquer leurs propres doudous en feutrine, de manière à leur enseigner les bases de la couture tout en bâtissant un pont vers ma pratique. Ces cours sont pour moi une véritable source de richesse artistique, car ils permettent de faire émerger un langage visuel tout en capitalisant sur des points qui me sont chers : l’imaginaire, la narration, le jeu, l’échange et l’humour.
            </p>
            <p>
              Cet atelier est lié avec un projet que je mène depuis un an maintenant : celui de la création de personnages en crochet, servant de supports aux histoires que je souhaite raconter. Créatures difformes, peluches géantes, êtres humanoïdes, leur aspect étrange s’équilibre avec la matérialité duveteuse de la laine, leur créant un côté attendrissant. Ces personnages viennent ensuite nourrir ma pratique : je les dispose dans des bandes dessinées, leur construis des visuels et des récits pour qu’ils prennent corps. Dans cet objectif, je travaille aussi beaucoup l’animation (2D comme 3D), un médium dont le processus de fabrication me fascine. Ainsi, une de mes intentions est d’en approfondir la maîtrise.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Sidebar / Links */}
      <div className="md:col-span-3 md:col-start-10 space-y-12">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h4 className="font-sans text-[10px] uppercase tracking-widest-editorial text-slate-400 mb-6 border-b border-subtle-grid pb-2">
            RÉSEAUX & DOCS
          </h4>
          <ul className="space-y-4 font-sans text-[10px] tracking-[0.2em] leading-relaxed uppercase">
            <li>
              <a href="https://drive.google.com/file/d/1C7rDpWYtc-lkIFvIweDtiDXOxnzh0_z8/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="nav-link">
                CURRICULUM VITÆ
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/celia.lesaffre?igsh=aGR6OTByZHFneWxj" target="_blank" rel="noopener noreferrer" className="nav-link">
                INSTAGRAM
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/celia-lesaffre-485221253/" target="_blank" rel="noopener noreferrer" className="nav-link">
                LINKEDIN
              </a>
            </li>
            <li>
              <a href="https://belovitchy.github.io/TramSVG/" target="_blank" rel="noopener noreferrer" className="nav-link">
                TRAMSVG (créer des trames vectorielles à partir de photos)
              </a>
            </li>
          </ul>
        </motion.section>
      </div>

    </div>
  );
};

export default About;
