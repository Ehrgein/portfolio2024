// Changes the scale of an element, used mainly for the back to top button
const scaleVariant = {
  enter: {
    scale: 0.92,
  },
  exit: {
    scale: 1,
  },
};

const borderVariant = {
  enter: {
    x: "0%",
  },
  exit: {
    x: "-100%",
  },
};

// Moves an arrow upwards and resets to being the main element in view on "exit"
const arrowVariants = {
  enter: {
    y: "-100%",

    transition: { duration: 0.6, ease: [0.6, 0, 0, 1] },
  },
  leave: {
    y: "0%",
    transition: { duration: 0.4, ease: [0.75, 0, 0, 1] },
  },
};

// Moves an arrow upwards and resets to being hidden under the element
const slidingArrowVariant = {
  enter: {
    y: "-100%",

    transition: { duration: 0.6, ease: [0.6, 0, 0, 1] },
  },
  leave: {
    y: "100%",
    transition: { duration: 0.4, ease: [0.75, 0, 0, 1] },
  },
};

export { scaleVariant, arrowVariants, slidingArrowVariant, borderVariant };
