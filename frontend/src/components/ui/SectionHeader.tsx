import React from "react";
import { Badge } from "./Badge";

type SectionHeaderProps = {
  badgeText?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const containerAlign =
    align === "center"
      ? "items-center"
      : align === "right"
      ? "items-end"
      : "items-start";

  const textAlign =
    align === "center"
      ? "text-center"
      : align === "right"
      ? "text-right"
      : "text-left";

  return (
    <div className={`flex flex-col gap-[10px] md:gap-[15px] ${containerAlign} ${className}`}>
      {badgeText && <Badge>{badgeText}</Badge>}

      <div className={`flex flex-col gap-[15px] md:gap-[20px] ${containerAlign} ${textAlign}`}>
        <p className={`text-[32px] md:text-[56px] font-medium text-[#FAFAFAFA] ${textAlign}`}>
          {title}
        </p>
        {subtitle && (
          <p className={`text-[16px] md:text-[18px] font-normal text-[#FAFAFABF] ${textAlign}`}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

