import React, { useEffect } from "react";

/**
 * Hook that alerts clicks away of the passed ref
 */
const useClickAway = (
  ref: React.MutableRefObject<Element>,
  handleClickOutside: () => void,
  dependency: boolean
) => {
  /**
   * Handle passed click outside
   */
  const handleClick = (event: any) => {
    if (ref.current && !ref.current.contains(event.target) && dependency) {
      handleClickOutside();
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClick);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClick);
    };
  });
};

export { useClickAway };
