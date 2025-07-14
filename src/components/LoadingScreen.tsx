import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Animate out the loading screen
          gsap.to('.loading-screen', {
            opacity: 0,
            duration: 1,
            delay: 0.5,
            onComplete: () => {
              onLoadComplete();
            }
          });
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [onLoadComplete]);

  return (
    <div className="loading-screen fixed inset-0 bg-[#E5E5E0] z-50 flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="text-[20vw] font-bold leading-none mb-8">
          {progress}%
        </div>
        <div className="text-2xl text-zinc-600 uppercase tracking-widest">
          Loading
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-200">
        <div 
          className="h-full bg-black transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}