import { RefObject } from "react";

export const useDropDownPosition = (
  ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>,
) => {
  const getDropDownPosition = () => {
    if (!ref.current)
      return {
        top: 0,
        left: 0,
      };

    const rect = ref.current.getBoundingClientRect();
    const dropdownWidth = 240;

    // initial position
    let left = rect.left + window.scrollX;
    const top = rect.bottom + window.scrollY;

    // Right edge collision
    if (left + dropdownWidth > window.innerWidth) {
      // Align to the right edge of the button instead
      left = rect.right + window.scrollX - dropdownWidth;

      // Inner adjustment: If it's now bleeding off the left edge
      if (left < 0) {
        // FIX: Use innerWidth, not innerHeight for X-axis math
        left = window.innerWidth - dropdownWidth - 16;
      }
    }

    // Final failsafe for small mobile screens
    if (left < 0) {
      left = 16;
    }

    return { top, left };
  };

  return { getDropDownPosition };
};
