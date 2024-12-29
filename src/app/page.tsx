import React from "react";

import HomePageContent from "./Pages/HomePageContent";
import HomePageIntro from "./Components/transitions/HomePageIntro";
import { ScrollProvider } from "./Components/context/ScrollContext";

export default function Home() {
  //HomePageIntro does not execute, or own, anything related to ServerSideExample. What happens is that Home rendersServerSideExample as a server component
  // , owns it and then slots it inside HomePageIntro as a children prop.

  return (
    <>
      <ScrollProvider>
        <HomePageIntro>
          <HomePageContent />
        </HomePageIntro>
      </ScrollProvider>
    </>
  );
}
