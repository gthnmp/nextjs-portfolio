/* eslint-disable @next/next/no-img-element */
"use client"
import { ContactList } from "../global/Lists";
import { useEffect, useState } from "react";
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import {BsArrowUp} from 'react-icons/bs'

type ListType = {
  name : string,
  href : string
}

export interface FooterProps {
  potrait : {
    source : string;
    alt : string;
  }
  contact: {
    title : string;
    list : ListType[]
  }
}

const MobileFooter: React.FC<FooterProps> = ({ potrait, contact }) => {
  const [ isContactVisible, setVisibilty ] = useState(false)
  function handleClick(){
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }

  return (
    <div className="relative grid grid-col-1 auto-rows-max gap-y-10 place-items-center">
      <img src={potrait.source} alt={potrait.alt} fetchPriority="high" className="footer-image" />
      <div className="footer-contact px-8 w-full">
        <div onClick={() => setVisibilty((prev) => !prev)} className="border-b-1 py-2 border-neutral-900 dark:border-white flex justify-between items-center">
          <span>Get In Touch</span>
          {isContactVisible ? <AiOutlineMinus/> : <AiOutlinePlus />}
        </div>
        <div className={`${isContactVisible ? "block" : "hidden"}`}>
          <ContactList list={contact.list}/>
        </div>
      </div>
    <button className="footer-button p-4 rounded-full w-max h-max border-1 border-neutral-900 dark:border-white" onClick={handleClick}>
        <BsArrowUp />
      </button>
    </div>
  );
};
const DesktopFooter: React.FC<{ contact: FooterProps['contact'] }> = ({ contact }) => {
  return(
    <ContactList {...contact} />
  )
}


const Footer: React.FC<FooterProps> = ({ potrait, contact }) => {
  const [ isMobile, setIsMobile ] = useState(false)
  useEffect(() => {
    setIsMobile(window.innerWidth < 768 ? true : false)
  },[])

  return (
    <footer>
      {isMobile ? <MobileFooter potrait={potrait} contact={contact} /> : <DesktopFooter contact={contact} />}
    </footer>
  );
};

export default Footer;
