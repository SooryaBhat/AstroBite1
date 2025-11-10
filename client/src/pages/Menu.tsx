import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search, Filter } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { MenuItem } from "@shared/schema";

export default function Menu() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: menuItems, isLoading } = useQuery<MenuItem[]>({
    queryKey: ["/api/menu"],
  });

  const featuredItems = menuItems?.filter((item) => item.featured === 1) || [];
  const allItems = menuItems || [];

  const filteredItems = allItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="sticky top-20 z-30 glass p-4 rounded-md mb-8 flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search dishes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
            data-testid="input-search"
          />
        </div>
        <Button variant="outline" size="icon" data-testid="button-filter">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {!searchTerm && featuredItems.length > 0 && (
        <section className="mb-16 fade-in">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wider text-primary mb-6">
            RECOMMENDED MENU
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <Card
                key={item.id}
                className="glass overflow-hidden hover-elevate active-elevate-2 transition-all"
                data-testid={`card-featured-${item.id}`}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    data-testid={`img-dish-${item.id}`}
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start gap-2">
                    <CardTitle className="font-heading text-xl tracking-wider">
                      {item.name}
                    </CardTitle>
                    <Badge className="glow-mars" data-testid={`badge-price-${item.id}`}>
                      ${item.price}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Badge variant="secondary" data-testid={`badge-category-${item.id}`}>
                    {item.category}
                  </Badge>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      )}

      <section className="fade-in" style={{ animationDelay: "0.2s" }}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wider text-primary mb-6">
          {searchTerm ? "SEARCH RESULTS" : "FULL MENU"}
        </h2>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="glass p-6 animate-pulse">
                <div className="h-6 bg-primary/20 rounded w-3/4 mb-2" />
                <div className="h-4 bg-muted/20 rounded w-full" />
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="glass p-6 hover-elevate active-elevate-2 transition-all"
                data-testid={`card-menu-${item.id}`}
              >
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <h3 className="font-heading text-xl tracking-wider text-foreground">
                        {item.name}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Badge className="glow-mars text-lg px-4 py-2">
                      ${item.price}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
