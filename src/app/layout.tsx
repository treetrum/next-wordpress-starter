import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getSiteSettings } from "@/server/actions";
import "../utils/env";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async (): Promise<Metadata> => {
  const meta = await getSiteSettings();

  return {
    title: {
      template: `%s | ${meta.title}`,
      default: meta.title,
    },
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
