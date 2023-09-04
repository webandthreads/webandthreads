import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

function About(props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex bg-white shadow-sm border-[1px] flex-col"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex justify-center items-center md:h-[200px] w-full"
      >
        <Image
          className="object-contain object-center"
          alt="banner"
          src={props.image}
          sizes="100%"
          objectFit="contain"
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>
      <div className="px-5 py-2 bg-white text-black">
        <h1 className="text-sm font-bold">{props.title}</h1>
        <div className="w-[40px] h-1 mt-1 bg-primary"></div>
        <p className="text-xs mt-2">{props.description}</p>
      </div>
    </motion.div>
  );
}

export default About;
