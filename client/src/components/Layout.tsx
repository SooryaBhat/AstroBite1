import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HamburgerMenu } from "./HamburgerMenu";
import { useTheme } from "./ThemeProvider";
import marsBackground from "@assets/generated_images/Mars_night_landscape_background_28d8bdef.png";

export function Layout({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: `url(${marsBackground})`,
          backgroundAttachment: "fixed",
        }}
      />

      <div className="fixed inset-0 bg-black/40 -z-10" />

      <header className="fixed top-0 left-0 right-0 z-40 p-4 flex justify-between items-center">
        <Button
          size="icon"
          variant="ghost"
          onClick={toggleTheme}
          data-testid="button-theme-toggle"
          className="glass-light"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>

        <HamburgerMenu />
      </header>

      <main className="relative z-10 pt-20">{children}</main>
    </div>
  );
}
