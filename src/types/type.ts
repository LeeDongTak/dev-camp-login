import { signInSchema } from "@/validation/sign-in";
import { signUpSchema } from "@/validation/sign-up";
import { Dispatch, SetStateAction } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { z } from "zod";

export type SignUpValueType = z.infer<typeof signUpSchema>;
export type SignInValueType = z.infer<typeof signInSchema>;

export interface SignUpFormType {
  form: UseFormReturn<SignUpValueType, any, undefined>;
  setIsPage: Dispatch<SetStateAction<boolean>>;
}
