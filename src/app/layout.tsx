import type { Metadata } from "next";
import "./globals.css";
import "./../stylesheets/commenClasses.css";
import "./../stylesheets/antdOverride.css";
import "./../stylesheets/layout.css";
import "./../stylesheets/loader.css";
import LayoutProvider from "@/components/LayoutProvider";
import ReduxProvider from "@/components/ReduxProvider";

export const metadata: Metadata = {
  title: "A K M-JOPS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <LayoutProvider>{children}</LayoutProvider>
    </ReduxProvider>
  );
}
