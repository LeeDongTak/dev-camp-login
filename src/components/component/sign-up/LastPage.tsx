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
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FormType } from "@/types/type";
import { cn } from "@/lib/utils";

const LastPage = ({ form, setIsPage }: FormType) => {
  return (
    <>
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>비밀번호</FormLabel>
            <FormControl>
              <Input
                type="password"
                placeholder="영문, 숫자 특수문자를 포함하여 입력하세요"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="passwordConfirm"
        render={({ field }) => (
          <FormItem>
            <FormLabel>비밀번호 확인</FormLabel>
            <FormControl>
              <Input
                type="password"
                placeholder="영문, 숫자 특수문자를 포함하여 입력하세요"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex justify-start items-center gap-3">
        <Button type="submit">회원가입 하기</Button>
        <Button
          type="button"
          className={cn(
            "gap-2 bg-[none] text-[#000] hover:bg-[none] hover:text-[#000]"
          )}
          onClick={() => {
            setIsPage(true);
          }}
        >
          <FaArrowLeft />
          이전단계로
        </Button>
      </div>
    </>
  );
};

export default LastPage;
