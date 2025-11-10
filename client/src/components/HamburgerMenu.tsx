import { useState } from "react";
import { Link, useLocation } from "wouter";
import { X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { path: "/", label: "Home" },
  { path: "/menu", label: "Menu" },
  { path: "/about", label: "About" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact" },
];

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => setIsOpen(true)}
        data-testid="button-menu-open"
        className="relative z-50"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
            data-testid="overlay-menu"
          />

          <div
            className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] glass z-50 ${
              isOpen ? "slide-in-right" : "slide-out-right"
            }`}
            data-testid="menu-panel"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-12">
                <h2 className="font-heading text-2xl tracking-widest-plus text-primary">
                  MENU
                </h2>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setIsOpen(false)}
                  data-testid="button-menu-close"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <nav className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <button
                      onClick={() => setIsOpen(false)}
                      data-testid={`link-${item.label.toLowerCase()}`}
                      className={`w-full text-left px-6 py-4 rounded-md font-heading text-lg tracking-wider transition-all ${
                        location === item.path
                          ? "bg-primary/20 text-primary border border-primary/30"
                          : "hover-elevate active-elevate-2"
                      }`}
                    >
                      {item.label}
                    </button>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
