import React from "react";

function ColorPalette() {
  return (
    <div className="space-y-6 pt-6">
      <h3 className="font-medium text-xl">Color Palette</h3>
      <p className="text-base">
        The brand is known for its simple black and white aesthetic, with orange
        accent colors.
      </p>
      <div className="text-base pt-6">Primary Colors</div>
      <div className="grid grid-cols-8 gap-12">
        <div className="bg-white border-[#8E8E8E] h-[250px] col-span-3 border-[1px] pt-4">
          <span className="text-base pt-4 pl-6 block">White</span>
          <span className="text-base pt-4 pl-6 block text-[#828080]">
            Primary Background Color
          </span>
        </div>
        <div className="border-[#8E8E8E] h-[250px] col-span-3 border-[1px]">
          <div className="h-full grid grid-rows-9">
            <div className="bg-[#1E1E1E] row-span-6 pt-4">
              <span className="text-base pt-4 pl-6 block text-white">
                Black
              </span>
              <span className="text-base pt-4 pl-6 block text-[#828080]">
                Base UI Color
              </span>
            </div>
            <div className="bg-[#464646]"></div>
            <div className="bg-[#797878]"></div>
            <div className="bg-[#9F9C9C]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorPalette;
