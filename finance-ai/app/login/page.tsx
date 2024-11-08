import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();
  if (userId) {
    redirect("/");
  }
  return (
    <div className="grid h-full grid-cols-2">
      {/* LEFT */}
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image
          src="/logo.svg"
          alt="Finance AI"
          width={173}
          height={39}
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Welcome</h1>
        <p className="mb-8 text-muted-foreground">
          Finance AI is a financial management platform that uses AI to monitor
          your transactions and offer personalized insights, making it easier to
          control your budget.
        </p>
        <SignInButton>
          <Button variant="outline">
            <LogInIcon className="mr-2" />
            Log in now or create an account
          </Button>
        </SignInButton>
      </div>
      {/* RIGHT */}
      <div className="relative h-full w-full">
        <Image src="/login.png" alt="Log in" fill className="object-cover" />
      </div>
    </div>
  );
};

export default LoginPage;
