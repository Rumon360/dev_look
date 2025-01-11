"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Providers({ children }: Props) {
  return <ReactLenis root>{children}</ReactLenis>;
}

export default Providers;
