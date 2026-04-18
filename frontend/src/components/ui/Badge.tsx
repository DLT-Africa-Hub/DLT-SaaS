import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLSpanElement>;

const baseClasses =
  "inline-flex items-center justify-center gap-[10px] text-[14px] md:text-[18px] rounded-[20px] py-[5px] px-[10px] md:p-[10px]  border border-green-600 text-green-600 opacity-100 font-sf text-sm font-normal text-body";

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <span
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
