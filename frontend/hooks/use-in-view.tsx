import { useState, useEffect } from "react";

interface UseInViewOptions {
  targetSelector?: string | React.RefObject<HTMLElement>;
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
}

const useInView = (options: UseInViewOptions = {}): boolean => {
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const { threshold = 0.1, targetSelector, root, rootMargin } = options;

    // Determine if targetSelector is a string or a ref
    let targetElement: HTMLElement | null = null;

    if (typeof targetSelector === "string") {
      targetElement = document.querySelector(targetSelector);
    } else if (targetSelector && "current" in targetSelector) {
      targetElement = targetSelector.current;
    }

    if (!targetElement) return; // No element to observe

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(targetElement);

    return () => {
      observer.unobserve(targetElement);
    };
  }, [options]);

  return inView;
};

export default useInView;
