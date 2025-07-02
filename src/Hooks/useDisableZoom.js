import { useEffect } from "react";

export default function useDisableZoom() {
  useEffect(() => {
    const stopZoom = e => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };
    window.addEventListener("wheel", stopZoom, { passive: false });
    return () => window.removeEventListener("wheel", stopZoom);
  }, []);
}
