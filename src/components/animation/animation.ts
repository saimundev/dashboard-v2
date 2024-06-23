export const heightAnimate = {
  hide: {
    height: 0,
  },
  show: {
    height: "auto",

    transition: { duration: 0.5 },
  },
  exit: {
    height: 1,
    transition: { duration: 0.5 },
  },
};

export const modalAnimate = {
  hide: {
    opacity: 0,
    scale: 0.8,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

export const modalAnimateSlideDown = {
  hide: {
    opacity: 0,
    y: "-100%",
  },
  flip: {
    scale: 1.3,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export const modalOverlyAnimate = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};
