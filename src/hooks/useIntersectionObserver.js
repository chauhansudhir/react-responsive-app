import { useEffect, useRef } from "react";

// vary basic intersection observer hook
// this hook will call onChange function when the element is 50% visible
const useIntersectionObserver = (onChange) => {
  // to make sure useEffect wrong keeps cached data
  const elemRef = useRef();
  const ref = useRef();
  ref.current = onChange;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (ref && ref.current) {
            ref.current(entries[0].isIntersecting, entries[0]);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (elemRef && elemRef.current) {
      observer.observe(elemRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
    // since we are hiding ref div on the page so we need to ensure we register our observer element
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  return {
    ref: elemRef,
  };
};

export default useIntersectionObserver;
