import type { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
  readonly children: ReactNode;
}

function Layout({children}: LayoutProps) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
