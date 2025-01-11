"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const ImageComponent = ({ src, alt, className }: ImageProps) => {
  const [isImageLoading, setImageLoading] = useState(true);

  return (
    <Image
      alt={alt}
      src={src}
      fill
      onLoad={() => setImageLoading(false)}
      className={cn("object-cover h-full w-full", className, {
        "blur-img": isImageLoading,
        "remove-img-blur": !isImageLoading,
      })}
    />
  );
};

export default ImageComponent;
