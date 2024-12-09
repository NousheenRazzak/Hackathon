import Image from "next/image";
import Heroimage from "@/public/hero-image.png";
import Versace from "@/public/versace-logo.svg";
import Zara from "@/public/zara-logo.svg";
import Gucci from "@/public/gucci-logo.svg";
import Prada from "@/public/prada-logo.svg";
import Calvin from "@/public/calvin-klein-logo.svg";
import NewA1 from "@/public/pic1.png";
import NewA2 from "@/public/pic2.png";
import NewA3 from "@/public/pic3.png";
import NewA4 from "@/public/pic4.png";
import TopS1 from "@/public/pic5.png";
import TopS2 from "@/public/pic6.png";
import TopS3 from "@/public/pic7.png";
import TopS4 from "@/public/pic8.png";
import { Star } from "lucide-react";
import { StarHalf } from "lucide-react";
import { MoveLeft } from "lucide-react";
import { MoveRight } from "lucide-react";
import { CircleCheck } from "lucide-react";
import Casual from "@/public/dress-style-1.png";
import Formal from "@/public/dress-style-2.png";
import Party from "@/public/dress-style-3.png";
import Gym from "@/public/dress-style-4.png";

export default function Home() {
  return (
    <>
    <section className="bg-[#f2f0f1] h-[529px] flex justify-between">
      <div className="w-[596px] h-[500px] flex flex-col justify-center gap-8 ms-[100px] ">
        <h1 className="w-[577px] h-[173px] text-[64px] font-bold leading-[64px]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className="w-[545px] h-[33px] text-base font-normal leading-[22px]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button className="w-[210px] h-[52px] bg-black rounded-full px-[54px] py-4 text-white text-center text-sm">Shop Now</button>
      </div>
      <div className="me-[100px]">
        <Image src={Heroimage} width={500} height={500} alt="hero-section-image"/>
      </div>
    </section>

    <section className="flex flex-wrap items-center justify-center h-[122px] bg-black gap-14">
      <Image src={Versace} width={200} height={200} alt="versace" />
      <Image src={Zara} width={150} height={150} alt="zara" />
      <Image src={Gucci} width={200} height={200} alt="gucci" />
      <Image src={Prada} width={200} height={200} alt="prada" />
      <Image src={Calvin} width={200} height={200} alt="clavinklein" />
    </section>

    <section className="w-[90%] m-auto my-24 border-b-2 border-gray-300">
    <div className="mt-[90px]">
      <h2 className="w-[403px] h-[58px] font-bold text-5xl leading-[57px] m-auto">NEW ARRIVALS</h2>
    </div>
    <div className="flex gap-5 mt-10">
      <div>
        <Image src={NewA1} width={300} height={300} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
        <p className="text-xl font-bold leading-7">T-shirt with Tape Details</p>
        <div className="flex items-center">
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <StarHalf size={18.5} fill="#ffc633" color="#ffc633" />
          <span>4.5/5</span>
        </div>
        <p className="text-2xl font-bold leading-8">$120</p>
      </div>
      <div>
        <Image src={NewA2} width={300} height={300} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
        <p className="text-xl font-bold leading-7">Skinny Fit Jeans</p>
        <div className="flex items-center">
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <StarHalf size={18.5} fill="#ffc633" color="#ffc633" />
          <span>3.5/5</span>
        </div>
        <p className="text-2xl font-bold leading-8">$240 <span className="text-gray-400 line-through ms-2">$260</span><span className="bg-red-300 text-red-500 ms-2 text-sm">-20%</span></p>
      </div>
      <div>
        <Image src={NewA3} width={300} height={300} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
        <p className="text-xl font-bold leading-7">Checkered Shirt</p>
        <div className="flex items-center">
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <StarHalf size={18.5} fill="#ffc633" color="#ffc633" />
          <span>4.5/5</span>
        </div>
        <p className="text-2xl font-bold leading-8">$180</p>
      </div>
      <div className="w-[295px] h-[298px]">
        <Image src={NewA4} width={300} height={298} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
        <p className="text-xl font-bold leading-7">Sleeve Striped T-shirt</p>
        <div className="flex items-center">
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <StarHalf size={18.5} fill="#ffc633" color="#ffc633" />
          <span>4.5/5</span>
        </div>
        <p className="text-2xl font-bold leading-8">$130 <span className="text-gray-400 line-through ms-2">$160</span><span className="bg-red-300 text-red-500 ms-2 text-sm">-30%</span></p>
      </div>
    </div>
    <div className="flex justify-center">
    <button className="w-[218px] h-[52px] text-center text-base font-medium border-[1px] border-black rounded-full my-20">View All</button>
    </div>
    </section>

    <section className="w-[90%] m-auto my-24">
    <div className="mt-[90px]">
      <h2 className="w-[403px] h-[58px] font-bold text-5xl leading-[57px] m-auto text-center">TOP SELLING</h2>
    </div>
    <div className="flex gap-5 mt-10">
      <div>
        <Image src={TopS1} width={300} height={300} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
        <p className="text-xl font-bold leading-7">Vertical Striped Shirt</p>
        <div className="flex items-center">
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <span>5.0/5</span>
        </div>
        <p className="text-2xl font-bold leading-8">$212 <span className="text-gray-400 line-through ms-2">$232</span><span className="bg-red-300 text-red-500 ms-2 text-sm">-20%</span></p>
      </div>
      <div>
        <Image src={TopS2} width={300} height={300} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
        <p className="text-xl font-bold leading-7">Courage Graphic T-shirt</p>
        <div className="flex items-center">
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <span>4.0/5</span>
        </div>
        <p className="text-2xl font-bold leading-8">$145</p>
      </div>
      <div>
        <Image src={TopS3} width={300} height={300} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
        <p className="text-xl font-bold leading-7">Loose Fit Bermuda Shorts</p>
        <div className="flex items-center">
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <span>3.0/5</span>
        </div>
        <p className="text-2xl font-bold leading-8">$80</p>
      </div>
      <div>
        <Image src={TopS4} width={300} height={300} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
        <p className="text-xl font-bold leading-7">Faded Skinny Jeans</p>
        <div className="flex items-center">
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <StarHalf size={18.5} fill="#ffc633" color="#ffc633" />
          <span>4.5/5</span>
        </div>
        <p className="text-2xl font-bold leading-8">$210</p>
      </div>
    </div>
    <div className="flex justify-center">
    <button className="w-[218px] h-[52px] m-auto text-center text-base font-medium border-[1px] border-black rounded-full my-20">View All</button>
    </div>
    </section>

    <section className="w-[90%] h-[850px] bg-[#f0f0f0] m-auto rounded-[40px] my-24">
    <div className="mt-[90px]">
      <h2 className="w-[687px] h-[58px] font-bold text-5xl leading-[57px] m-auto pt-10 text-center">BROWSE BY DRESS STYLE</h2>
    </div>
    <div className="m-auto w-full flex flex-wrap gap-6 mt-[70px] ms-[90px]">
      <Image src={Casual} width={407} height={289} alt="pic" className="w-[407px] h-[289px] rounded-[20px]" />
        {/* <p className="w-[114px] h-[49px] mt-[25px] ms-9 font-bold text-4xl leading-[48px]">Casual</p> */}
      <Image src={Formal} width={684} height={289} alt="pic" className="w-[684px] h-[289px] rounded-[20px]" />
        {/* <p className="w-[114px] h-[49px] mt-[25px] ms-9 font-bold text-4xl leading-[48px]">Formal</p> */}
      <Image src={Party} width={684} height={289} alt="pic" className="w-[684px] h-[289px] rounded-[20px]" />
        {/* <p className="w-[114px] h-[49px] mt-[25px] ms-9 font-bold text-4xl leading-[48px]">Party</p> */}
      <Image src={Gym} width={407} height={289} alt="pic" className="w-[407px] h-[289px] rounded-[20px]" />
        {/* <p className="w-[114px] h-[49px] mt-[25px] ms-9 font-bold text-4xl leading-[48px]">Gym</p> */}
    </div>
    </section>

    <section className="my-24">
      <div className="w-[90%] flex justify-between m-auto">
        <h2 className="w-[654px] h-[58px] font-bold text-5xl leading-[57px]">OUR HAPPY CUSTOMERS</h2>
        <div className="flex gap-3">
          <div><MoveLeft size={24} /></div>
          <div><MoveRight size={24} /></div>
        </div>
      </div>
      <div className="w-[90%] flex justify-between m-auto mt-10">
        <div className="w-[400px] h-[240px] border border-gray-300 rounded-[20px] py-7 px-8">
          <div className="flex mb-3">
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          </div>
          <h4 className="font-bold text-xl leading-[22px] flex mb-3">Sarah M. <span><CircleCheck size={18.5} fill="#01ab31" /></span></h4>
          <p className="text-gray-600 font-normal text-base leading-[22px]">I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.</p>
        </div>
        <div className="w-[400px] h-[240px] border border-gray-300 rounded-[20px] py-7 px-8">
        <div className="flex mb-3">
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          </div>
          <h4 className="font-bold text-xl leading-[22px] flex mb-3">Alex K. <span><CircleCheck size={18.5} fill="#01ab31" /></span></h4>
          <p className="text-gray-600 font-normal text-base leading-[22px]">Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.</p>
        </div>
        <div className="w-[400px] h-[240px] border border-gray-300 rounded-[20px] py-7 px-8">
        <div className="flex mb-3">
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          </div>
          <h4 className="font-bold text-xl leading-[22px] flex mb-3">James L. <span className="ms-2"><CircleCheck size={18.5} fill="#01ab31" /></span></h4>
          <p className="text-gray-600 font-normal text-base leading-[22px]">As someone who is always on the lookout for unique fashion pieces, I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.</p>
        </div>
      </div>
    </section>
    </>
  );
}