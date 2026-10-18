import { Film, Box } from "lucide-react";

// ADD YOUR REAL MEDIA HERE. Put files in /public (images/, videos/) or use full URLs.
// Photos for the heritage collection, by item id. Leave "" to show the woven pattern.
export const IMG = {
  1: "/images/rice-terraces.jpg",
  2: "/images/vigan.jpg",
  3: "/images/paoay-church.jpg",
  4: "/images/hudhud.jpg",
  5: "/images/tnalak.jpg",
  6: "/images/batok.jpg",
};

// Video: .mp4 file or a YouTube embed link (https://www.youtube.com/embed/VIDEO_ID).
// 3D: a Sketchfab embed link.
export const SRC = {
  "Walking the Ifugao terraces": "/videos/terraces.mp4",
  "Inside Paoay Church": "/videos/paoay.mp4",
  "A day with a T'boli weaver": "/videos/tboli-weaver.mp4",
};

export const MEDIA = {
  Video: { icon: Film, items: [["Walking the Ifugao terraces", "6:20"], ["Inside Paoay Church", "4:45"], ["A day with a T'boli weaver", "8:10"]] },
  "3D": { icon: Box, items: [["Miag-ao facade model", "Rotate"], ["Abaca loom model", "Rotate"], ["Terrace wall section", "Rotate"]] },
};
