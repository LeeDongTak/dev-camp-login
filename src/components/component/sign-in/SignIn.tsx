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
import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { auth } from "../../../../firebase";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/router";

const SignIn = () => {
  const { toast } = useToast();
  const { push } = useRouter();
  const form = useForm<SignInValueType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInValueType) => {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      localStorage.setItem("userToken", JSON.stringify(res.user));
      toast({
        title: "로그인이 완료되었습니다. ",
        variant: "success",
        duration: 2000,
      });
      push("/");
    } catch (error) {
      console.error(error);
      toast({
        title: "아이디나 비밀번호가 맞지 않습니다 다시 입력해 주세요.",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  return (
    <Card
      className={cn(
        "fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[500px]"
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
