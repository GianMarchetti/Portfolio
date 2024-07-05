import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { siteConfig } from "../config/site";
import "../styles/dropdown.css";
import Link from "next/link";

export default function DropdownMenuMobile() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="hidden md:block font-bold bg-zinc-500 text-black dark:bg-zinc-800 dark:text-white m-0 w-fit text-center"
        >
          Menu
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="Dynamic Actions"
        items={siteConfig.linksNav}
        className="h-fit bg-zinc-500  dark:bg-zinc-800"
      >
        {siteConfig.linksNav.map(({ route, label }) => (
          <DropdownItem
            key={route}
            className="text-black dark:text-white font-bold w-full"
          >
            <Link href={route} className="w-full block">
              {label}
            </Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
