import * as React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  href?: string;
  asChild?: boolean;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", href, asChild, children, target, rel, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary: "bg-brand-accent text-white hover:bg-[#b08731] px-[24px] py-3 rounded-full",
      outline:
        "border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white px-[24px] py-3 rounded-full",
    };

    const classes = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
      return (
        <Link href={href} className={classes} target={target} rel={rel}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
