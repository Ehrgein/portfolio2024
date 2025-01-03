import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import { ppneuemontreal } from "../app/helpers/fonts";
import SmoothScrolling from "./helpers/SmoothScrolling";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //#fafafa

  // ;

  return (
    <html lang="en">
      <body className={`${ppneuemontreal.className} antialiased bg-[#161616]`}>
        <SmoothScrolling>
          <Suspense>{children}</Suspense>
          <div className="noise-bg"></div>
        </SmoothScrolling>
      </body>
    </html>
  );
}
