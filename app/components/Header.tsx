import React from "react"
import { ShoppingCart } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Search } from "lucide-react";
import { X } from "lucide-react";

function TopHeader() {
    return(
        <header className="bg-black h-[38px] w-full">
            <div className="bg-black h-[38px] w-[55%] flex gap-96 justify-between ms-[575px] items-center">
            <p className="h-[19px] text-white font-normal text-sm text-center">Sign up and get 20% off to your first order. <span className="font-medium underline">Sign Up Now</span></p>
            <X size={24} color="white"/>
            </div>
        </header>
    )
}

export default TopHeader

export function Header() {
    return(
        <header className="flex w-[90%] h-[41px] gap-10 items-center justify-between m-auto my-5">
            <h1 className="w-[160px] text-[32px] font-bold">SHOP.CO</h1>
            
                <ul className="text-base font-normal flex gap-6 h-[22px] items-start">
                    <li>Shop</li>
                    <li>On Sale</li>
                    <li>New Arrivals</li>
                    <li>Brands</li>
                </ul>
            
            <div className="p-2 rounded-full bg-[#f0f0f0] w-96 flex gap-5">
                <Search size={24} color="gray"/>
                <input type="search" placeholder="Search for products.." className="bg-transparent"/>
            </div>
            
            <div className="flex gap-4">
                <div><ShoppingCart size={24} /></div>
                <div><CircleUserRound size={24} /></div>
            </div>
        </header>
    )
}