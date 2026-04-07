import Link from "next/link";
import Image from "next/image";

import { ReactNode } from "react";

export interface CaseStudyProps {
  title: string;
  summary: ReactNode;
  imageSrc?: string;
  href: string;
  imageBgColor?: string;
  imageAlign?: "left" | "center" | "right";
  imageFill?: boolean;
}

export function CaseStudyCard({ title, summary, imageSrc, href, imageBgColor, imageAlign = "center", imageFill = false }: CaseStudyProps) {
  return (
    <Link href={href} className="group block outline-none">
      <div className="flex flex-col gap-3 focus-visible:ring-2 focus-visible:ring-brand-accent outline-none">
        <div 
          className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px] md:rounded-[20px] transition-colors duration-500 bg-border-light/40 flex items-center justify-center p-6 md:p-8"
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-contain p-2 sm:p-4 md:p-8 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-brand-text/50">
              Image placeholder
            </div>
          )}
        </div>
        
        <div className="flex flex-col gap-1.5 mt-1 px-1">
          <h3 className="text-[20px] md:text-[22px] font-semibold leading-[28px] group-hover:text-brand-accent transition-colors duration-200">
            {title}
          </h3>
          <p className="text-[15px] md:text-[16px] leading-[24px] font-normal text-brand-text/80 [&_strong]:transition-colors [&_strong]:duration-200 group-hover:[&_strong]:text-brand-accent">
            {summary}
          </p>
          
          <div className="flex items-center text-[15px] font-medium text-brand-text/60 mt-1 md:hidden">
            Read Case Study <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
