import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Login | London Web Design | Artistweb | Digital Agency",
  description: "Generated by create next app",
};

const onest = Onest({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${onest.className} antialiased overflow-x-hidden`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
