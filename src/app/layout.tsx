import "~/styles/globals.css";

import { type Metadata } from "next";
import TopNav from "./_components/TopNav";
import { GeistSans } from "geist/font/sans";
import { ClerkProvider } from "@clerk/nextjs";
import { ourFileRouter } from "./api/uploadthing/core";
import { extractRouterConfig } from "uploadthing/server";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";

export const metadata: Metadata = {
  title: "T3 Stack Gallery!",
  description: "Generated by a theo subscriber",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        {/*  Makes sure generated button from uploadThing shows from server side */}
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <body className="dark font-sans">
          <div className="grid h-screen grid-rows-[auto,1fr]">
            <TopNav />
            <main className="">{children}</main>
          </div>
          {modal}
          <div id="modal-root" />
        </body>
      </html>
    </ClerkProvider>
  );
}
