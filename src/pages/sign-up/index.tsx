import SignUp from "@/components/component/sign-up/SignUp";
import Head from "next/head";
import React from "react";

const SignUpPage = () => {
  return (
    <>
      <Head>
        <title>회원가입</title>
      </Head>
      <SignUp />
    </>
  );
};

export default SignUpPage;
