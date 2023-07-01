"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname()
  return (
    <Link href={pathname === "/" ? "" : "/"} className="font-serif text-bases italic font-medium left-20 fixed top-10">
      {pathname === "/" ? "Table Of Content" : "Back"}
    </Link>
  );
}
