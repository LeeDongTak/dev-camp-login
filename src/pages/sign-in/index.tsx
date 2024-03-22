import SignIn from "@/components/component/sign-in/SignIn";
import Head from "next/head";
import React from "react";

const SignInPage = () => {
  return (
    <>
      <Head>
        <title>로그인</title>
      </Head>
      <SignIn />
    </>
  );
};

export default SignInPage;
