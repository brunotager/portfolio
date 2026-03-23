import { CopyEmail } from "@/components/ui/CopyEmail";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center px-6 md:px-12 py-24 min-h-[calc(100vh-88px)] max-w-[800px] mx-auto w-full text-center">
      
      <h1 className="mb-6 max-w-[700px] mx-auto">
        Let&apos;s build something worth shipping.
      </h1>
      
      <p className="text-[18px] md:text-[22px] font-normal leading-[28px] md:leading-[32px] text-brand-text/80 mx-auto max-w-full mb-16 whitespace-nowrap">
        If you&apos;re hiring a product designer for sports, fitness, or health, I&apos;ll make this easy.
      </p>

      <div className="flex flex-col items-center w-full max-w-sm mx-auto">
        <CopyEmail isPrimary />
        
        <p className="text-brand-text/50 font-medium mt-4 mb-16">
          I respond the same day
        </p>

        <a 
          href="https://www.linkedin.com/in/brunotager" 
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-brand-text/75 hover:text-brand-accent transition-colors duration-200 underline decoration-1 underline-offset-4"
        >
          Connect on LinkedIn
        </a>
      </div>

    </main>
  );
}
