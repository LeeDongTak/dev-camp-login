import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SignInValueType } from "@/types/type";
import { signInSchema } from "@/validation/sign-in";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const form = useForm<SignInValueType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {};

  return (
    <Card
      className={cn(
        " fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[500px]"
      )}
    >
      <CardHeader>
        <CardTitle>로그인 하기</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이메일</FormLabel>
                  <Input placeholder="이메일을 입력하세요" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호</FormLabel>
                  <Input
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">로그인 하기</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SignIn;
