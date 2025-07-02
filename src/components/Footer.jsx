import { FiPlus } from "react-icons/fi";
import { FaInstagram, FaTiktok,FaSpotify, FaYoutube, FaPinterest , FaFacebook } from "react-icons/fa";


export default function Footer(){
    return(
        <footer className="px-5 my-8">
            <div className=" hidden lg:flex justify-between my-5 text-sm xl:text-base">  
                <div>
                    <ul>
                    <li><strong>Shop</strong></li>
                    <li>LADIES</li>
                    <li>MEN</li>
                    <li>KIDS</li>
                    <li>HOME</li>
                    <li>MAGAZINE</li>
                    </ul>    

                </div>

                <div>
                    <ul>
                    <li><strong>Corporate Info</strong></li>
                    <li>CAREER AT H&M</li>
                    <li>ABOUT H&M GROUP</li>
                    <li>SUSTAINABLITY H&M GROUP</li>
                    <li>PRESS</li>
                    <li>INVESTOR RELATIONS</li>
                    <li>CORPORATE GOVERNANCE</li>
                    </ul>    

                </div>

                <div>
                    <ul>
                    <li><strong>Help</strong></li>
                    <li>CUSTOMER SERVICE</li>
                    <li>MY H&M</li>
                    <li>FIND A STORE</li>
                    <li>LEGAL & PRIVACY</li>
                    <li>CONTACT</li>
                    <li>SECURE SHOPPING</li>
                    <li>COOKIE NOTICE</li>
                    <li>COOKIE SETTINGS</li>
                    
                    </ul>    

                </div>

                <div className="flex flex-col gap-4">
                   <p>Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!</p> 

                    <p className="underline cursor-pointer">READ MORE</p>

                </div>

            </div>

            <div className="lg:hidden my-8   flex flex-col gap-5">
                <div className="flex justify-between "><p>SHOP</p><FiPlus className="w-5 h-5"/></div>
                <div className="flex justify-between "><p>CORPORATE INFO</p><FiPlus className="w-5 h-5"/></div>
                <div className="flex justify-between "><p>HELP</p><FiPlus className="w-5 h-5"/></div>
            </div>

            <div className="flex flex-col gap-6">
                <img src="https://static.vecteezy.com/system/resources/previews/023/871/762/non_2x/hm-brand-logo-symbol-black-design-hennes-and-mauritz-clothes-fashion-illustration-free-vector.jpg" className="w-20" alt="" />

                <div><strong>INDIA (Rs.)</strong><span className="underline ml-8 cursor-pointer">CHANGE REGION</span></div>
            </div>

            <div className="flex lg:justify-between mt-10 items-center flex-col-reverse lg:flex-row gap-3 ">
                <p className="lg:w-fit w-full text-right">The content of this site is copyright-protected and is the property of H & M Hennes & Mauritz AB.</p>
                <div className="w-full flex gap-6 my-5 items-start lg:items-end lg:w-fit">
                    <FaInstagram className="w-5 h-5"/>
                    <FaTiktok  className="w-5 h-5"/>
                    <FaSpotify  className="w-5 h-5"/>
                    <FaYoutube  className="w-5 h-5"/>
                    <FaPinterest  className="w-5 h-5"/>
                    <FaFacebook  className="w-5 h-5"/>
                    
                    
                </div>
            </div>

        </footer>
    );
}