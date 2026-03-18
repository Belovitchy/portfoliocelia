export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  images: string[];
  details: string[];
  span?: string; // Only used for the Home grid layout
  hasAudio?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "MIKO",
    category: "CROCHET",
    year: "2025",
    description: "Cette édition raconte l'histoire complètement loufoque de ces 95 doudous sous la forme du journal intime d'un enfant. Les petits carnets glissés à l'intérieur viennent raconter des informations complémentaires sur la réelle histoire de la peluche...",
    images: ["/miko/1miko.webp", "/miko/2-mikozen.webp", "/miko/3-mikopose.webp", "/miko/4-miko.webp"],
    details: ["DOUDOUS", "FORMAT --X--CM", "AUTRES DESCRIPTIFS"],
    span: "row-span-2"
  },
  {
    id: 2,
    title: "MIKO ET LA MOUCHE",
    category: "ANIMATION",
    year: "2024",
    description: "Une série d'animations explorant les interactions entre Miko et une mouche tenace.",
    images: [
      "/mikoetlamouche/1-main.mp4",
      "/mikoetlamouche/2-epuisette.mp4",
      "/mikoetlamouche/3-scotch.mp4",
      "/mikoetlamouche/4-tapette.mp4",
      "/mikoetlamouche/5-pistolet.mp4",
      "/mikoetlamouche/6-bazouka.mp4"
    ],
    details: ["Animation Numérique", "Série Courte", "MP4"],
    span: "row-span-1"
  },
  {
    id: 3,
    title: "MIKO BD",
    category: "EDITION",
    year: "2024",
    description: "Une exploration de la bande dessinée à travers le personnage de Miko, mêlant illustrations traditionnelles et animations numériques.",
    images: [
      "/mikobd/1-tout.webp",
      "/mikobd/2-Mikobd.mp4",
      "/mikobd/3mikobd.webp",
      "/mikobd/4-colophon.webp",
      "/mikobd/bazzoka.webp",
      "/mikobd/scotch.webp"
    ],
    details: ["BD / Illustration", "Fanzine", "Mix Media"],
    span: "row-span-2"
  },
  {
    id: 4,
    title: "BLENDER 3D",
    category: "MODÉLISATION",
    year: "2024",
    description: "Une série d'expérimentations autour de la modélisation 3D et du rendu sur Blender, explorant les textures et les formes organiques.",
    images: [
      "/blender/1-blender.webp",
      "/blender/2-blender.webp",
      "/blender/3-blender.webp",
      "/blender/4-blender.webp",
      "/blender/5-blender.webp",
      "/blender/6-blender.webp"
    ],
    details: ["Cycles Render", "Sculpting", "Texturing"],
    span: "row-span-1"
  },
  {
    id: 5,
    title: "MIKO TECHNO",
    category: "ANIMATION 3D",
    year: "2024",
    description: "Une animation dynamique réalisée sur Blender, mettant en scène Miko dans un univers techno-organique.",
    images: ["/animationblender/Mikotechno.mp4"],
    details: ["Blender Animation", "Motion Design", "3D Rendering"],
    span: "row-span-1",
    hasAudio: true
  },
  {
    id: 6,
    title: "AFFICHES 3D",
    category: "GRAPHISME",
    year: "2024",
    description: "Une série d'affiches expérimentales mêlant composition typographique et éléments modélisés sous Blender.",
    images: [
      "/affichesblender/1-affiche.webp",
      "/affichesblender/2-affiche.webp",
      "/affichesblender/3-affiche.webp",
      "/affichesblender/4-affiche.webp",
      "/affichesblender/5-affiche.webp",
      "/affichesblender/6-affiche.webp"
    ],
    details: ["Affiches", "Blender Render", "Mise en page"],
    span: "row-span-2"
  },
  {
    id: 7,
    title: "ANIMATION MIKO",
    category: "ANIMATION",
    year: "2024",
    description: "Une série de micro-animations (3 secondes) explorant différentes techniques : fusain, feutre, pâte à modeler, collage et dessin traditionnel.",
    images: [
      "/animationmiko/1-3sec-figurine.mp4",
      "/animationmiko/1.5-3sec-face.mp4",
      "/animationmiko/2-3sec-collage.mp4",
      "/animationmiko/3-3sec-laine.mp4",
      "/animationmiko/4-3sec-dessin.mp4",
      "/animationmiko/5-3sec-fusain.mp4",
      "/animationmiko/6-3sec-patamod.mp4",
      "/animationmiko/sec-crayon.mp4",
      "/animationmiko/sec-feutre.mp4",
      "/animationmiko/sec-pastel.mp4"
    ],
    details: ["Mixed Media", "Micro-animations", "Stop Motion"],
    span: "row-span-1"
  },
  {
    id: 8,
    title: "LEPORELLO MIKO",
    category: "EDITION",
    year: "2024",
    description: "Un livre-objet au format accordéon (leporello) explorant l'univers de Miko à travers une narration visuelle continue.",
    images: [
      "/leporellomiko/1-leporello.webp",
      "/leporellomiko/2-leporello.webp",
      "/leporellomiko/3-leporello.webp",
      "/leporellomiko/4-leporello.webp"
    ],
    details: ["Édition", "Leporello", "Illustration"],
    span: "row-span-1"
  },
  {
    id: 9,
    title: "ÉDITION DOU DOU",
    category: "EDITION",
    year: "2024",
    description: "Un projet d'édition centré sur l'univers des doudous, explorant la matière et la forme à travers une mise en page épurée.",
    images: [
      "/editiondoudou/1-editiondoudou.webp",
      "/editiondoudou/2-editiondoudou.webp",
      "/editiondoudou/3-editiondoudou.webp",
      "/editiondoudou/4-editindoudou.webp",
      "/editiondoudou/5-editiondoudou.webp",
      "/editiondoudou/6-editiondoudou.webp",
      "/editiondoudou/7-editiondoudou.webp",
      "/editiondoudou/8-editiondoudou.webp",
      "/editiondoudou/9-editiondoudou.webp",
      "/editiondoudou/10-editiondoudou.webp",
      "/editiondoudou/11-editiondoudou.webp"
    ],
    details: ["Édition", "Design Graphique", "Mise en page"],
    span: "row-span-1"
  },
  {
    id: 10,
    title: "POSTER DOU DOU",
    category: "GRAPHISME",
    year: "2024",
    description: "Une série d'affiches grand format mettant en scène les doudous dans des compositions graphiques minimalistes.",
    images: [
      "/posterdoudou/2-doudou1.webp",
      "/posterdoudou/3-doudou2.webp",
      "/posterdoudou/4-doudou3.webp"
    ],
    details: ["Affiches", "Sérigraphie", "Composition"],
    span: "row-span-2"
  },
  {
    id: 11,
    title: "AIR DE JEU (PHO)",
    category: "INSTALLATION",
    year: "2024",
    description: "Documentation photographique de l'installation physique Air de Jeu, capturer ses couleurs vibrantes et ses formes sculpturales.",
    images: [
      "/airdejeu/1-air.webp",
      "/airdejeu/2-air.webp",
      "/airdejeu/3-air.webp",
      "/airdejeu/4-air.webp",
      "/airdejeu/5-air.webp",
      "/airdejeu/6-air.webp",
      "/airdejeu/7-air.webp",
      "/airdejeu/8-air.webp",
      "/airdejeu/9-air.webp",
      "/airdejeu/10-air.webp",
      "/airdejeu/11-air.webp"
    ],
    details: ["Photo Documentation", "Installation", "Design"],
    span: "row-span-1"
  },
  {
    id: 12,
    title: "AIR DE JEU (RENDU)",
    category: "MODÉLISATION",
    year: "2024",
    description: "Une exploration ludique de l'espace et de la forme à travers des rendus 3D colorés et dynamiques.",
    images: [
      "/airdejeurendu/1-jeurendu.webp",
      "/airdejeurendu/2-jeurendu.webp",
      "/airdejeurendu/3-jeurendu.webp",
      "/airdejeurendu/4-jeurendu.webp",
      "/airdejeurendu/5-jeurendu.webp",
      "/airdejeurendu/6-jeurendu.webp",
      "/airdejeurendu/7-jeurendu.webp",
      "/airdejeurendu/8-jeurendu.webp",
      "/airdejeurendu/9-jeurendu.webp",
      "/airdejeurendu/10-jeurendu.webp",
      "/airdejeurendu/11-jeurendu.webp",
      "/airdejeurendu/12-jeurendu.webp",
      "/airdejeurendu/13-jeurendu.webp",
      "/airdejeurendu/14-jeuendu.webp",
      "/airdejeurendu/15-jeurendu.webp",
      "/airdejeurendu/16-jeurendu.webp",
      "/airdejeurendu/17-jeurendu.webp",
      "/airdejeurendu/18-jeurendu.webp",
      "/airdejeurendu/19-jeurendu.webp",
      "/airdejeurendu/20-jeurendu.webp",
      "/airdejeurendu/21-jeurendu.webp",
      "/airdejeurendu/22-jeurendu.webp",
      "/airdejeurendu/23-jeurendu.webp",
      "/airdejeurendu/24-jeurendu.webp",
      "/airdejeurendu/25-jeurendu.webp",
      "/airdejeurendu/26-jeurendu.webp"
    ],
    details: ["3D Render", "Blender", "Design Ludique"],
    span: "row-span-2"
  },
  {
    id: 13,
    title: "COUDRE L'IMAGINAIRE",
    category: "RESEARCH",
    year: "2023",
    description: "Un projet de recherche textile explorant les limites entre le réel et l'imaginaire à travers la couture et la manipulation de matières.",
    images: [
      "/coudreimaginaire/1-coudreim.webp",
      "/coudreimaginaire/2-coudreim.webp",
      "/coudreimaginaire/3-coudreim.webp",
      "/coudreimaginaire/4-coudreim.webp",
      "/coudreimaginaire/5-coudreim.webp"
    ],
    details: ["Textile", "Recherche", "Couture"],
    span: "row-span-1"
  },
  {
    id: 14,
    title: "ÉDITION CROCHET",
    category: "EDITION",
    year: "2024",
    description: "Une exploration éditoriale de la technique du crochet, documentant les points, les textures et les créations textiles.",
    images: [
      "/editioncrochet/1-editioncrochet.webp",
      "/editioncrochet/2-editioncrochet.webp",
      "/editioncrochet/3-editioncrochet.webp",
      "/editioncrochet/4-editioncrochet.webp",
      "/editioncrochet/5-editioncrochet.webp"
    ],
    details: ["Édition", "Crochet", "Technique"],
    span: "row-span-1"
  },
  {
    id: 15,
    title: "SÉRIGRAPHIE LAINE",
    category: "SÉRIGRAPHIE",
    year: "2024",
    description: "Une série d'expérimentations mêlant sérigraphie traditionnelle et textures de laine, explorant le passage du plat au volume.",
    images: [
      "/serigraphielaine/1-serigraphielaine.webp",
      "/serigraphielaine/2-serigraphielaine.webp"
    ],
    details: ["Sérigraphie", "Laine", "Matière"],
    span: "row-span-2"
  },
  {
    id: 16,
    title: "DENTELLE",
    category: "RESEARCH",
    year: "2024",
    description: "Une exploration de la dentelle à travers des jeux d'ombre et de lumière, capturant la délicatesse des motifs et de la matière.",
    images: [
      "/dentelle/1-dentelle.webp",
      "/dentelle/2-dentelle.webp",
      "/dentelle/3-dentelle.webp",
      "/dentelle/4-dentelle.webp",
      "/dentelle/5-dentelle.webp",
      "/dentelle/6-dentelle.webp",
      "/dentelle/7-dentelle.webp"
    ],
    details: ["Textile", "Dentelle", "Recherche"],
    span: "row-span-1"
  },
  {
    id: 17,
    title: "SÉRIGRAPHIE TRAM",
    category: "SÉRIGRAPHIE",
    year: "2024",
    description: "Une exploration de la trame et du motif à travers la sérigraphie, jouant sur les superpositions et les effets de moirage.",
    images: [
      "/serigraphietram/1-seritram.webp",
      "/serigraphietram/2-seritram.webp",
      "/serigraphietram/3-seritram.webp"
    ],
    details: ["Sérigraphie", "Trame", "Graphisme"],
    span: "row-span-1"
  },
  {
    id: 18,
    title: "TYPO",
    category: "GRAPHISME",
    year: "2024",
    description: "Une recherche typographique explorant la structure de la lettre et son potentiel plastique à travers différentes expérimentations visuelles.",
    images: [
      "/typo/1-typo.webp",
      "/typo/2-typo.webp",
      "/typo/3-typo.webp",
      "/typo/4-typo.webp"
    ],
    details: ["Typographie", "Design Graphique", "Expérimentation"],
    span: "row-span-1"
  },
  {
    id: 19,
    title: "SPÉCIMEN",
    category: "MOTION",
    year: "2024",
    description: "Un spécimen typographique animé explorant le mouvement et la structure de la lettre dans un espace tridimensionnel.",
    images: [
      "/specimen/1-Specimen.mp4",
      "/specimen/2-specimen.webp",
      "/specimen/3-specimen.webp",
      "/specimen/4-specimen.webp"
    ],
    details: ["Motion Design", "Typography", "Video"],
    span: "row-span-2"
  },
  {
    id: 20,
    title: "MOTIFS",
    category: "RESEARCH",
    year: "2024",
    description: "Une collection de motifs expérimentaux explorant la répétition, le rythme et la couleur à travers différentes techniques de création numérique.",
    images: [
      "/motifs/1-motif.webp",
      "/motifs/2-motif.webp",
      "/motifs/3-motif.webp",
      "/motifs/4-motif.webp",
      "/motifs/5-motif.webp",
      "/motifs/6-motif.webp",
      "/motifs/7-motif.webp",
      "/motifs/8-motif.webp"
    ],
    details: ["Pattern Design", "Recherche Visuelle", "Digital"],
    span: "row-span-1"
  },
  {
    id: 21,
    title: "ÉDITION PASTEL",
    category: "EDITION",
    year: "2024",
    description: "Un projet d'édition explorant la douceur et la texture du pastel à travers une mise en page délicate et une recherche chromatique subtile.",
    images: [
      "/editionpastel/1-editionpastel.webp",
      "/editionpastel/2-editionpastel.webp",
      "/editionpastel/3-editionpastel.webp",
      "/editionpastel/4-editionpastel.webp",
      "/editionpastel/5-editionpastel.webp",
      "/editionpastel/6-editionpastel.webp"
    ],
    details: ["Édition", "Pastel", "Recherche Chromatique"],
    span: "row-span-2"
  },
  {
    id: 22,
    title: "JUNK JOURNAL",
    category: "EDITION",
    year: "2024",
    description: "Un journal d'expérimentation visuelle mêlant collages, textures et rebuts du quotidien pour créer une narration brute et spontanée.",
    images: [
      "/junkjournal/1-junk.webp",
      "/junkjournal/2-junk.webp",
      "/junkjournal/3-junk.webp",
      "/junkjournal/4-junk.webp",
      "/junkjournal/5-junk.webp",
      "/junkjournal/6-junk.webp",
      "/junkjournal/7-junk.webp"
    ],
    details: ["Journaling", "Collage", "Mixed Media"],
    span: "row-span-1"
  },
  {
    id: 23,
    title: "LINOGRAVURE",
    category: "GRAVURE",
    year: "2024",
    description: "Une série d'impressions en linogravure explorant le contraste, la ligne et la répétition à travers des motifs organiques et géométriques.",
    images: [
      "/linogravure/1-linogravure.webp",
      "/linogravure/2-linogravure.webp"
    ],
    details: ["Linogravure", "Estampe", "Noir & Blanc"],
    span: "row-span-1"
  },
  {
    id: 24,
    title: "REGARD À L'OEUVRE",
    category: "RESEARCH",
    year: "2024",
    description: "Une série photographique et éditoriale capturant le regard et l'interaction du public avec les oeuvres d'art, explorant la médiation et la perception.",
    images: [
      "/reagardaloeuvre/1-regard.webp",
      "/reagardaloeuvre/2-regard.webp",
      "/reagardaloeuvre/3-regard.webp",
      "/reagardaloeuvre/4-regard.webp",
      "/reagardaloeuvre/5-regard.webp",
      "/reagardaloeuvre/6-regard.webp",
      "/reagardaloeuvre/7-regard.webp",
      "/reagardaloeuvre/8-regard.webp",
      "/reagardaloeuvre/9-regard.webp",
      "/reagardaloeuvre/10-regard.webp",
      "/reagardaloeuvre/11-regard.webp"
    ],
    details: ["Photographie", "Médiation", "Édition"],
    span: "row-span-2"
  },
  {
    id: 25,
    title: "PHOTOS MARRAKECH",
    category: "PHOTOGRAPHIE",
    year: "2024",
    description: "Une série de captures photographiques réalisées à Marrakech, explorant la lumière, les textures architecturales et l'atmosphère unique de la ville.",
    images: [
      "/photosmarakech/1-marakech.webp",
      "/photosmarakech/2-marakech.webp",
      "/photosmarakech/3-marakech.webp",
      "/photosmarakech/4-marakech.webp",
      "/photosmarakech/5-marakech.webp",
      "/photosmarakech/6-marakech.webp"
    ],
    details: ["Carnet de voyage", "Photographie", "Maroc"],
    span: "row-span-1"
  },
  {
    id: 26,
    title: "PHOTOS TAGHAZOUT",
    category: "PHOTOGRAPHIE",
    year: "2024",
    description: "Une exploration photographique de Taghazout, capturant l'énergie de l'océan, les textures des villages de pêcheurs et la lumière sereine de la côte marocaine.",
    images: [
      "/photostaghazout/1-taghazout.webp",
      "/photostaghazout/2-taghazout.webp",
      "/photostaghazout/3-taghazout.webp",
      "/photostaghazout/4-taghazout.webp",
      "/photostaghazout/5-taghazout.webp",
      "/photostaghazout/6-taghazout.webp"
    ],
    details: ["Photographie", "Voyage", "Maroc"],
    span: "row-span-1"
  },
  {
    id: 27,
    title: "ELLES N'EXISTENT PAS",
    category: "EDITION",
    year: "2024",
    description: "Un projet d'édition explorant l'absence et l'invisibilité à travers une recherche visuelle et typographique sur la condition féminine.",
    images: [
      "/ellesnexistentpas/1-existepas.webp",
      "/ellesnexistentpas/2-existepas.webp",
      "/ellesnexistentpas/3-existepas.webp",
      "/ellesnexistentpas/4-existepas.webp",
      "/ellesnexistentpas/5-existepas.webp",
      "/ellesnexistentpas/6-existepas.webp",
      "/ellesnexistentpas/7-existepas.webp",
      "/ellesnexistentpas/8-existepas.webp"
    ],
    details: ["Édition", "Design Graphique", "Recherche"],
    span: "row-span-1"
  },
  {
    id: 28,
    title: "CALENDRIER",
    category: "EDITION",
    year: "2024",
    description: "Une série d'illustrations mensuelles pour un calendrier, explorant le passage du temps à travers des compositions graphiques et colorées.",
    images: [
      "/calendrier/1-janvier.webp",
      "/calendrier/2-fevrier.webp",
      "/calendrier/3-mars.webp",
      "/calendrier/4-avril.webp",
      "/calendrier/5-mai.webp",
      "/calendrier/6-juin.webp",
      "/calendrier/7-juillet.webp",
      "/calendrier/8-aout.webp",
      "/calendrier/9-septembre.webp",
      "/calendrier/10-octobre.webp",
      "/calendrier/11-novembre.webp",
      "/calendrier/12-decembre.webp"
    ],
    details: ["Édition", "Illustration", "Design"],
    span: "row-span-2"
  },
  {
    id: 29,
    title: "CATALOGUE EXPO",
    category: "EDITION",
    year: "2024",
    description: "Conception éditoriale d'un catalogue d'exposition, explorant la mise en relation des oeuvres et la narration curatoriale à travers le design graphique.",
    images: [
      "/catalogueexpo/1-Voir-Autrement.mp4",
      "/catalogueexpo/2-expo.webp",
      "/catalogueexpo/3-expo.webp",
      "/catalogueexpo/4-expo.webp",
      "/catalogueexpo/5-expo.webp",
      "/catalogueexpo/6-expo.webp"
    ],
    details: ["Édition", "Catalogue", "Design Graphique"],
    span: "row-span-1"
  },
  {
    id: 30,
    title: "AFFICHE READ ME",
    category: "GRAPHISME",
    year: "2024",
    description: "Une affiche expérimentale explorant la relation entre le texte et l'image à travers une composition typographique forte et minimaliste.",
    images: [
      "/affichereadme/read-me.webp"
    ],
    details: ["Affiche", "Typography", "Design Graphique"],
    span: "row-span-2"
  }
];
