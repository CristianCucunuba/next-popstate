import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Thankyou() {
  const router = useRouter();

  useEffect(() => {
    router.beforePopState(({ as: path }) => {
      if (path === "/") {
        alert("Before popState!");
        return false;
      }
      return true;
    });
  }, [router]);

  return (
    <div>
      <h1>Thankyou page</h1>
    </div>
  );
}
