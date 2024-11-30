import { Card1 } from "../components/Card1"
import { VscChevronRight } from "react-icons/vsc";
import { GrAdd } from "react-icons/gr";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { Card2 } from "../components/Card2";
import { Card3 } from "../components/Card3";
import { Card4 } from "../components/Card4";
import { Card5 } from "../components/Card5";
import { Card6 } from "../components/Card6";
import { Card7 } from "../components/Card7";
import { Card8 } from "../components/Card8";
import { Card9 } from "../components/Card9";
import { Card10 } from "../components/Card10";
import { Card11 } from "../components/Card11";

export const Members = () => {
  return (
    <div className="grid sm:grid-cols-2 rounded-xl border-[1px] border-gray-400ols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
      <div className="p-3  rounded-xl border-[1px] border-gray-400">
        <div className="flex flex-col  ">
          <div className="flex items-center bg-gray-100">
            <h1 className="font-bold text-xl flex"><VscChevronRight className="mr-2 mt-1 font-extrabold text-black items-centers"/>Todo list</h1>
            <div className="flex ml-auto">
              <span><GrAdd className="font-bold"/></span>
              <span><IoEllipsisVerticalSharp className="font-bold"/></span>
            </div>
          </div>
          <div className="py-5">
            <span className="bg-gray-300 h-[1px]  w-full block "></span>
          </div>
        </div>
      
      <Card1 />
      <Card2 />
      <Card3 />
      </div>

      <div className="p-3  rounded-xl border-[1px] border-gray-400">
      <div className="flex flex-col  ">
          <div className="flex   items-center bg-gray-100">
            <h1 className="font-bold text-xl flex"><VscChevronRight className="mr-2 mt-1 font-extrabold text-black items-centers"/>In Progress</h1>
            <div className="flex ml-auto">
              <span><GrAdd className="font-bold"/></span>
              <span><IoEllipsisVerticalSharp className="font-bold"/></span>
            </div>
          </div>
          <div className="py-5">
            <span className="bg-gray-300 h-[1px]  w-full block "></span>
          </div>
        </div>
        <Card4 />
        <Card5 />
      </div>

      <div className="p-3  rounded-xl border-[1px] border-gray-400">
      <div className="flex flex-col  ">
          <div className="flex   items-center bg-gray-100">
            <h1 className="font-bold text-xl flex"><VscChevronRight className="mr-2 mt-1 font-extrabold text-black items-centers"/>In Review</h1>
            <div className="flex ml-auto">
              <span><GrAdd className="font-bold"/></span>
              <span><IoEllipsisVerticalSharp className="font-bold"/></span>
            </div>
          </div>
          <div className="py-5">
            <span className="bg-gray-300 h-[1px]  w-full block "></span>
          </div>
        </div>
        <Card6 />
        <Card7 />
        <Card8 />
        <Card9 />
      </div>

      <div className="p-3  rounded-xl border-[1px] border-gray-400">
      <div className="flex flex-col  ">
          <div className="flex   items-center bg-gray-100">
            <h1 className="font-bold text-xl flex">
              <VscChevronRight className="mr-2 mt-1 font-extrabold text-black items-centers"/>
              Done
            </h1>
            <div className="flex ml-auto">
              <span><GrAdd className="font-bold"/></span>
              <span><IoEllipsisVerticalSharp className="font-bold"/></span>
            </div>
          </div>
          <div className="py-5">
            <span className="bg-gray-300 h-[1px]  w-full block "></span>
          </div>
        </div>
        <Card10 />
        <Card11 />
      </div>
    
    </div>
  )
}
