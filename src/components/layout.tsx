import type { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
  readonly children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
