
import { IoLocationOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import { MdOutlineLocalPhone } from "react-icons/md";
import Image from "next/image";
import Logo from "../public/logo.png";

export default function Navbar(){
    return(
        <div>
            <div className="flex h-10 bg-stone-200 text-stone-600 font-normal justify-end gap-8 px-28 py-1">
              <div className="flex items-center gap-2">
                  <IoLocationOutline size={20} />
                  <Link href="https://www.ambius.com/resources/blog/plant-profile/the-ultimate-guide-to-indoor-plants#">Location</Link>
              </div>
              <div className="flex items-center gap-2">
                   <IoIosSearch size={20} />
                   <Link href="https://www.ambius.com/resources/blog/plant-profile/the-ultimate-guide-to-indoor-plants#">Search</Link>
             </div>
              <div className="flex items-center gap-2">
                    <MdOutlineLocalPhone size={20} />
                    <Link href="https://www.ambius.com/contact-us">Contact</Link>
             </div>
           </div>
           <div>
               <Image src={Logo}
               alt="logo"
               width={200}
               height={160}
               title="Ambius"
               priority
               className="mx-28 -my-11"
               />
               <div className="flex justify-end items-center mx-8 -my-24 gap-4  text-stone-600">
               <div className="flex  py-9 px-7 hover:bg-[#90ee9094] ">
                <Link href="">Plant design</Link>
               </div>
               <div className="flex  py-9 px-5 hover:bg-[#90ee9094] ">
                <Link href="">Air quality</Link>
               </div>
               <div className=" flex  py-9 px-5 hover:bg-[#90ee9094]">
                <Link href="">Scenting</Link>
               </div>
               <div className=" flex  py-9 px-5 hover:bg-[#90ee9094]">
                <Link href="">Holiday décor</Link>
               </div>
               <div className=" flex  py-9 px-5 hover:bg-[#90ee9094]">
                <Link href="">Projects</Link>
               </div>
               <div className=" flex  py-9 px-5 hover:bg-[#90ee9094]">
                <Link href="">Resources</Link>
               </div>
               <div className=" flex  py-9 px-5 hover:bg-[#90ee9094]">
                <Link href="">About</Link>
               </div>
            </div>
         </div>
        
        </div>
    );
}









