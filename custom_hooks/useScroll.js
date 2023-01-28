import { useEffect, useRef, useState } from "react";

const useScroll = () => {
  const scrollRef = useRef(null);
  const [scroll, setScroll] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!scrollRef.current) {
      return;
    }
    setOffset(scrollRef.current.offsetTop);
  }, [scrollRef, setOffset]);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) {
        return;
      }

      setScroll(window.scrollY > offset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScroll, scrollRef, offset]);
  return { scrollRef, scroll };
};

export default useScroll;