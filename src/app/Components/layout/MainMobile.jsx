import React from "react";

function MainMobile() {
  return (
    <main className="hidden md:block">
      <div>
        <motion.main
          key="main-content"
          ref={containerRef}
          className={`h-[200vh] py-2 relative`}
        >
          <WhiteNavbar navBarColor={navBarColor} />
          <motion.div
            style={{ opacity }}
            ref={mainRef}
            className={`sticky top-0 justify-center w-full flex flex-col flex-grow`}
          >
            <section className="h-screen w-full flex flex-col px-4">
              <PresentationParagraph />
            </section>
          </motion.div>
          <section
            ref={projectsectionRef}
            className="relative w-full bg-[#161616] px-32 pt-20 pb-32"
          >
            <SectionTwo />
          </section>
          <section className="py-20 h-screen">
            <p>hello!</p>
          </section>
        </motion.main>
      </div>
    </main>
  );
}

export default MainMobile;
