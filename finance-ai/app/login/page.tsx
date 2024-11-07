import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

const LoginPage = () => {
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

        <Button variant="outline">
          <LogInIcon className="mr-2"></LogInIcon>
          Log in now or create an account
        </Button>
      </div>
      {/* RIGHT */}
      <div className="relative h-full w-full">
        <Image src="/login.png" alt="Log in" fill className="object-cover" />
      </div>
    </div>
  );
};

export default LoginPage;
