"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navigation.css"
import Socials from "./Socials";

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="nav-layout fixed w-screen z-50 px-10 py-5 font-medium">
      <Link href={"/"} className ="col-start-1 font-semibold">Gathan Mahesa</Link>
      <Link href={pathname === "/project" ? "/about" : "/project"} className ="col-start-7">{pathname === "/project" ? "About" : "Close"}</Link>
      <Socials className="col-start-9 flex gap-4 justify-center items-center"/>
    </nav>
  );
}
