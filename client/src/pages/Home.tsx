import { Card } from "@/components/ui/card";
import astrobiteLogo from "@assets/generated_images/AstroBite_restaurant_logo_b8a8ea6d.png";

export default function Home() {
  const stats = [
    { number: "25+", label: "Unique Dishes", testId: "stat-dishes" },
    { number: "1000+", label: "Happy Customers", testId: "stat-customers" },
    { number: "Since 2087", label: "Serving Excellence", testId: "stat-since" },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="flex flex-col items-center text-center space-y-12 fade-in">
        <div className="space-y-6">
          <img
            src={astrobiteLogo}
            alt="AstroBite Logo"
            className="w-48 h-48 mx-auto object-contain"
            data-testid="img-logo"
          />
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-widest-plus text-primary glow-mars">
            ASTROBITE
          </h1>
          <p className="font-heading text-xl md:text-2xl tracking-wider text-secondary">
            Taste Beyond Earth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="glass p-8 hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={stat.testId}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="space-y-2">
                <h3 className="font-heading text-4xl md:text-5xl font-bold text-primary">
                  {stat.number}
                </h3>
                <p className="text-muted-foreground text-lg font-medium">
                  {stat.label}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="glass p-8 rounded-md max-w-2xl mt-8">
          <p className="text-lg leading-relaxed text-foreground/90">
            Welcome to Mars' premier dining destination. Experience cutting-edge
            culinary artistry in our state-of-the-art dome facility, where Earth's
            finest traditions meet interplanetary innovation.
          </p>
        </div>
      </div>
    </div>
  );
}
