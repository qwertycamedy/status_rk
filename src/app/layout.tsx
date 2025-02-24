import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/styles/globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--ff",
});

export const metadata: Metadata = {
  title: "Status RK",
  description: "Status RK",
  icons: '/assets/img/favicon.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className="scroll-smooth"
    >
      <body className={`${manrope.className} antialiased text-[12px] lg:text-[14px] tracking-[-0.03em]`}>{children}</body>
    </html>
  );
}
