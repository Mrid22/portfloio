import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Header from "../components/Header";
import Image from "next/image";
import Menu from "../components/Menu";
export const metadata: Metadata & { title: string } = {
  title: "Mridul Agarwal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header title={metadata.title} />
          <main>
            <div id={"Hero"} className={"w-screen h-screen relative"}>
              <Image src={"wallpaper.jpg"} alt={"wallpaper"} fill={true} />
            </div>
            <div className="absolute">{children}</div>
            <Menu />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
