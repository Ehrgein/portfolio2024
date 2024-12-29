"use client";
import React from "react";
import IntroAnimation from "./IntroAnimation";
import ServerSideExample from "../ui/ServerSideExample";

export default function ServerSideIntro({
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
