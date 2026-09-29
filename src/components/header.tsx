import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";
import { appRoutes } from "@/routes";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  cn(
    "text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white",
    isActive && "text-slate-900 dark:text-white",
  );

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navRoutes = appRoutes.filter((route) => route.showInNav);
  return (
    <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="flex h-16 mx-auto max-w-6xl items-center justify-between p-4">
        <span className="text-lg font-semibold text-slate-700 dark:text-slate-100">
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
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="flex flex-col gap-4 border-t border-slate-200 p-4 md:hidden dark:border-slate-800">
          {navRoutes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={navLinkClassName}
              onClick={() => setIsMenuOpen(false)}
            >
              {route.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
