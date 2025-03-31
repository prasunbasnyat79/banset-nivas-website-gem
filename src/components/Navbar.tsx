
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Features", path: "/features" },
  { name: "Gallery", path: "/gallery" },
  { name: "Family", path: "/family" },
  { name: "Why Visit", path: "/why-visit" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/80 backdrop-blur-md shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container flex items-center justify-between h-16">
        <NavLink
          to="/"
          className="text-lg font-medium tracking-tight"
          onClick={closeMenu}
        >
          Banset Niwās
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive 
                  ? "text-foreground bg-primary/20" 
                  : "text-foreground/70 hover:text-foreground hover:bg-accent/50"
              )}
            >
              {item.name}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="ml-2"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 bg-background md:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col p-4">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => cn(
                "px-4 py-3 rounded-md text-base font-medium transition-colors",
                isActive 
                  ? "text-foreground bg-primary/20" 
                  : "text-foreground/70 hover:text-foreground hover:bg-accent/50"
              )}
              onClick={closeMenu}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};
