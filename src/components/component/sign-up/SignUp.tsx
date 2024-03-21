import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import FirstPage from "@/components/component/sign-up/FirstPage";
import LastPage from "@/components/component/sign-up/LastPage";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/validation/sign-up";
import { SignUpValueType } from "@/types/type";
import { useToast } from "@/components/ui/use-toast";
import { auth, db } from "../../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const SignUp = () => {
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

  const onSubmit = async (data: SignUpValueType) => {
    const password = form.getValues("password");
    const passwordConfirm = form.getValues("passwordConfirm");
    if (password !== passwordConfirm) {
      toast({
        title: "비밀번호가 맞지 않습니다. ",
        variant: "destructive",
        duration: 2000,
      });
    } else {
      const newUser = {
        email: data.email,
        name: data.name,
        phone: data.phoneNumber,
        role: data.role,
      };
      try {
        const res = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        const docRef = doc(db, "user", res.user.uid);
        await setDoc(docRef, newUser);
      } catch (error) {
        console.error(error);
      }
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
};

export default SignUp;
