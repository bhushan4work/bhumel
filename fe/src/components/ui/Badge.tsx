import React from "react";

type BadgeVariant = "cadastral" | "municipal" | "variance";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({ variant = "cadastral", className, children, ...props }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center px-2 py-0.5 rounded-full text-label-badge font-mono border";

  const variants = {
    cadastral: "bg-blueprint-blue border-blueprint-border text-secondary",
    municipal: "bg-cadastral-emerald-subtle border-cadastral-emerald-border text-tertiary",
    variance: "bg-variance-amber-subtle border-variance-amber-border text-variance-amber",
  };

  return (
    <span
      className={`${baseStyles} ${variants[variant]} ${className || ""}`}
      {...props}
    >
      {variant === "variance" && (
        <span className="w-1.5 h-1.5 rounded-full bg-variance-amber mr-1.5"></span>
      )}
      {children}
    </span>
  );
}
