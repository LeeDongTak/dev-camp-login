import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { DocumentData, doc, getDoc, query } from "firebase/firestore";
import { userType } from "@/types/type";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { push } = useRouter();
  const [user, setUser] = useState<DocumentData | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("userToken");
        const user = JSON.parse(JSON.parse(JSON.stringify(token)));
        const docRef = doc(db, "user", user.uid);
        const res = await getDoc(docRef);
        const data = res.data() as DocumentData;
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);
  return (
    <div className="fixed top-[30%] left-[50%] translate-x-[-50%] flex justify-center items-center text-[40px] font-bold gap-10">
      {user ? (
        <div>
          <div className="mb-5">{user?.name}님 안녕하세요.^^</div>
          <div className="flex flex-col text-[1rem] font-normal gap-3">
            <div>이메일: {user?.email}</div>
            <div>역할: {user?.role}</div>
            <div>휴대폰 반호: {user?.phone}</div>
          </div>
          <Button
            type="button"
            onClick={() => {
              if (window.confirm("로그아웃하시겠습니까?")) {
                localStorage.removeItem("userToken");
                setUser(null);
              }
            }}
          >
            로그아웃
          </Button>
        </div>
      ) : (
        <>
          <div
            className="cursor-pointer"
            onClick={() => {
              push("/sign-in");
            }}
          >
            로그인 하기
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              push("/sign-up");
            }}
          >
            회원가입 하기
          </div>
        </>
      )}
    </div>
  );
}
