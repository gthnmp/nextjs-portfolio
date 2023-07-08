import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import React from 'react';

const menuItems = [
  { name: "Instagram", url: "https://www.instagram.com/gthnmp/", icon: <FaInstagram />},
  { name: "Twitter", url: "https://twitter.com/viograce_/", icon: <FaTwitter />},
  { name: "LinkedIn", url: "https://www.linkedin.com/in/gathan", icon: <FaLinkedin />},
  { name: "GitHub", url: "https://github.com/gthnmp", icon: <FaGithub />}
];

const iconClassname = 'hover:fill-neutral-400 transition-colors duration-300'
export default function Socials ({className} : {className : string}){
  return(
    <ul className={className}>
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