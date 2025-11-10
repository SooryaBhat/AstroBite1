import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="space-y-8 fade-in">
        <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-widest-plus text-primary text-center glow-mars">
          ABOUT ASTROBITE
        </h1>

        <Card className="glass p-8 md:p-12">
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg md:text-xl">
              In 2087, humanity's dream of establishing a permanent presence on Mars
              became reality. Among the first structures erected in the Valles
              Marineris settlement was AstroBite—not just a restaurant, but a symbol
              of human ingenuity and our eternal quest to bring comfort and culture
              to the frontier.
            </p>

            <p className="text-lg">
              Founded by Chef Elena Kowalski, a culinary visionary who left Earth's
              finest establishments to pursue something extraordinary, AstroBite
              represents the fusion of terrestrial tradition with Martian innovation.
              Our state-of-the-art dome facility features transparent aluminum panels
              offering breathtaking views of the Martian landscape, creating an
              ambiance unlike any dining experience in the solar system.
            </p>

            <p className="text-lg">
              Every dish served at AstroBite tells a story—of the hydroponics gardens
              that grow fresh produce under simulated Earth-like conditions, of the
              innovative techniques required to cook at reduced atmospheric pressure,
              and of the determination to maintain the highest culinary standards
              225 million kilometers from home.
            </p>
          </div>
        </Card>

        <Card className="glass p-8 md:p-12 fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wider text-primary mb-6">
            OUR MISSION
          </h2>
          <div className="space-y-4 text-foreground/90 leading-relaxed">
            <p className="text-lg">
              To elevate the human experience beyond Earth by creating exceptional
              dining moments that nourish both body and spirit. We believe that great
              food connects us to our humanity, no matter where in the universe we
              find ourselves.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4" data-testid="value-innovation">
                <h3 className="font-heading text-xl text-secondary mb-2">
                  INNOVATION
                </h3>
                <p className="text-sm text-muted-foreground">
                  Pioneering culinary techniques adapted for Mars
                </p>
              </div>
              <div className="text-center p-4" data-testid="value-quality">
                <h3 className="font-heading text-xl text-secondary mb-2">
                  QUALITY
                </h3>
                <p className="text-sm text-muted-foreground">
                  Uncompromising standards in every dish
                </p>
              </div>
              <div className="text-center p-4" data-testid="value-community">
                <h3 className="font-heading text-xl text-secondary mb-2">
                  COMMUNITY
                </h3>
                <p className="text-sm text-muted-foreground">
                  Bringing settlers together through shared meals
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
