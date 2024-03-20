import { z } from "zod";

const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const phoneRegex = /^010\d{8}$/;

export const signUpSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "글자 수는 최소 2글자 이상이여야 합니다.",
    })
    .max(5, {
      message: "글자수는 최대 5글자 이하여야 합니다.",
    }),
  email: z.string().email({ message: "이메일 형식을 마추어 입력하세요." }),
  phoneNumber: z
    .string()
    .refine(
      (value) => phoneRegex.test(value),
      "010으로 시작하는 11자리 숫자를 입력해 주세요."
    ),
  role: z.string().min(2, { message: "역할을 선택해주세요." }),
  password: z
    .string()
    .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
    .max(100, "비밀번호는 100자리 이하이어야 합니다.")
    .refine(
      (value) => passwordRegex.test(value),
      "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다."
    ),
  passwordConfirm: z
    .string()
    .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
    .max(100, "비밀번호는 100자리 이하이어야 합니다.")
    .refine(
      (value) => passwordRegex.test(value),
      "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다."
    ),
});
