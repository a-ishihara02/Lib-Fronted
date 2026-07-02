
"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <header className="border-b border-black-500 bg-purple-300 p-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">

        <h1 className="text-xl font-bold text-black-900">
          <Link href="/">図書管理システム</Link>
        </h1>

        <NavigationMenu>
          {/* 💡 項目が増えたため、スマホなどの狭い画面でも綺麗に折り返せるよう flex-wrap を付けておくと安全です */}
          <NavigationMenuList className="flex flex-wrap justify-end">

            {/*　ログアウト */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-black-900 bg-transparent hover:bg-green-200`}>
                <Link href="/api/auth/logout">ログアウト</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}