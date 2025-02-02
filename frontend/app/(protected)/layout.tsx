import { Onest } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/sonner";
import Nav from "./_components/nav";

const onest = Onest({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Admin | London Web Design | Artistweb | Digital Agency",
  description: "Generated by Next.js",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
