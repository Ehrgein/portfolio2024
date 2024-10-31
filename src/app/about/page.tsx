"use client";
import React from "react";
import NavBar from "../Components/layout/NavBar";
import Image from "next/image";
import { compacta, ppneuemontreal } from "../helpers/fonts";
import bgimage from "../Assets/curology3.jpg";

function AboutPage() {
  return (
    <div className="bg-[#121212] pb-40">
      <NavBar />
      <div className="pt-[150px] w-full h-full px-56">
        <h1
          className={`${compacta.className} text-[#DCD8C0] text-7xl tracking-wider uppercase`}
        >
          Curology
        </h1>
        <div className="flex justify-between">
          <span
            className={`${ppneuemontreal.className} text-[#D1C9C9] text-lg block py-2`}
          >
            Personalized skincare service
          </span>
          <ul className="text-[#D1C9C9] flex items-center space-x-1">
            <li>NEXT JS</li>
            <span> - </span>
            <li>THREEJS </li>
            <span> - </span>
            <li>TAILWIND</li>
            <span> - </span>
            <li>FRAMER MOTION </li>
            <span> - </span>
            <li>WEBGL</li>
          </ul>
        </div>
        <div className="text-blue-50">
          <Image
            alt="curology Logo"
            src={bgimage}
            className="w-full max-h-[400px] object-cover"
          />
        </div>
      </div>
      <div className={`${ppneuemontreal.className} px-56`}>
        <h2 className={`text-white font-bold text-2xl pt-10`}>
          About Curology
        </h2>
        <p className="text-[#F3EEEE] pt-2 text-lg">
          Curology is a personalized skincare service designed to address a wide
          range of skin concerns through customized treatment plans. Founded on
          the principle that skincare should be tailored to individual needs,
          Curology offers a unique approach to dermatology by combining the
          convenience of telemedicine with the expertise of licensed
          dermatologists.
        </p>
      </div>{" "}
      <div className={`${ppneuemontreal.className} px-56`}>
        <h2 className={`text-white font-bold text-2xl pt-10`}>
          About Curology
        </h2>
        <p className="text-[#F3EEEE] pt-2 text-lg">
          Curology is a personalized skincare service designed to address a wide
          range of skin concerns through customized treatment plans. Founded on
          the principle that skincare should be tailored to individual needs,
          Curology offers a unique approach to dermatology by combining the
          convenience of telemedicine with the expertise of licensed
          dermatologists.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
