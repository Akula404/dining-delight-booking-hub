
import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  date: z.date({ required_error: "Please select a date." }),
  time: z.string({ required_error: "Please select a time." }),
  guests: z.string({ required_error: "Please select number of guests." }),
  occasion: z.string().optional(),
  specialRequests: z.string().optional(),
});

const timeSlots = [
  "11:00 AM", "11:30 AM", 
  "12:00 PM", "12:30 PM", 
  "1:00 PM", "1:30 PM", 
  "2:00 PM", "2:30 PM",
  "5:00 PM", "5:30 PM", 
  "6:00 PM", "6:30 PM", 
  "7:00 PM", "7:30 PM", 
  "8:00 PM", "8:30 PM", 
  "9:00 PM"
];

const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "10+"];

const occasionOptions = [
  "None",
  "Birthday",
  "Anniversary",
  "Business Meeting",
  "Date Night",
  "Other"
];

const Reservations = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      occasion: "None",
      specialRequests: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Reservation request submitted!", {
      description: `We'll see you on ${format(values.date, "MMMM d, yyyy")} at ${values.time}.`,
    });
    console.log(values);
    form.reset();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="hero-image h-[40vh]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop')" }}>
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Book Your Table
              </h1>
              <p className="text-xl text-white/90">
                Reserve your perfect dining experience with us
              </p>
            </div>
          </div>
        </section>

        {/* Reservation Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Reservation Details</h2>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
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
                            <Input placeholder="john.doe@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="guests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number of Guests</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select number of guests" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {guestOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                                className={cn("p-3 pointer-events-auto")}
                              />
                            </PopoverContent>
                          </Popover>
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
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select time" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="occasion"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Occasion (Optional)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value || "None"}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select occasion" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {occasionOptions.map((occasion) => (
                              <SelectItem key={occasion} value={occasion}>
                                {occasion}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Let us know if you're celebrating something special
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="specialRequests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Special Requests (Optional)</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>
                          Dietary restrictions, seating preferences, etc.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-restaurant-primary hover:bg-restaurant-primary/90">
                    Reserve Table
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </section>

        {/* Restaurant Policies */}
        <section className="py-12 bg-restaurant-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-center">Reservation Policies</h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-restaurant-primary flex items-center">
                    <Clock className="mr-2" size={18} />
                    Confirmation
                  </h3>
                  <p className="text-sm mt-1">
                    You will receive a confirmation email once your reservation has been processed.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-restaurant-primary flex items-center">
                    <Clock className="mr-2" size={18} />
                    Cancellation Policy
                  </h3>
                  <p className="text-sm mt-1">
                    Please notify us at least 24 hours in advance for cancellations or changes to your reservation.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-restaurant-primary flex items-center">
                    <Clock className="mr-2" size={18} />
                    Late Arrival
                  </h3>
                  <p className="text-sm mt-1">
                    We will hold your table for 15 minutes past your reservation time. Please call if you're running late.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-restaurant-primary flex items-center">
                    <Clock className="mr-2" size={18} />
                    Large Parties
                  </h3>
                  <p className="text-sm mt-1">
                    For parties of 10 or more, please contact us directly at (555) 123-4567 to arrange your reservation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Reservations;
