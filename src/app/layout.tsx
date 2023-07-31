import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Filter from "@/components/Filter/Filter";
import Pagination from "@/components/Pagination/Pagination";
import UserItem from "@/components/UserItem/UserItem";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Users Search App",
  description: "Search users by country",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header title="Users Search App" />
        <Filter />
        <div className="container">
          <section className="card-row">
            <UserItem
              name="Nando Jeurissen"
              email="nando.jeurissen@example.com"
              country="Netherlands"
              photo="https://randomuser.me/api/portraits/men/10.jpg"
              gender="male"
              age={52}
            />
            <UserItem
              name="Nando Jeurissen"
              email="nando.jeurissen@example.com"
              country="Netherlands"
              photo="https://randomuser.me/api/portraits/men/10.jpg"
              gender="male"
              age={52}
            />
          </section>
        </div>
        <Pagination pageCount={6} pageNumber={1} />
        {children}
      </body>
    </html>
  );
}
