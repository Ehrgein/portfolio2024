import localFont from "next/font/local";

export const compacta = localFont({
  src: [
    {
      path: "../fonts/Compacta Bold.otf",
      weight: "800",
      style: "normal",
    },
  ],
});

export const ppneuemontreal = localFont({
  src: [
    {
      path: "../fonts/ppneuemontreal-bold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/ppneuemontreal-book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ppneuemontreal-medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});
