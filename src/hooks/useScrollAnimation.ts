import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationProps {
  element: string;
  trigger?: string;
  start?: string;
  animations?: gsap.TweenVars;
}

export function useScrollAnimation({ element, trigger, start = "top 80%", animations }: ScrollAnimationProps) {
  const componentRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!componentRef.current) return;

    const elements = componentRef.current.querySelectorAll(element);
    
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: trigger || el,
            start,
            toggleActions: "play none none reverse",
            ...animations
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [element, trigger, start, animations]);

  return componentRef;
}