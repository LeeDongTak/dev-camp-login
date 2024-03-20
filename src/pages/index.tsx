import Image from "next/image";
import { Inter } from "next/font/google";
import { useForm } from "react-hook-form";
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
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaArrowRight } from "react-icons/fa6";
import FirstPage from "@/components/component/auth/FirstPage";
import LastPage from "@/components/component/auth/LastPage";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/validation/sign-up";
import { SignUpValueType } from "@/types/type";
import { useToast } from "@/components/ui/use-toast";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isPage, setIsPage] = useState(true);
  const { toast } = useToast();
  const form = useForm<SignUpValueType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      role: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = (data: SignUpValueType) => {
    const password = form.getValues("password");
    const passwordConfirm = form.getValues("passwordConfirm");
    if (password !== passwordConfirm) {
      toast({
        title: "비밀번호가 맞지 않습니다. ",
        variant: "destructive",
      });
    } else {
      alert(`${data.email} ${data.name} ${data.phoneNumber} ${data.role}`);
    }
  };
  return (
    <Card
      className={cn(
        " fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[500px]"
      )}
    >
      <CardHeader>
        <CardTitle> 회원가입 하기</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {isPage ? (
              <FirstPage form={form} setIsPage={setIsPage} />
            ) : (
              <LastPage form={form} setIsPage={setIsPage} />
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
