import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Accordian = ({ heading, subheading, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const accordianVariants = {
    close: {
      height: "4.3rem",
      overflow: "hidden", // Ensure content is clipped when closed
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    open: {
      height: "auto", // Automatically adapts to content height
      overflow: "hidden", // Ensure smooth opening
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      animate={isOpen ? "open" : "close"}
      variants={accordianVariants}
      initial="close"
      className="overflow-hidden accordian mt-7"
    >
      <div className="flex gap-4 flex-col">
        <div className="flex justify-between items-center">
          <h1 className="text-7xl font-extralight leading-tight max-md:text-5xl uppercase">{heading}</h1>
          <div
            className="border border-black p-1 rounded-full cursor-pointer w-10 h-10 flex items-center justify-center translate-y-[-10px] max-md:translate-y-0"
            onClick={handleOpenClose}
          >
            {isOpen ? (
              <Minus className="w-5 h-5" />
            ) : (
              <Plus className="w-5 h-5" />
            )}
          </div>
        </div>
        <motion.div className="max-w-sm mb-4">
          <h2 className="font-semibold text-xl mb-4">{subheading}</h2>
          <p>{description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Accordian;
