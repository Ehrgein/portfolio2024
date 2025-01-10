"use client";
import React from "react";

function Socials() {
  const [currentTime, setCurrentTime] = React.useState("");

  const now = new Date();

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formattedTime = now.toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZoneName: "short",
      });

      setCurrentTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = now.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short",
  });

  return (
    <>
      <div
        className="flex items-end justify-between
       xl:px-24 lg:px-14 md:px-8 pb-5 mt-auto"
      >
        <div className="flex justify-between w-full border-[1px] border-t-[#00000040] border-b-0 border-l-0 border-r-0 pt-2">
          <div
            className="flex md:gap-6 mobilesm:gap-1 
            md:flex-row mobilesm:flex-col md:px-0 mobilesm:px-4 
            lg:items-center mobilesm:items-start"
          >
            <p className="md:text-lg mobilesm:text-sm">LOCAL TIME:</p>
            <span className="md:text-lg mobilesm:text-sm text-[#626060]">
              {formattedTime}
            </span>
          </div>
          <div
            className="flex md:flex-row mobilesm:flex-col md:gap-6 mobilesm:gap-1
          mobilesm:px-4"
          >
            <a
              href="https://github.com/Ehrgein"
              className="md:text-lg mobilesm:text-sm"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/alexisfordpy/"
              className="md:text-lg mobilesm:text-sm"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Socials;
