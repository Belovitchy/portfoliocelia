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
    id: 29,
    title: "VOIR AUTREMENT",
    category: "EDITION",
    year: "2024",
    description: "Réalisation d'un catalogue d'exposition pour 'Rien ne nous y préparait. Tout nous y préparait' de Wolfgang Tillmans au Centre Pompidou.",
    images: [
      "/catalogueexpo/1-Voir-Autrement.mp4",
      "/catalogueexpo/2-expo.webp",
      "/catalogueexpo/3-expo.webp",
      "/catalogueexpo/4-expo.webp",
      "/catalogueexpo/5-expo.webp",
      "/catalogueexpo/6-expo.webp"
    ],
    details: ["Édition", "17.6 x 25 cm", "32 pages"],
    span: "row-span-1"
  },
  {
    id: 30,
    title: "ARCHIVING IS THE NEW FOLK ART",
    category: "AFFICHE",
    year: "2024",
    description: "Travail de mise en page à partir du texte « Archiving is the new folk art » de Kenneth Goldsmith.",
    images: [
      "/affichereadme/read-me.webp"
    ],
    details: ["Affiche", "100 x 70 cm"],
    span: "row-span-2"
  },
  {
    id: 21,
    title: "PASTEL",
    category: "EDITION",
    year: "2024",
    description: "Un carnet d’exploration plastiques regroupant des dessins réalisés au pastel, puis redimensionnés et retouchés sur Photoshop.",
    images: [
      "/editionpastel/1-editionpastel.webp",
      "/editionpastel/2-editionpastel.webp",
      "/editionpastel/3-editionpastel.webp",
      "/editionpastel/4-editionpastel.webp",
      "/editionpastel/5-editionpastel.webp",
      "/editionpastel/6-editionpastel.webp"
    ],
    details: ["Édition", "14 x 20.5 cm", "96 pages"],
    span: "row-span-1"
  },
  {
    id: 14,
    title: "MANUEL DU CARRÉ GRANNY",
    category: "EDITION",
    year: "2024",
    description: "Un manuel qui répertorie toutes les étapes à suivre pour  réaliser un carré granny au crochet.",
    images: [
      "/editioncrochet/1-editioncrochet.webp",
      "/editioncrochet/2-editioncrochet.webp",
      "/editioncrochet/3-editioncrochet.webp",
      "/editioncrochet/4-editioncrochet.webp",
      "/editioncrochet/5-editioncrochet.webp"
    ],
    details: ["Édition", "21 x 14.8 cm", "40 pages"],
    span: "row-span-1"
  },
  {
    id: 20,
    title: "MOTIFS",
    category: "EDITION",
    year: "2024",
    description: "À l’aide de mes différentes expérimentations autour du travail du fil et de la laine, j’en ai retiré un certain nombre de formes. En les superposants j’ai créer un inventaire de toutes celles collectées.",
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
    details: ["Recherche Visuelle", "14.5 x 14.5 cm", "48 pages"],
    span: "row-span-1"
  },
  {
    id: 1,
    title: "MIKO",
    category: "Crochet",
    year: "2025",
    description: "En utilisant mon crochet et mes pelotes de laine, j’ai pu donner vie à mon personnage Miko à échelle humaine.",
    images: ["/miko/1miko.webp", "/miko/2-mikozen.webp", "/miko/3-mikopose.webp", "/miko/4-miko.webp"],
    details: ["Crochet", "Fait main", "1m25 x 45 cm"],
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
    details: ["Stop Motion", "10 sec"],
    span: "row-span-1"
  },
  {
    id: 5,
    title: "MIKO TECHNO",
    category: "ANIMATION 3D",
    year: "2024",
    description: "Animation de mon personnage sur Blender, gestion de la texture, du cadrage, des éclairages pour lui donner vie.",
    images: ["/animationblender/mikotechno.mp4"],
    details: ["Animation 3D", "Blender", "1 min 30"],
    span: "row-span-2",
    hasAudio: true
  },
  {
    id: 4,
    title: "MIKOTECHNO",
    category: "MODÉLISATION",
    year: "2024",
    description: "Modélisation, rig, texturing et rendu de mon personnage Miko sur Blender.",
    images: [
      "/blender/1-blender.webp",
      "/blender/2-blender.webp",
      "/blender/3-blender.webp",
      "/blender/4-blender.webp",
      "/blender/5-blender.webp",
      "/blender/6-blender.webp"
    ],
    details: ["Modélisation 3D", "Blender"],
    span: "row-span-1"
  },



  {
    id: 8,
    title: "LEPORELLO MIKO",
    category: "EDITION",
    year: "2024",
    description: "Série de leporellos explorant différentes techniques : fusain, feutre, pâte à modeler, collage et dessin traditionnel.",
    images: [
      "/leporellomiko/1-leporello.webp",
      "/leporellomiko/2-leporello.webp",
      "/leporellomiko/3-leporello.webp",
      "/leporellomiko/4-leporello.webp"
    ],
    details: ["80 x 7 cm"],
    span: "row-span-1"
  },
  {
    id: 6,
    title: "CARTES À JOUER MIKO",
    category: "AFFICHE",
    year: "2024",
    description: "Une série d'affiches expérimentales mêlant composition typographique et éléments modélisés sous Blender.",
    images: [
      "/affichesblender/3-affiche.webp",
      "/affichesblender/1-affiche.webp",
      "/affichesblender/2-affiche.webp",

      "/affichesblender/4-affiche.webp",
      "/affichesblender/5-affiche.webp",
      "/affichesblender/6-affiche.webp"
    ],
    details: ["Affiches", "29.7 x 42 cm"],
    span: "row-span-2"
  },
  {
    id: 3,
    title: "MIKO ET LA MOUCHE BD",
    category: "EDITION",
    year: "2024",
    description: "6 planches de bande dessinée mettant en scène Miko, un de mes personnages, qui tente désespérément d’attraper une mouche avec des moyens toujours plus démesurés.",
    images: [
      "/mikobd/1-tout.webp",
      "/mikobd/2-Mikobd.mp4",
      "/mikobd/3mikobd.webp",
      "/mikobd/4-colophon.webp",
      "/mikobd/bazzoka.webp",
      "/mikobd/scotch.webp"
    ],
    details: ["BD / Illustration", "14.8 x 21 cm", "16 pages"],
    span: "row-span-1"
  },
  {
    id: 7,
    title: "ANIMATION MIKO",
    category: "ANIMATION",
    year: "2024",
    description: "Une série de stop motion explorant différentes techniques : fusain, feutre, pâte à modeler, collage et dessin traditionnel.",
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
    details: ["Stop Motion", "3 sec"],
    span: "row-span-1"
  },

  {
    id: 9,
    title: "DOUDOUS",
    category: "EDITION",
    year: "2024",
    description: "Cette édition raconte l’histoire de 95 doudous sous la forme du journal intime d’un enfant. Les carnets qui se glissent à l’intérieur retracent l’histoire de l’arrivée des premières peluches.",
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
    details: ["19 x 13 cm", "128 pages"],
    span: "row-span-1"
  },
  {
    id: 10,
    title: "POSTER POSTER POSTER",
    category: "ANIMATION",
    year: "2024",
    description: "Poster animé qui met en scène ma collection de doudous et de peluches. Les dessins en arrière-plan sont animés en image par image sur Krita, tandis que le texte est directement animé dans After Effects.",
    images: [
      "/posterdoudou/1-Poster-Poster-Poster.mp4",
      "/posterdoudou/2-doudou1.webp",
      "/posterdoudou/3-doudou2.webp",
      "/posterdoudou/4-doudou3.webp"
    ],
    details: ["After Effects", "Krita", "45sec"],
    span: "row-span-2"
  },
  {
    id: 11,
    title: "MÉDIATION ATELIER ENFANTS",
    category: "COUTURE",
    year: "2024",
    description: "J’ai eu l’occasion d’animer des ateliers avec des enfants de 6 à 11 ans.Je leur ai proposé de dessiner un personnage pour ensuite le transformer en doudou en utilisant la couture. Ils ont adoré participer à cet atelier qui s’est réparti sur 4 semaines.",
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
    details: ["Couture"],
    span: "row-span-1"
  },
  {
    id: 12,
    title: "MÉDIATION ATELIER ENFANTS (RENDU)",
    category: "COUTURE",
    year: "2024",
    description: "Rendu des doudous créés lors des ateliers enfants.",
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
    details: ["~10 x 15 cm", "Couture"],
    span: "row-span-2"
  },
  {
    id: 13,
    title: "COUDRE L'IMAGINAIRE",
    category: "COUTURE",
    year: "2023",
    description: "Livre Objet qui retranscrit les différents ateliers de couture menés avec les enfants.",
    images: [
      "/coudreimaginaire/1-coudreim.webp",
      "/coudreimaginaire/2-coudreim.webp",
      "/coudreimaginaire/3-coudreim.webp",
      "/coudreimaginaire/4-coudreim.webp",
      "/coudreimaginaire/5-coudreim.webp"
    ],
    details: ["13.8 x 9.5 cm ", "22 pages"],
    span: "row-span-1"
  },

  {
    id: 15,
    title: "SANS-TITRE",
    category: "SÉRIGRAPHIE",
    year: "2024",
    description: "Essais d’impressions de deux tirages en sérigraphie sur de la laine. L’objectif était de tester les limites de la sérigraphie et de savoir jusqu’à quelle taille les textes sont visibles sur de la laine.",
    images: [
      "/serigraphielaine/1-serigraphielaine.webp",
      "/serigraphielaine/2-serigraphielaine.webp"
    ],
    details: ["Sérigraphie", "21 x 29.7 cm"],
    span: "row-span-2"
  },
  {
    id: 18,
    title: "POINT DE CROIX",
    category: "TYPOGRAPHIE",
    year: "2024",
    description: "J’ai utilisé des modules trouvés pour créer une typographie en point de croix.",
    images: [
      "/typo/1-typo.webp",
      "/typo/2-typo.webp",
      "/typo/3-typo.webp",
      "/typo/4-typo.webp"
    ],
    details: ["Typographie", "11 x 7.5 cm", "26 Matrices"],
    span: "row-span-1"
  },
  {
    id: 17,
    title: "SÉRIGRAPHIE TRAME",
    category: "SÉRIGRAPHIE",
    year: "2024",
    description: "Sérigraphie en quadrichromie qui reprend une sélection de motifs extraits du travail du fil et de la laine. La composition de motifs a été réalisée avec le site web TramSVG. Ces affiches sont en lien avec des extraits du livre de Tim Ingolg «Une brève histoire des lignes.»",
    images: [
      "/serigraphietram/1-seritram.webp",
      "/serigraphietram/2-seritram.webp",
      "/serigraphietram/3-seritram.webp"
    ],
    details: ["Sérigraphie", "89.5 x 64 cm"],
    span: "row-span-2"
  },
  {
    id: 19,
    title: "SPÉCIMEN",
    category: "TYPOGRAPHIE",
    year: "2024",
    description: "Spécimen typographique réalisé à partir d’une typo en point de croix faite sur des matrices.",
    images: [
      "/specimen/1-Specimen.mp4",
      "/specimen/2-specimen.webp",
      "/specimen/3-specimen.webp",
      "/specimen/4-specimen.webp"
    ],
    details: ["17.6 x 25 cm", "20 pages"],
    span: "row-span-1"
  },
  {
    id: 24,
    title: "REGARD À L'OEUVRE",
    category: "PHOTOGRAPHIE",
    year: "2024",
    description: "Pour cette série de 15 photographies, j’ai choisi de photographier les participants des ateliers tout public de mon école, tels que la gravure, le modèle vivant ou la peinture. Ces personnes, extérieures aux cursus habituels, viennent créer en dehors des heures de cours. J’ai voulu mettre en lumière leurs gestes de création, ainsi que l’expression de leur regard.",
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
    details: ["Photographie", "48.5 x 33 cm"],
    span: "row-span-2"
  },
  {
    id: 27,
    title: "CES PERSONNES N’EXISTENT PAS",
    category: "MONTAGE PHOTOGRAPHIQUE",
    year: "2024",
    description: "Série de 20 montages photos qui fusionnent plusieurs visages en un, donnant vie à de nouvelles personnalités.",
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
    details: ["Montage photographique", "42 x 29.7 cm"],
    span: "row-span-1"
  },
  {
    id: 25,
    title: "PHOTOS MARRAKECH",
    category: "PHOTOGRAPHIE",
    year: "2024",
    description: "Une série de photographies réalisées à Marrakech qui se concentre sur les gestes et les regards.",
    images: [
      "/photosmarakech/1-marakech.webp",
      "/photosmarakech/2-marakech.webp",
      "/photosmarakech/3-marakech.webp",
      "/photosmarakech/4-marakech.webp",
      "/photosmarakech/5-marakech.webp",
      "/photosmarakech/6-marakech.webp"
    ],
    details: ["Photographie"],
    span: "row-span-2"
  },
  {
    id: 26,
    title: "PHOTOS TAGHAZOUT",
    category: "PHOTOGRAPHIE",
    year: "2024",
    description: "Une exploration photographique de Taghazout.",
    images: [
      "/photostaghazout/1-taghazout.webp",
      "/photostaghazout/2-taghazout.webp",
      "/photostaghazout/3-taghazout.webp",
      "/photostaghazout/4-taghazout.webp",
      "/photostaghazout/5-taghazout.webp",
      "/photostaghazout/6-taghazout.webp"
    ],
    details: ["Photographie"],
    span: "row-span-1"
  },
  {
    id: 16,
    title: "DENTELLE",
    category: "MONOTYPE",
    year: "2024",
    description: "Création d’empreintes en utilisant de l’encre appliquée sur des napperons.",
    images: [
      "/dentelle/1-dentelle.webp",
      "/dentelle/2-dentelle.webp",
      "/dentelle/3-dentelle.webp",
      "/dentelle/4-dentelle.webp",
      "/dentelle/5-dentelle.webp",
      "/dentelle/6-dentelle.webp",
      "/dentelle/7-dentelle.webp"
    ],
    details: ["Monotypes", "42 x 29.7 cm"],
    span: "row-span-1"
  },
  {
    id: 22,
    title: "JUNK JOURNAL",
    category: "EDITION",
    year: "2024",
    description: "Un journal d'expérimentation visuelle mêlant collages et textures.",
    images: [
      "/junkjournal/1-junk.webp",
      "/junkjournal/2-junk.webp",
      "/junkjournal/3-junk.webp",
      "/junkjournal/4-junk.webp",
      "/junkjournal/5-junk.webp",
      "/junkjournal/6-junk.webp",
      "/junkjournal/7-junk.webp"
    ],
    details: ["Collage", "17.6 x 25 cm"],
    span: "row-span-1"
  },
  {
    id: 23,
    title: "LINOGRAVURE",
    category: "GRAVURE",
    year: "2024",
    description: "Une série de linogravure inspirée par les photographies de Charle Fréger.",
    images: [
      "/linogravure/1-linogravure.webp",
      "/linogravure/2-linogravure.webp"
    ],
    details: ["Linogravure", "Estampe"],
    span: "row-span-1"
  },




  // {
  //   id: 28,
  //   title: "CALENDRIER",
  //   category: "EDITION",
  //   year: "2024",
  //   description: "Une série d'illustrations mensuelles pour un calendrier, explorant le passage du temps à travers des compositions graphiques et colorées.",
  //   images: [
  //     "/calendrier/1-janvier.webp",
  //     "/calendrier/2-fevrier.webp",
  //     "/calendrier/3-mars.webp",
  //     "/calendrier/4-avril.webp",
  //     "/calendrier/5-mai.webp",
  //     "/calendrier/6-juin.webp",
  //     "/calendrier/7-juillet.webp",
  //     "/calendrier/8-aout.webp",
  //     "/calendrier/9-septembre.webp",
  //     "/calendrier/10-octobre.webp",
  //     "/calendrier/11-novembre.webp",
  //     "/calendrier/12-decembre.webp"
  //   ],
  //   details: ["Édition", "Illustration", "Design"],
  //   span: "row-span-2"
  // },


];
