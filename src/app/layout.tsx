"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import { createContext, ReactNode, useContext, useState } from "react";
import { TrpcProvider } from "@/utils/trpc-provider";

const inter = Inter({ subsets: ["latin"] });

const PageContext = createContext("");
export function usePageContext() {
  return useContext(PageContext);
}
const PageContextContainer = ({
  children,
  search,
}: {
  children: ReactNode;
  search: string;
}) => {
  return <PageContext.Provider value={search}>{children}</PageContext.Provider>;
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [search, setSearch] = useState("");
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header
          title="Users Search App"
          search={search}
          setSearch={setSearch}
        />
        <TrpcProvider>
          <PageContextContainer search={search}>
            {children}
          </PageContextContainer>
        </TrpcProvider>
      </body>
    </html>
  );
}
