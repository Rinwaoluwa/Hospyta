import {z} from 'zod';

export const signup = z.object({
    email: z.string().email(),
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});
export type SignUpFormValues = z.infer<typeof signup>;

export const sigin = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

export type SignInFormValues = z.infer<typeof sigin>;
