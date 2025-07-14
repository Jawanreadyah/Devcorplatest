import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollProgress(targetId: string) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      scrub: 0.5,
      onUpdate: (self) => {
        setProgress(self.progress);
      }
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [targetId]);

  return progress;
}