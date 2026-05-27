import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  ClerkLoaded,
  ClerkLoading,
  SignOutButton,
} from "@clerk/nextjs";
import { SidebarItem } from "./sidebar-item";
import { Loader, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "left-0 top-0 flex h-full flex-col border-r-2 px-4 lg:fixed lg:w-[256px]",
        className
      )}
    >
      <Link href="/learn">
        <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <Image
            src="/duolingo-1.svg"
            alt="Duolingo Logo"
            width={40}
            height={40}
          />
          <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
            Lingo
          </h1>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-y-2">
        <SidebarItem label="Learn" href="/learn" iconSrc="/learn.svg" />
        <SidebarItem label="Leaderboard" href="/leaderboard" iconSrc="/leaderboard.svg" />
        <SidebarItem label="Quests" href="/quests" iconSrc="/quests.svg" />
        <SidebarItem label="Shop" href="/shop" iconSrc="/shop.svg" />
      </div>

      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
        </ClerkLoading>

        <ClerkLoaded>
          <SignOutButton>
            <Button variant="ghost" className="w-full justify-start gap-x-2">
              <LogOut className="h-4 w-4" />
              Sign out
            </Button>
          </SignOutButton>
        </ClerkLoaded>
      </div>
    </div>
  );
};