//for reload site
import { useEffect } from "react";

const useReloadOnFocus = () => {
  useEffect(() => {
    const handleFocus = () => {
      window.location.reload();
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, []);
};

export default useReloadOnFocus;
