import React from "react";

import HomePageContent from "./Pages/HomePageContent";
import ServerSideIntro from "./Components/transitions/ServerSideIntro";
import { ScrollProvider } from "./Components/context/ScrollContext";

export default function Home() {
  //ServerSideIntro does not execute, or own, anything related to ServerSideExample. What happens is that Home rendersServerSideExample as a server component
  // , owns it and then slots it inside ServerSideIntro as a children prop.

  return (
    <>
      <ScrollProvider>
        <ServerSideIntro>
          <HomePageContent />
        </ServerSideIntro>
      </ScrollProvider>
    </>
  );
}
