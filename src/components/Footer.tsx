
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-6 bg-secondary/50">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-muted-foreground mb-4 md:mb-0">
          © {currentYear} Banset Niwās. All rights reserved.
        </div>
        
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <NavLink 
            to="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </NavLink>
          <NavLink 
            to="/about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </NavLink>
          <NavLink 
            to="/features"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </NavLink>
          <NavLink 
            to="/gallery"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Gallery
          </NavLink>
          <NavLink 
            to="/family"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Family
          </NavLink>
          <NavLink 
            to="/why-visit"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Why Visit
          </NavLink>
        </div>
      </div>
    </footer>
  );
};
