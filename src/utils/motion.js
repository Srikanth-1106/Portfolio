/**
 * Creates a text animation variant with vertical fade-in
 * @param {number} delay - Delay before animation starts (in seconds)
 * @returns {Object} Framer Motion variant object
 */
export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

/**
 * Creates a fade-in animation from specified direction
 * @param {string} direction - Direction to animate from ('left', 'right', 'up', 'down')
 * @param {string} type - Animation type (e.g., 'spring', 'tween')
 * @param {number} delay - Delay before animation starts (in seconds)
 * @param {number} duration - Duration of animation (in seconds)
 * @returns {Object} Framer Motion variant object
 */
export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

/**
 * Creates a zoom-in animation
 * @param {number} delay - Delay before animation starts (in seconds)
 * @param {number} duration - Duration of animation (in seconds)
 * @returns {Object} Framer Motion variant object
 */
export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

/**
 * Creates a slide-in animation from specified direction
 * @param {string} direction - Direction to animate from ('left', 'right', 'up', 'down')
 * @param {string} type - Animation type (e.g., 'spring', 'tween')
 * @param {number} delay - Delay before animation starts (in seconds)
 * @param {number} duration - Duration of animation (in seconds)
 * @returns {Object} Framer Motion variant object
 */
export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

/**
 * Creates a staggered container for child animations
 * @param {number} staggerChildren - Delay between each child animation (in seconds)
 * @param {number} delayChildren - Initial delay before first child animates (in seconds)
 * @returns {Object} Framer Motion variant object
 */
export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
