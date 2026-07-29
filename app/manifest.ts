import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GoTruckCheck",
    short_name: "GoTruckCheck",
    description:
      "Deadline monitoring, automatic reminders, and scheduling for Clean Truck Check testers.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f7f9",
    theme_color: "#1d4a9b",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
