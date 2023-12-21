"use client";

import { useSearchParams } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

import Button from "./Button";

const FacebookSignInButton = () => {
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
      onClick={() => signIn('facebook', { callbackUrl })}
    >
      <img
        src="https://freelogopng.com/images/all_img/1657548084facebook-logo-png.png"
        alt="facebook icon"
      />
    </Button>
  );
};

export default FacebookSignInButton;
