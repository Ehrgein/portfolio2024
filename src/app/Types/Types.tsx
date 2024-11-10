export type NavColor = "#121212" | "#DCD8C0";

export type fontData = {
  weight: string;
  fontName: string;
};

export interface Typographyprops {
  mainParagraph: string;
  fontText: fontData[];
  fontClassname: string;
}

export interface CustomTagTextRevealType {
  textContent: string;
  textColor?: string;
  textSize?: string;
  leading?: "leading-normal" | "leading-loose" | string;
  delayIndex?: number;
}
