"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BookText,
  Handshake,
  Heart,
  HeartIcon,
  Home,
  Menu,
  Phone,
  Search,
  ShoppingBasket,
  ShoppingCart,
  User,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { ProfileDropDownMenu } from "./ProfileDropDownMenu";
import { NavigationMenuDemo } from "../common/NavigationMenutCard";
import { Modal } from "../common/Modal";

const components: {
  title: string;
  href: string;
  description?: string;
  image: string;
}[] = [
  {
    title: "CPU",
    href: "/components/Processors",
    image: "https://cdna.pcpartpicker.com/static/forever/img/nav-cpu-2023.png",
  },
  {
    title: "Storage",
    href: "/components/Storage",
    image: "https://cdna.pcpartpicker.com/static/forever/img/nav-ssd-2023.png",
  },
  {
    title: "Graphics Card",
    href: "/components/Graphics Cards",
    image:
      "https://cdna.pcpartpicker.com/static/forever/img/nav-videocard-2023.png",
  },
  {
    title: "Power Supply",
    href: "/components/Power Supplies",
    image:
      "https://cdna.pcpartpicker.com/static/forever/img/nav-powersupply-2023.png",
  },
  {
    title: "Case",
    href: "/components/Cases",
    image: "https://cdna.pcpartpicker.com/static/forever/img/nav-case-2023.png",
  },
  {
    title: "CPU Cooler",
    href: "/components/Cooling",
    image:
      "https://cdna.pcpartpicker.com/static/forever/img/nav-cpucooler-2023.png",
  },
  {
    title: "Motherboard",
    href: "/components/Motherboards",
    image:
      "https://cdna.pcpartpicker.com/static/forever/img/nav-motherboard-2023.png",
  },
  {
    title: "Memory",
    href: "/components/Memory",
    image:
      "https://cdna.pcpartpicker.com/static/forever/img/nav-memory-2023.png",
  },
];

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isSignupOpen, setIsSignupOpen] = React.useState(false);
  const { data: session } = useSession();

  const links = [
    { name: "Products", href: "#", icon: Home },
    { name: "Guides", href: "/build-guide", icon: Handshake },
    {
      name: "Feeds",
      href: "/feeds",
      icon: BookText,
    },
  ];

  React.useEffect(() => {}, [session]);

  const handleAddListing = () => {
    const isLogin = false;
    if (isLogin) {
    } else {
      setIsLoginOpen(true);
    }
  };
  return (
    <div className="bg-white top-0 start-0 px-6 py-2 flex justify-between items-center h-16 shadow-lg fixed z-50  w-screen ">
      <div className="rounded-lg p-2 max-lg:hidden">
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/dosndnyp5/image/upload/v1714219210/custom-pc-building.jpg"
            alt="Custom PC Building"
            width={200}
            height={200}
            className="h-16 w-24 object-cover"
          />
        </Link>
      </div>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 ">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <div className="grid gap-2 text-lg font-medium">
              <Link href="/">
                <Image
                  src="https://res.cloudinary.com/dosndnyp5/image/upload/v1714219210/custom-pc-building.jpg"
                  alt="Custom PC Building"
                  width={200}
                  height={200}
                  className="h-16 w-24 object-cover"
                />
              </Link>
              {links.map((link, index) => (
                // <Button key={index} variant="ghost" className="">
                //   <Link href={link.href} className="">
                //     {link.name}
                //   </Link>
                // </Button>
                <Link
                  href={link.href}
                  key={index}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <link.icon className="h-5 w-5" />
                  {link.name}
                </Link>
              ))}
            </div>
            <SheetFooter>
              <SheetClose asChild>
                {/* <Button type="submit">Save changes</Button> */}
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <div className="rounded-lg p-2 lg:hidden">
        <Image
          src="https://res.cloudinary.com/dosndnyp5/image/upload/v1714219210/custom-pc-building.jpg"
          alt="Custom PC Building"
          width={200}
          height={200}
          className="h-16 w-24 object-cover"
        />
      </div>

      <div className="flex items-center justify-center space-x-10 flex-1 max-lg:hidden">
        <Modal>
          <Button variant="ghost" className="text-sm">
            Build
          </Button>
        </Modal>
        {links.map((link, index) =>
          link.name !== "Products" ? (
            <Button key={index} variant="ghost" className="text-sm">
              <Link href={link.href}>{link.name}</Link>
            </Button>
          ) : (
            <NavigationMenuDemo components={components} text="Products" />
          )
        )}
      </div>
      <div className="flex items-center space-x-4">
        {/* <Search className="h-6 w-6" strokeWidth={1.1} /> */}
        {/* <User className="h-6 w-6" strokeWidth={1.1} /> */}

        {session?.user ? (
          <ProfileDropDownMenu />
        ) : (
          <>
            <Button asChild className="" variant="ghost">
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild className="">
              <Link href="/registration">Sign up</Link>
            </Button>
          </>
        )}

        {/* <Heart className="h-6 w-6" strokeWidth={1.1} /> */}
        {/* <ShoppingCart className="h-6 w-6" strokeWidth={1.1} /> */}
      </div>
    </div>
  );
};

export default Navbar;
