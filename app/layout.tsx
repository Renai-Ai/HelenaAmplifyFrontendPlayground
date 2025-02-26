import type { Metadata } from "next";
import { Assistant } from "next/font/google";

const assistant = Assistant({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RenAi - Helena Playground",
  description: "Playground for Helena Shape Generation AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={assistant.className}>{children}</body>
    </html>
  );
}
