import { Landmark, Scissors } from "lucide-react";

export const ITEMS = [
  { id: 1, cat: "Sites", title: "Rice Terraces of the Cordilleras", place: "Ifugao", year: "UNESCO 1995", icon: Landmark, color: "bg-jade",
    text: "Terraces carved into mountainsides by Ifugao farmers over centuries and kept alive by shared knowledge of water, soil and ritual.",
    tech: "Drone mapping and photogrammetry record terrace walls and irrigation lines for monitoring and repair." },
  { id: 2, cat: "Sites", title: "Historic Town of Vigan", place: "Ilocos Sur", year: "UNESCO 1999", icon: Landmark, color: "bg-rouge",
    text: "One of the best preserved Spanish colonial towns in Asia, blending Philippine, Chinese and European building traditions.",
    tech: "Laser scanning captures facades and cobbled streets so conservators can plan restoration." },
  { id: 3, cat: "Sites", title: "Baroque Churches of the Philippines", place: "Manila, Paoay, Miag-ao, Santa Maria", year: "UNESCO 1993", icon: Landmark, color: "bg-ink",
    text: "Four churches that show how Filipino craftsmen reshaped European Baroque with local materials and motifs.",
    tech: "3D models and virtual tours let people explore interiors without wearing down the originals." },
  { id: 4, cat: "Traditions", title: "Hudhud Chants of the Ifugao", place: "Ifugao", year: "UNESCO 2008", icon: Landmark, color: "bg-gold",
    text: "Epic narrative chants sung by women during rice harvest, weddings and funeral wakes, passed on by ear.",
    tech: "Field recordings with elder consent are archived with transcripts and translations." },
  { id: 5, cat: "Crafts", title: "T'nalak Weaving", place: "South Cotabato", year: "T'boli tradition", icon: Scissors, color: "bg-rouge",
    text: "T'boli weavers dye abaca fiber and weave patterns said to come from dreams, guided by the dream weaver tradition.",
    tech: "High-resolution macro photography documents patterns, dyes and weaving steps." },
  { id: 6, cat: "Crafts", title: "Batok, Kalinga Tattooing", place: "Buscalan, Kalinga", year: "Living tradition", icon: Scissors, color: "bg-jade",
    text: "Hand-tapped tattoos carry meaning about bravery, beauty and community, practiced by a few master artists today.",
    tech: "Interviews and motif catalogs, shared with the community's approval, support apprentices." },
];
