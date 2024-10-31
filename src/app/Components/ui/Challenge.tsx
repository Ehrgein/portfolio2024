import React from "react";
import ParagraphReveal from "../animations/ParagraphReveal";

function Challenge() {
  return (
    <div className="space-y-6 pt-6">
      <div className="flex flex-col">
        <h3 className="font-medium text-2xl">Challenge</h3>
        <div className="space-y-4 2xl:text-lg">
          <ParagraphReveal
            textContent={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`}
            textSize={"text-lg"}
            leading={"leading-loose"}
          />
          <ParagraphReveal
            textContent={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`}
            textSize={"text-lg"}
            leading={"leading-loose"}
          />
        </div>
      </div>
    </div>
  );
}

export default Challenge;
