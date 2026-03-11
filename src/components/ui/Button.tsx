import React from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const baseClasses =
  "inline-flex items-center justify-center  gap-[10px] rounded-[10px] px-[40.5px] py-[22px] text-sm font-medium transition-opacity transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-platform cursor-pointer";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-button text-body hover:bg-button/90",
  secondary:
    "bg-button-50 text-button hover:bg-button-50/80 border border-button/20",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

