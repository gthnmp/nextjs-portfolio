import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import React from 'react';

const menuItems = [
  { name: "Instagram", url: "https://www.instagram.com/gthnmp/", icon: <FaInstagram />},
  { name: "Twitter", url: "https://twitter.com/viograce_/", icon: <FaTwitter />},
  { name: "LinkedIn", url: "https://www.linkedin.com/in/gathan", icon: <FaLinkedin />},
  { name: "GitHub", url: "https://github.com/gthnmp", icon: <FaGithub />}
];

const menuListClassname = "fixed z-50 top-10 right-1/2 -translate-x-1/2 lg:right-20 lg:-translate-x-0 flex gap-4 p-2";
const iconClassname = 'hover:fill-neutral-400 transition-colors duration-300'
export default function Socials (){
  return(
    <ul className={menuListClassname}>
      {menuItems.map((item, index) => (
        <li key={index}>
          <a href={item.url} target="_blank" aria-label={`Checkout Gathan's ${item.name}`}>
            {React.cloneElement(item.icon, { className: iconClassname })}
          </a>
        </li>
      ))}
    </ul>
  )
}