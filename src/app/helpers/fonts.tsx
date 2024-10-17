import localFont from "next/font/local";
import { Lato } from "next/font/google";

export const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});1

export const compacta = localFont({
  src: [
    {
      path: "../../fonts/CompactaBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
});

export const ppneuemontreal = localFont({
  src: [
    {
      path: "../../fonts/ppneuemontreal-bold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../fonts/ppneuemontreal-book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/ppneuemontreal-medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});
