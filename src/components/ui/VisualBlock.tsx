"use client";

import Image from "next/image";
import { useState } from "react";

export function VisualBlock({ src, alt, className = "my-4", contained = false }: { src?: string | string[], alt: string, className?: string, contained?: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  if (!src || src.length === 0) return null;
  
  if (Array.isArray(src)) {
    return (
      <div className={`w-full relative flex flex-col ${className}`}>
        <div 
          className="w-full relative flex justify-start sm:items-stretch overflow-x-auto snap-x snap-mandatory gap-2 sm:gap-4 md:gap-6 lg:gap-8 pb-4 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onScroll={(e) => {
            const el = e.currentTarget;
            // If scrolled more than 30% of its width, consider it slide 2 since it's a simple 2 item carousel
            if (el.scrollLeft > el.clientWidth * 0.3) {
              setActiveIndex(1);
            } else {
              setActiveIndex(0);
            }
          }}
        >
          {src.flatMap((s, idx) => {
            const imageClasses = contained 
              ? "h-auto block w-full max-w-[280px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[450px] mx-auto my-6 rounded-[8px]" 
              : "w-auto max-w-full h-auto max-h-[70vh] block mx-auto";
              
            const innerContainerClasses = contained
              ? "w-full rounded-[16px] overflow-hidden relative bg-border-light/40 flex justify-center py-8 h-full"
              : "w-full rounded-[16px] overflow-hidden relative flex justify-center h-full";

            const imageNode = (
              <div key={`img-${idx}`} className="shrink-0 w-[88vw] sm:max-w-none sm:w-auto sm:flex-1 snap-start flex items-center">
                <div className={innerContainerClasses}>
                  {s.endsWith('.mp4') ? (
                    <video src={s} autoPlay loop muted playsInline className={imageClasses} />
                  ) : (
                    <Image src={s} alt={`${alt} ${idx + 1}`} width={1600} height={900} className={imageClasses} unoptimized={s.endsWith('.gif')} />
                  )}
                </div>
              </div>
            );

            if (idx === 0 && src.length === 2) {
              const arrowNode = (
                <div key="arrow" className="shrink-0 flex items-center justify-center w-0 max-w-0 sm:max-w-[48px] sm:w-10 md:w-12 opacity-0 sm:opacity-100 overflow-hidden sm:overflow-visible pointer-events-none sm:pointer-events-auto">
                  <div className="text-brand-accent shrink-0 w-10 h-10 md:w-12 md:h-12 bg-brand-bg rounded-full flex items-center justify-center shadow-lg transform scale-50 sm:scale-100">
                    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              );
              return [imageNode, arrowNode];
            }

            return [imageNode];
          })}
        </div>
        
        {/* Mobile Pagination Dots */}
        {src.length > 1 && (
          <div className="flex sm:hidden justify-center items-center gap-2 mt-4 pb-1">
            {src.map((_, i) => (
              <div 
                key={i} 
                className={`transition-all duration-300 rounded-full ${activeIndex === i ? 'w-2 h-2 bg-brand-accent' : 'w-1.5 h-1.5 bg-brand-text/20'}`} 
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  const imageClasses = contained 
    ? "h-auto block w-full max-w-[280px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[450px] mx-auto my-6 rounded-[8px]" 
    : "w-full h-auto block rounded-[8px] md:rounded-[12px]";
    
  const containerClasses = contained
    ? `w-full rounded-[16px] overflow-hidden relative bg-border-light/40 flex justify-center py-8 ${className}`
    : `w-full rounded-[16px] overflow-hidden relative flex justify-center ${className}`;

  return (
    <div className={containerClasses}>
      {src.endsWith('.mp4') ? (
        <video src={src} autoPlay loop muted playsInline className={imageClasses} />
      ) : (
        <Image src={src} alt={alt} width={1600} height={900} className={imageClasses} unoptimized={src.endsWith('.gif')} />
      )}
    </div>
  );
}
