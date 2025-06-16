"use client";

import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { X, Car, MoveRight, Calendar as CalendarIcon } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
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
import { PhoneInput } from "@/components/ui/phoneinput";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Textarea } from "@/components/ui/textarea";

// Schema for validation
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  number: z.string().min(1, "Phone number is required"),
  date: z.coerce.date(),
  address: z.string().min(1, "Address is required"),
  brand: z.string().min(1, "Car brand is required"),
  model: z.string().min(1, "Car model is required"),
  manufacture: z.string().min(1, "Manufacture year is required"),
  registration: z.string().min(1, "Registration number is required"),
});

type FormData = z.infer<typeof formSchema>;

export default function GetQuote() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      date: new Date(),
      address: "",
      brand: "",
      model: "",
      manufacture: "",
      registration: "",
    },
  });

  const handleClose = () => {
    form.reset();
    setIsOpen(false);
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/send/sendPdf`;
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Error ${response.status}: ${text}`);
      }

      toast.success(" Successfully submitted!");
      handleClose(); // Close modal and reset form
    } catch (error: any) {
      console.error("Quote submission error:", error);
      toast.error("Failed to submit quote. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fieldVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full shadow-lg hover:scale-105 transition flex items-center justify-center gap-2 text-sm sm:text-base group"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span>Get a Quote</span>
        <MoveRight className="w-5 h-5 transition-transform transform group-hover:translate-x-1" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl w-full max-w-lg sm:max-w-xl max-h-[90vh] overflow-y-auto scrollbar-hidden px-6 py-12 relative shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
                aria-label="Close"
              >
                <X
                  size={24}
                  strokeWidth={3}
                  className="text-yellow-500 rounded-xl size-8"
                />
              </button>

              <div className="text-center mb-6 space-y-1">
                <Car className="mx-auto w-16 h-16 text-yellow-400 animate-pulse" />
                <h2 className="text-2xl sm:text-3xl font-extrabold">
                  Unlock Your Premium Quote
                </h2>
                <p className="text-gray-400 text-sm sm:text-base">
                  Transparent pricing & bespoke coverage for your luxury ride.
                </p>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <h3 className="text-lg font-semibold text-yellow-500">
                    Customer Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: "name", label: "Name", placeholder: "Full Name" },
                      {
                        name: "email",
                        label: "Email",
                        placeholder: "Email Address",
                      },
                    ].map((field, i) => (
                      <FormField
                        key={field.name}
                        control={form.control}
                        name={field.name as any}
                        render={({ field: f }) => (
                          <motion.div
                            custom={i}
                            initial="hidden"
                            animate="visible"
                            variants={fieldVariant}
                          >
                            <FormItem>
                              <FormLabel>{field.label}</FormLabel>
                              <FormControl>
                                <Input
                                  {...f}
                                  placeholder={field.placeholder}
                                  className={cn(
                                    "bg-gray-800 placeholder-gray-500 text-white rounded-lg",
                                    "border border-gray-600 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                  )}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          </motion.div>
                        )}
                      />
                    ))}

                    <FormField
                      control={form.control}
                      name="number"
                      render={({ field: f }) => (
                        <motion.div
                          custom={2}
                          initial="hidden"
                          animate="visible"
                          variants={fieldVariant}
                        >
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <PhoneInput
                                {...f}
                                defaultCountry="IN"
                                className={cn(
                                  "bg-gray-800 placeholder-gray-500 text-white rounded-lg",
                                  "border border-transparent focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                )}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        </motion.div>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field: f }) => (
                        <motion.div
                          custom={3}
                          initial="hidden"
                          animate="visible"
                          variants={fieldVariant}
                        >
                          <FormItem>
                            <FormLabel>Date of Birth</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full text-left bg-gray-800 placeholder-gray-500 text-white rounded-lg",
                                    "border border-transparent focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none flex justify-between items-center"
                                  )}
                                >
                                  {f.value
                                    ? format(f.value, "PPP")
                                    : "Pick a date"}
                                  <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent align="center" className="p-0">
                                <Calendar
                                  mode="single"
                                  selected={f.value}
                                  onSelect={f.onChange}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        </motion.div>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field: f }) => (
                      <motion.div
                        custom={4}
                        initial="hidden"
                        animate="visible"
                        variants={fieldVariant}
                      >
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Textarea
                              {...f}
                              placeholder="Your Address"
                              className={cn(
                                "bg-gray-800 placeholder-gray-500 text-white rounded-lg h-24 resize-none",
                                "border border-transparent focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                              )}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </motion.div>
                    )}
                  />

                  <h3 className="text-lg font-semibold text-yellow-400">
                    Vehicle Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        name: "brand",
                        label: "Car Brand",
                        placeholder: "ex: Toyota",
                      },
                      {
                        name: "model",
                        label: "Car Model",
                        placeholder: "ex: Fortuner",
                      },
                      {
                        name: "manufacture",
                        label: "Manufacture Year",
                        placeholder: "ex: 2019",
                      },
                      {
                        name: "registration",
                        label: "Reg. No.",
                        placeholder: "ex: MH01 CD 6789",
                      },
                    ].map((field, i) => (
                      <FormField
                        key={field.name}
                        control={form.control}
                        name={field.name as any}
                        render={({ field: f }) => (
                          <motion.div
                            custom={5 + i}
                            initial="hidden"
                            animate="visible"
                            variants={fieldVariant}
                          >
                            <FormItem>
                              <FormLabel>{field.label}</FormLabel>
                              <FormControl>
                                <Input
                                  {...f}
                                  placeholder={field.placeholder}
                                  className={cn(
                                    "bg-gray-800 placeholder-gray-500 text-white rounded-lg",
                                    "border border-transparent focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                  )}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          </motion.div>
                        )}
                      />
                    ))}
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-5 font-bold rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-black hover:from-yellow-600 hover:to-yellow-800 transition focus:ring-2 focus:ring-yellow-400"
                    disabled={form.formState.isSubmitting || loading}
                  >
                    {form.formState.isSubmitting || loading
                      ? "Submitting..."
                      : "Submit"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
