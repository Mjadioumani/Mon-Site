export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = [
  {
    id: "project-1",
    description: "Network Infrastructure & Security Setup",
    imageUrl: "/projet1.jpg",
    imageHint: "network infrastructure"
  },
  {
    id: "project-2",
    description: "HealWell Website Framer",
    imageUrl: "https://picsum.photos/seed/healwell/800/600",
    imageHint: "medical dashboard"
  },
  {
    id: "project-3",
    description: "Zenith Framer Website",
    imageUrl: "https://picsum.photos/seed/zenith/800/600",
    imageHint: "saas platform"
  },
  {
    id: "project-4",
    description: "Creative Framer Website",
    imageUrl: "https://picsum.photos/seed/creative/800/600",
    imageHint: "creative app design"
  }
];