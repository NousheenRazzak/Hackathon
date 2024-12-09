import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Github } from "lucide-react";
import ApplePay from "@/public/applePay.svg";
import GooglePay from "@/public/googlePay.svg";
import Paypal from "@/public/paypal.svg";
import Mastercard from "@/public/mastercard.svg";
import Visa from "@/public/Visa.svg";

function Footer() {
    return(
        <>
        <footer className="bg-[#f0f0f0]">
        <div className="bg-black rounded-[20px] w-[1240px] h-[180px] px-16 py-9 flex items-center justify-between m-auto">
                <h2 className="text-white w-[551px] h-[94px] font-bold text-[40px] leading-[45px]">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                <div className="w-[349px] h-[108px] gap-2">
                    <div className="flex items-center ps-5 gap-4 h-12 rounded-full bg-white w-full">
                    <Mail size={20} color="gray" />
                    <input type="email" className="h-12 rounded-full font-normal text-base leading-[21px] text-gray-400 w-full" placeholder="Enter your email address"/>
                    </div>
                    <button className="bg-white h-12 rounded-full mt-2 font-medium text-base leading-[21px] w-full">Subscribe to Newsletter</button>
            </div>
        </div>
            <div className="w-[1240px] h-[250px] m-auto border-b-[1px] border-gray-300 flex justify-between my-8">
                <div className="w-[250px] h-44">
                <div className="h-[114px]">
                <h4 className="h-[23px] font-bold text[33px] leading-10">SHOP.CO</h4>
                <p className="h-[66px] font-normal text-sm leading-[22px] mt-4">We have clothes that suits your style and which you are proud to wear. From women to men.</p>
                </div>
                <div className="flex gap-2">
                <Twitter size={28} />
                <Facebook size={28} />
                <Instagram size={28}/>
                <Github size={28} />
                </div>
                </div>
                <div className="w-[156px] h-44 footer">
                    <p className="w-[98px] h-[18px] font-medium text-base leading-[18px]">COMPANY</p>
                    <ul className="font-normal text-base leading-[19px] text-gray-600">
                        <li>About</li>
                        <li>Features</li>
                        <li>Works</li>
                        <li>Carrer</li>
                    </ul>
                </div>
                <div className="w-[156px] h-44 footer">
                <p className="w-[98px] h-[18px] font-medium text-base leading-[18px]">HELP</p>
                    <ul className="font-normal text-base leading-[19px] text-gray-600">
                        <li>Customer Support</li>
                        <li>Delivery Details</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="w-[149px] h-44 footer">
                <p className="w-[98px] h-[18px] font-medium text-base leading-[18px]">FAQ</p>
                    <ul className="font-normal text-base leading-[19px] text-gray-600">
                        <li>Account</li>
                        <li>Manage Deliveries</li>
                        <li>Orders</li>
                        <li>Payments</li>
                    </ul>
                </div>
                <div className="w-[169px] h-44 footer">
                <p className="w-[98px] h-[18px] font-medium text-base leading-[18px]">RESOURCES</p>
                    <ul className="font-normal text-base leading-[19px] text-gray-600">
                        <li>Free eBooks</li>
                        <li>Development Tutorial</li>
                        <li>How to - Blog</li>
                        <li>Youtube Playlist</li>
                    </ul>
                </div>
            </div>
            <div className="w-[90%] flex justify-between text-center m-auto">
                <p className="w-[269px] h-[19px] text-sm font-normal leading-[18px] text-gray-600">© 2000-2021, All rights reserved</p>
                <div className="flex gap-2">
                    <Image src={ApplePay} width={40} height={10} alt="Applepay" />
                    <Image src={GooglePay} width={40} height={10} alt="Applepay" />
                    <Image src={Paypal} width={40} height={10} alt="Applepay" />
                    <Image src={Mastercard} width={40} height={10} alt="Applepay" />
                    <Image src={Visa} width={40} height={10} alt="Applepay" />
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer