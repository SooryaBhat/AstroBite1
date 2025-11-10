import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { Review } from "@shared/schema";

import gallery1 from "@assets/generated_images/Restaurant_interior_view_one_57f61f68.png";
import gallery2 from "@assets/generated_images/Table_setting_detail_8c962189.png";
import gallery3 from "@assets/generated_images/Dome_window_view_86bd9a2a.png";
import gallery4 from "@assets/generated_images/Open_kitchen_view_0d12efcd.png";
import dish1 from "@assets/generated_images/Futuristic_dish_Neptune_Nebula_99a56868.png";
import dish2 from "@assets/generated_images/Futuristic_dish_Mars_Medley_a3389a16.png";
import dish3 from "@assets/generated_images/Futuristic_dessert_Cosmic_Cake_97360d33.png";
import dish4 from "@assets/generated_images/Signature_cocktail_Red_Planet_da4dab4e.png";

const galleryImages = [
  { src: gallery1, alt: "Restaurant interior with Mars view", testId: "img-gallery-1" },
  { src: gallery2, alt: "Elegant table setting", testId: "img-gallery-2" },
  { src: gallery3, alt: "Dome window panorama", testId: "img-gallery-3" },
  { src: gallery4, alt: "Open kitchen experience", testId: "img-gallery-4" },
  { src: dish1, alt: "Neptune Nebula signature dish", testId: "img-gallery-5" },
  { src: dish2, alt: "Mars Medley appetizer", testId: "img-gallery-6" },
  { src: dish3, alt: "Cosmic Cake dessert", testId: "img-gallery-7" },
  { src: dish4, alt: "Red Planet cocktail", testId: "img-gallery-8" },
];

export default function Gallery() {
  const { data: reviews, isLoading } = useQuery<Review[]>({
    queryKey: ["/api/reviews"],
  });

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-widest-plus text-primary text-center mb-12 glow-mars fade-in">
        EXPERIENCE
      </h1>

      <section className="mb-16 fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="glass rounded-md overflow-hidden hover-elevate active-elevate-2 transition-all aspect-square"
              data-testid={image.testId}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="fade-in" style={{ animationDelay: "0.4s" }}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wider text-primary mb-8 text-center">
          CUSTOMER FEEDBACK
        </h2>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="glass animate-pulse">
                <CardHeader>
                  <div className="h-6 bg-primary/20 rounded w-1/2 mb-2" />
                  <div className="h-4 bg-muted/20 rounded w-1/4" />
                </CardHeader>
                <CardContent>
                  <div className="h-4 bg-muted/20 rounded w-full mb-2" />
                  <div className="h-4 bg-muted/20 rounded w-3/4" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews?.map((review) => (
              <Card
                key={review.id}
                className="glass p-6 hover-elevate active-elevate-2 transition-all"
                data-testid={`card-review-${review.id}`}
              >
                <div className="space-y-4">
                  <div>
                    <h3
                      className="font-heading text-lg tracking-wider text-foreground"
                      data-testid={`text-reviewer-${review.id}`}
                    >
                      {review.customerName}
                    </h3>
                    <div
                      className="flex gap-1 mt-2"
                      data-testid={`stars-${review.id}`}
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating
                              ? "fill-secondary text-secondary"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p
                    className="text-sm text-muted-foreground leading-relaxed"
                    data-testid={`text-comment-${review.id}`}
                  >
                    "{review.comment}"
                  </p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
