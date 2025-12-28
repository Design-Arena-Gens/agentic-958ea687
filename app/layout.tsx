import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Script to Pixar Animation Prompts",
  description: "Break scripts into scenes and generate sequential clip prompts for 3D Pixar-style AI videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
