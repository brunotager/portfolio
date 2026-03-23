import Link from "next/link";
import Image from "next/image";

export interface CaseStudyProps {
  title: string;
  summary: string;
  imageSrc?: string;
  href: string;
  imageBgColor?: string;
}

export function CaseStudyCard({ title, summary, imageSrc, href, imageBgColor }: CaseStudyProps) {
  return (
    <Link href={href} className="group block outline-none">
      <div className="flex flex-col gap-4 focus-visible:ring-2 focus-visible:ring-brand-accent rounded-[8px] p-2 -m-2 transition-colors">
        <div 
          className="relative aspect-video w-full overflow-hidden rounded-[8px] border border-border-light group-hover:border-border-dark transition-colors duration-200 p-4"
          style={{ backgroundColor: imageBgColor || '#0E0E0F' }}
        >          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-contain p-4 transition-transform duration-250 ease-out group-hover:scale-[1.05] rounded-[8px]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-brand-text/50">
              Image placeholder
            </div>
          )}
        </div>
        
        <div className="flex flex-col gap-2">
          <h3 className="text-[20px] md:text-[24px] font-semibold leading-[32px] md:leading-[32px] group-hover:text-brand-accent transition-colors duration-200">
            {title}
          </h3>
          <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[26px] font-normal text-brand-text/80">
            {summary}
          </p>
          
          <div className="flex items-center text-[16px] font-medium text-brand-text mt-2 md:hidden">
            View <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
