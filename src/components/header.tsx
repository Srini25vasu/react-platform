import { cn } from "@/lib/utils";
import { appRoutes } from "@/routes";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  cn(
    "text-sm font-medium text-slate-600 transition-colors hover:text-slate-900",
    isActive && "text-slate-900",
  );

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRoutes = appRoutes.filter((route) => route.showInNav);
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="flex h-16 mx-auto max-w-6xl items-center justify-between p-4">
        <span className="text-lg font-semibold text-slate-700">
          Srini Portfolio
        </span>
        <nav className="hidden items-center gap-4 md:flex">
          {navRoutes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={navLinkClassName}
            >
              {route.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          arial-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="flex flex-col gap-4 border-t border-slate-200 p-4 md:hidden">
          {navRoutes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={navLinkClassName}
            >
              {route.label}
            </NavLink>
          ))}
        </nav>
      )

      }
    </header>
  );
}
