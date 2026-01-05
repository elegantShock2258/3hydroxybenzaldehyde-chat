import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hydroxybenzaldehyde Chat",
    short_name: "HydroChat",
    description: "Levels.fyi assignment",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/icon.svg",
        sizes: "192x192",
        type: "image/svg",
      },
      {
        src: "/icon.svg",
        sizes: "512x512",
        type: "image/svg",
      },
    ],
  };
}
