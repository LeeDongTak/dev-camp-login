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
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaArrowRight } from "react-icons/fa6";
import { SignUpFormType } from "@/types/type";
import { cn } from "@/lib/utils";

const FirstPage = ({ form, setIsPage }: SignUpFormType) => {
  const clickNextPageHandler = () => {
    const nameState = form.getFieldState("name");
    const emailState = form.getFieldState("email");
    const phoneState = form.getFieldState("phoneNumber");
    const roleState = form.getFieldState("role");

    if (!nameState.isDirty || nameState.invalid) {
      form.trigger(["name"]);
      return;
    } else if (!emailState.isDirty || emailState.invalid) {
      form.trigger(["email"]);
      return;
    } else if (!phoneState.isDirty || phoneState.invalid) {
      form.trigger(["phoneNumber"]);
      return;
    } else if (!roleState.isDirty || roleState.invalid) {
      form.trigger(["role"]);
      return;
    } else {
      setIsPage(false);
    }
  };

  return (
    <>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>이름</FormLabel>
            <FormControl>
              <Input placeholder="이름을 입력하세요" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>이메일</FormLabel>
            <FormControl>
              <Input placeholder="이메일을 입력하세요" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="phoneNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel>이름</FormLabel>
            <FormControl>
              <Input placeholder="휴대폰번호를 입력하세요" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="role"
        render={({ field }) => (
          <FormItem>
            <FormLabel>역할</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="역할을 선택해 주세요" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="관리자">관리자</SelectItem>
                <SelectItem value="사용자">사용자</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button
        type="button"
        className={cn("gap-2")}
        onClick={clickNextPageHandler}
      >
        다음단계로
        <FaArrowRight />
      </Button>
    </>
  );
};

export default FirstPage;
