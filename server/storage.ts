import {
  type User,
  type InsertUser,
  type MenuItem,
  type InsertMenuItem,
  type Reservation,
  type InsertReservation,
  type Review,
  type InsertReview,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  getMenuItems(): Promise<MenuItem[]>;
  getMenuItem(id: string): Promise<MenuItem | undefined>;
  createMenuItem(item: InsertMenuItem): Promise<MenuItem>;

  getReservations(): Promise<Reservation[]>;
  createReservation(reservation: InsertReservation): Promise<Reservation>;

  getReviews(): Promise<Review[]>;
  createReview(review: InsertReview): Promise<Review>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private menuItems: Map<string, MenuItem>;
  private reservations: Map<string, Reservation>;
  private reviews: Map<string, Review>;

  constructor() {
    this.users = new Map();
    this.menuItems = new Map();
    this.reservations = new Map();
    this.reviews = new Map();
    this.seedData();
  }

  private seedData() {
    const menuData: InsertMenuItem[] = [
      {
        name: "Neptune Nebula",
        description: "Molecular gastronomy at its finest - ethereal foam spheres with bioluminescent garnish and asteroid salt crystals",
        price: 45,
        category: "Entrées",
        image: "/attached_assets/generated_images/Futuristic_dish_Neptune_Nebula_99a56868.png",
        featured: 1,
      },
      {
        name: "Mars Medley",
        description: "Exotic alien-inspired appetizer featuring hydroponically-grown vegetables with neon sauce artistry",
        price: 28,
        category: "Appetizers",
        image: "/attached_assets/generated_images/Futuristic_dish_Mars_Medley_a3389a16.png",
        featured: 1,
      },
      {
        name: "Cosmic Cake",
        description: "Deconstructed dessert with dry ice fog, geometric chocolate elements, and Martian berry compote",
        price: 18,
        category: "Desserts",
        image: "/attached_assets/generated_images/Futuristic_dessert_Cosmic_Cake_97360d33.png",
        featured: 1,
      },
      {
        name: "Red Planet Cocktail",
        description: "Our signature drink with glowing crimson liquid, dry ice effect, and edible silver garnish",
        price: 16,
        category: "Beverages",
        image: "/attached_assets/generated_images/Signature_cocktail_Red_Planet_da4dab4e.png",
        featured: 1,
      },
      {
        name: "Valles Marineris Steak",
        description: "Protein-cultured premium cut with Martian peppercorn crust and reduced atmosphere jus",
        price: 52,
        category: "Entrées",
        image: "/attached_assets/generated_images/Futuristic_dish_Neptune_Nebula_99a56868.png",
        featured: 0,
      },
      {
        name: "Olympus Mons Burger",
        description: "Towering plant-based patty with hydroponic lettuce, tomatoes, and our special red sauce",
        price: 24,
        category: "Entrées",
        image: "/attached_assets/generated_images/Futuristic_dish_Mars_Medley_a3389a16.png",
        featured: 0,
      },
      {
        name: "Phobos Fries",
        description: "Crispy potato spirals seasoned with Martian herbs and served with three signature dipping sauces",
        price: 12,
        category: "Sides",
        image: "/attached_assets/generated_images/Futuristic_dish_Mars_Medley_a3389a16.png",
        featured: 0,
      },
      {
        name: "Deimos Duo",
        description: "Twin scoops of artisanal ice cream featuring unique Mars-grown vanilla and chocolate variants",
        price: 14,
        category: "Desserts",
        image: "/attached_assets/generated_images/Futuristic_dessert_Cosmic_Cake_97360d33.png",
        featured: 0,
      },
      {
        name: "Solar Flare Soup",
        description: "Spicy tomato bisque with a kick, garnished with cream swirls and crispy basil",
        price: 15,
        category: "Appetizers",
        image: "/attached_assets/generated_images/Futuristic_dish_Mars_Medley_a3389a16.png",
        featured: 0,
      },
      {
        name: "Stellar Salad",
        description: "Fresh hydroponic greens with edible flowers, candied nuts, and cosmic vinaigrette",
        price: 18,
        category: "Appetizers",
        image: "/attached_assets/generated_images/Futuristic_dish_Mars_Medley_a3389a16.png",
        featured: 0,
      },
    ];

    menuData.forEach((item) => {
      const id = randomUUID();
      this.menuItems.set(id, { ...item, id });
    });

    const reviewsData: InsertReview[] = [
      {
        customerName: "Dr. Sarah Chen",
        rating: 5,
        comment: "Absolutely phenomenal! The Neptune Nebula dish was unlike anything I've experienced on Earth. The attention to detail in presentation and flavor is remarkable.",
      },
      {
        customerName: "Commander Marcus Webb",
        rating: 5,
        comment: "After six months on Mars, AstroBite feels like home. Chef Elena and her team have created something truly special here. The Red Planet Cocktail is a must-try!",
      },
      {
        customerName: "Engineer Yuki Tanaka",
        rating: 4,
        comment: "Great atmosphere with stunning views of the Martian landscape. Food quality is consistently excellent. My only wish is for more vegetarian options on the menu.",
      },
      {
        customerName: "Geologist Amara Okafor",
        rating: 5,
        comment: "Celebrated my birthday here and it was unforgettable. The staff went above and beyond to make it special. The Cosmic Cake dessert was literally out of this world!",
      },
      {
        customerName: "Pilot James Rodriguez",
        rating: 5,
        comment: "Best dining experience in the entire solar system. Period. The combination of innovative cuisine and the Mars dome setting creates pure magic.",
      },
      {
        customerName: "Botanist Dr. Li Wei",
        rating: 4,
        comment: "As someone who works with the hydroponic systems, I'm impressed by how well they utilize local produce. Fresh, creative, and delicious. Highly recommend!",
      },
    ];

    reviewsData.forEach((review) => {
      const id = randomUUID();
      this.reviews.set(id, {
        ...review,
        id,
        createdAt: new Date(),
      });
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getMenuItems(): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values());
  }

  async getMenuItem(id: string): Promise<MenuItem | undefined> {
    return this.menuItems.get(id);
  }

  async createMenuItem(insertItem: InsertMenuItem): Promise<MenuItem> {
    const id = randomUUID();
    const item: MenuItem = { ...insertItem, id };
    this.menuItems.set(id, item);
    return item;
  }

  async getReservations(): Promise<Reservation[]> {
    return Array.from(this.reservations.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createReservation(
    insertReservation: InsertReservation
  ): Promise<Reservation> {
    const id = randomUUID();
    const reservation: Reservation = {
      ...insertReservation,
      id,
      createdAt: new Date(),
    };
    this.reservations.set(id, reservation);
    return reservation;
  }

  async getReviews(): Promise<Review[]> {
    return Array.from(this.reviews.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createReview(insertReview: InsertReview): Promise<Review> {
    const id = randomUUID();
    const review: Review = {
      ...insertReview,
      id,
      createdAt: new Date(),
    };
    this.reviews.set(id, review);
    return review;
  }
}

export const storage = new MemStorage();
