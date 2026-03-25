import { z } from "zod";

const passwordStrengthRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/;

export const registerSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be at least 2 characters."),
    email: z.email("Please enter a valid email address."),
    phone: z.string().min(10, "Phone number must be at least 10 characters."),
    address: z.string().min(5, "Address must be at least 5 characters."),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long.")
      .regex(
        passwordStrengthRegex,
        "Password must include letters, numbers, and symbols.",
      ),
    confirmPassword: z.string().min(1, "Please confirm your password."),
    agreeTerms: z
      .boolean()
      .refine((value) => value, "You must agree to the Terms of Use and Privacy Policy."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
