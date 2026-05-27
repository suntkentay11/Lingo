"use client";

import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  useUser,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { isSignedIn } = useUser();

  return (
    <div className="mx-auto flex w-full max-w-[988px] flex-1 flex-col items-center justify-center gap-2 p-4 lg:flex-row">
      <div className="relative mb-8 h-[240px] w-[240px] lg:mb-0 lg:h-[424px] lg:w-[424px]">
        <Image src="/hero.svg" alt="Hero Image" fill />
      </div>

      <div className="flex flex-col items-center gap-y-8">
        <h1 className="max-w-[480px] text-center text-xl font-bold text-neutral-600 lg:text-3xl">
          Learn, practice, and master new languages with{" "}
          <span className="font-extrabold text-green-600">Lingo</span>.
        </h1>

        <div className="flex w-full flex-col gap-y-3 items-center max-w-[330px]">
          <ClerkLoading>
            <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
          </ClerkLoading>

          <ClerkLoaded>
            {isSignedIn ? (
              <Link href="/learn" className="w-full">
                <Button size="lg" variant="secondary" className="w-full">
                  Continue learning
                </Button>
              </Link>
            ) : (
              <>
                <SignUpButton mode="modal" fallbackRedirectUrl="/learn" forceRedirectUrl="/learn">
                  <Button size="lg" variant="secondary" className="w-full">
                    Get started
                  </Button>
                </SignUpButton>

                <SignInButton mode="modal" fallbackRedirectUrl="/learn" forceRedirectUrl="/learn">
                  <Button size="lg" variant="primaryOutline" className="w-full">
                    I already have an account
                  </Button>
                </SignInButton>
              </>
            )}
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}