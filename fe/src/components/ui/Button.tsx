import React from "react";

type ButtonVariant = "primary" | "secondary" | "spatial";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md";

    const variants = {
      primary:
        "bg-primary text-surface text-label-badge font-semibold px-5 py-2.5 hover:shadow-tier-1 hover:-translate-y-[1px]",
      secondary:
        "bg-surface border border-border text-primary text-label-badge font-semibold px-5 py-2.5 hover:bg-background",
      spatial:
        "bg-white/90 border border-border text-primary font-mono text-label-data-mono p-2 hover:bg-white backdrop-blur-md",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className || ""}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
