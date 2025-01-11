"use client";
import { useRef } from "react";
import { Button } from "../ui/button";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface TextProps {
  label: string;
  className?: string;
  onClick?: () => void;
  variant?:
    | "default"
    | "menu"
    | "link"
    | "primary"
    | "outline"
    | null
    | undefined
    | "primaryOutline";
  size?:
    | "default"
    | "menu"
    | "primaryOutline"
    | "sm"
    | "lg"
    | "icon"
    | null
    | undefined;
}

const SlideInOut = ({
  label,
  className,
  onClick,
  variant = "primary",
  size = "default",
  ...props
}: TextProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const labelRef = useRef(null);

  const animate = () => {
    const button = buttonRef.current;
    if (!button) return;
    const height = button.getBoundingClientRect().height;

    const tl = gsap.timeline({
      ease: "power2.out",
    });
    tl.to(labelRef.current, { y: -height, duration: 0.3 });
    tl.set(labelRef.current, { y: height });
    tl.to(labelRef.current, { y: "0%", duration: 0.3 });
  };

  return (
    <Button
      ref={buttonRef}
      className={cn(
        "flex justify-center rounded-full items-center relative overflow-hidden",
        className
      )}
      onMouseEnter={animate}
      onClick={onClick}
      variant={variant}
      size={size}
      {...props}
    >
      <span className="sr-only">{label}</span>
      <span className="whitespace-pre relative flex h-full w-full justify-center items-center">
        <span ref={labelRef} className="relative letter">
          {label}
        </span>
      </span>
    </Button>
  );
};

export default SlideInOut;
