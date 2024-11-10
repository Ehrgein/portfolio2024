import React from "react";

function HomePage() {
  return (
    <>
      <div className="hidden md:block">
        <div>
          <motion.main
            key="main-content"
            ref={containerRef}
            className={`h-[200vh] py-2 relative`}
          >
            <WhiteNavbar
              isLoading={isLoading}
              scrollYProgress={scrollYProgress}
              navBarColor={navBarColor}
            />
            <SectionOne opacity={opacity} />
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
      </div>
      <div className="noise-bg"></div>
      {/* mobile layout */}
      <div className="md:hidden">
        <main className="mb-[-100svh] overflow-x-clip">
          <div>
            <motion.main
              key="main-content"
              ref={containerRef}
              className={`h-[200vh] py-2 relative`}
            >
              <WhiteNavbar
                isLoading={isLoading}
                scrollYProgress={scrollYProgress}
                navBarColor={navBarColor}
              />
              <motion.div
                style={{ opacity }}
                // ref={mainRef}
                className={`sticky top-0 h-[100svh] items-end justify-center w-full flex flex-col flex-grow`}
              >
                <section className="w-full flex flex-col px-4">
                  <PresentationParagraph />
                </section>
              </motion.div>
              <SectionOne opacity={opacity} />
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
      </div>
    </>
  );
}

export default HomePage;
