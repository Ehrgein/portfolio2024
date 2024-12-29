"use client";
import React from "react";
import IntroAnimation from "./IntroAnimation";

export default function HomePageIntro({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <>
      {isLoading ? (
        <IntroAnimation isLoading={isLoading} setIsLoading={setIsLoading} />
      ) : (
        <>{children}</>
      )}
    </>
  );
}
