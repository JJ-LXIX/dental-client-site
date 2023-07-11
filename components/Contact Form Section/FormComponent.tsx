"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
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

type Props = {};

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
  first_name: z
    .string()
    .min(1, { message: "Can't leave this empty" })
    .max(18, { message: "Max 18 characters" }),
  last_name: z
    .string()
    .min(1, { message: "Can't leave this empty" })
    .max(18, { message: "Max 18 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone_number: z.string().regex(phoneRegex, { message: "Invalid Number" }),
  message: z
    .string()
    .min(2, { message: "Can't leave this empty" })
    .max(500, { message: "Max 500 characters" })
    .optional(),
});

function FormComponent({}: Props) {
  // Form Definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      message: "",
    },
  });

  // Submit Handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.

    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:space-y-0 lg:gap-5 w-full lg:max-w-[80%]  mx-auto p-5"
      >
        {/* First Name*/}
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sky-500">First Name</FormLabel>
              <FormControl>
                <Input
                  className="shadow-lg border-zinc-500 bg-zinc-800 text-zinc-200  "
                  placeholder="first name "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Last Name */}
        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sky-500">Last Name</FormLabel>
              <FormControl>
                <Input
                  className="shadow-lg border-zinc-500  bg-zinc-800 text-zinc-200"
                  placeholder="last name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sky-500">Email</FormLabel>
              <FormControl>
                <Input
                  className="shadow-lg border-zinc-500 bg-zinc-800 text-zinc-200 "
                  placeholder="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Phone Number */}
        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sky-500">Phone Number</FormLabel>
              <FormControl>
                <Input
                  className="shadow-lg border-zinc-500 bg-zinc-800 text-zinc-200 "
                  placeholder="phone number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="md:col-span-2 ">
              <FormLabel className="text-sky-500">Message</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your custom message here"
                  {...field}
                  className="py-10 shadow-lg border-zinc-500 bg-zinc-800 text-zinc-200 "
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="justify-self-start  bg-sky-600 text-white font-semibold hover:scale-110 active:scale-95 transition-all duration-300"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default FormComponent;
