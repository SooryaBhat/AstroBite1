import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { MapPin, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { insertReservationSchema, type InsertReservation } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertReservation>({
    resolver: zodResolver(insertReservationSchema),
    defaultValues: {
      name: "",
      email: "",
      date: "",
      time: "",
      guests: 2,
    },
  });

  const reservationMutation = useMutation({
    mutationFn: (data: InsertReservation) =>
      apiRequest("POST", "/api/reservations", data),
    onSuccess: () => {
      toast({
        title: "Reservation Confirmed",
        description: "Your table has been reserved. See you at AstroBite!",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Reservation Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertReservation) => {
    reservationMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+1-MARS-BITE (627-7248)",
      testId: "text-phone",
    },
    {
      icon: Mail,
      label: "Email",
      value: "reservations@astrobite.mars",
      testId: "text-email",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Dome 7, Valles Marineris Settlement, Mars",
      testId: "text-address",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-widest-plus text-primary text-center mb-12 glow-mars fade-in">
        CONTACT & RESERVE
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6 fade-in">
          <Card className="glass p-8">
            <CardHeader>
              <CardTitle className="font-heading text-2xl tracking-wider text-primary">
                GET IN TOUCH
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                  data-testid={info.testId}
                >
                  <div className="glass-light p-3 rounded-md">
                    <info.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm tracking-wider text-muted-foreground mb-1">
                      {info.label}
                    </h3>
                    <p className="text-foreground">{info.value}</p>
                  </div>
                </div>
              ))}

              <div className="pt-6 border-t border-border/50">
                <h3 className="font-heading text-lg tracking-wider text-foreground mb-3">
                  OPERATING HOURS
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mars Time</span>
                    <span className="text-foreground">17:00 - 23:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Earth Time (UTC)</span>
                    <span className="text-foreground">18:30 - 00:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Days</span>
                    <span className="text-foreground">All Sols</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="glass p-8 fade-in" style={{ animationDelay: "0.2s" }}>
          <CardHeader>
            <CardTitle className="font-heading text-2xl tracking-wider text-primary">
              RESERVE YOUR TABLE
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          {...field}
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          {...field}
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date</FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            {...field}
                            data-testid="input-date"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Time</FormLabel>
                        <FormControl>
                          <Input
                            type="time"
                            {...field}
                            data-testid="input-time"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="guests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Guests</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min="1"
                          max="20"
                          {...field}
                          onChange={(e) => field.onChange(parseInt(e.target.value))}
                          data-testid="input-guests"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full glow-mars font-heading tracking-wider"
                  disabled={reservationMutation.isPending}
                  data-testid="button-reserve"
                >
                  {reservationMutation.isPending ? "RESERVING..." : "RESERVE NOW"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
