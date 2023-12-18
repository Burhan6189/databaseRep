"use client";

import { useSearchParams } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

import Button from "./Button";

const GoogleSignInButton = () => {
  const searchParams = useSearchParams();
  let callbackUrl = searchParams.get("callbackUrl");
  const { data: session } = useSession();

  if (session?.status === "authenticated") {
    router.replace("/dashboard");
  } else if (!session) {
    callbackUrl = "/dashboard";
  }

  return (
    <Button
      className="login-buttons"
      onClick={() => signIn("google", { callbackUrl })}
    >
      <img
        src="https://www.google.com/images/hpp/ic_wahlberg_product_core_48.png8.png"
        alt=""
      />
    </Button>
  );
};

export default GoogleSignInButton;
