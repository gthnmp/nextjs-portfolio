"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname()
  return (
    <Link href={pathname === "/" ? "" : "/"} className="back-button font-serif text-bases italic font-medium left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-20 fixed top-10 z-50 pb-2 px-3 overflow-hidden">
      {pathname === "/" ? "Table Of Content" : "Back"}
    </Link>
  );
}
