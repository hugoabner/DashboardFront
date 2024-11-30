import { Fa42Group } from "react-icons/fa6"
import { IoEllipsisVerticalSharp } from "react-icons/io5"
import { VscCircleLargeFilled } from "react-icons/vsc"

export const Card5 = () => {
  return (
	<div className="bg-gradient-to-tr mt-4 text-sm from-green-100 border-[1px] border-green-400 to-green-200 p-4 shadow-xl rounded-xl">
	<div>
		<div className="flex space-x-2">
			<button className="bg-green-100 border-[1px] px-2 py-1 text-green-500 border-green-400 rounded-lg hover:bg-green-200">#website</button>
			<button className="bg-green-100 border-[1px] px-2 py-1 text-green-500 border-green-400 rounded-lg hover:bg-green-200">#client</button>
			<div className="flex justify-end w-full ">
				<button className="bg-green-200 border-[1px] px-2 py-1 text-green-500 border-green-400 rounded-lg hover:bg-green-200">< IoEllipsisVerticalSharp/></button>
			</div>
			
		</div>
		<div className="w-full  space-y-4">
			<h1 className="text-green-700 text-xl font-bold">Desing crm shop product page responsive website</h1>
			<div className="space-y-4">
				<div className="flex justify-between ">
					<h2 className="text-green-700 font-semibold">Progress</h2>
					<h2 className="text-green-700 font-semibold">40%</h2>
				</div>
				<div className="flex space-x-">
					<span className="text-green-700"><VscCircleLargeFilled/></span>
					<span className="text-green-700"><VscCircleLargeFilled/></span>
					<span className="text-green-700"><VscCircleLargeFilled/></span>
					<span className="text-green-700"><VscCircleLargeFilled/></span>
					<span className="text-green-700"><VscCircleLargeFilled/></span>
					<span className="text-green-700"><VscCircleLargeFilled/></span>
					<span className="text-green-700"><VscCircleLargeFilled/></span>
					
					<span className="text-green-700"><VscCircleLargeFilled/></span>
					<span className="text-green-300"><VscCircleLargeFilled/></span>
					<span className="text-green-300"><VscCircleLargeFilled/></span>
					<span className="text-green-300"><VscCircleLargeFilled/></span>
					<span className="text-green-300"><VscCircleLargeFilled/></span>
					<span className="text-green-300"><VscCircleLargeFilled/></span>
					<span className="text-green-300"><VscCircleLargeFilled/></span>
				</div>
				<div className="flex ">
					<div className="flex justify- w-full -space-x-2 items-center"> 
						<div className="bg-white rounded-full p-[3px] shadow-xl">
							<img className="w-6 h-6  rounded-full" src="data:image/png;base64,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" alt="" />
						</div>
						<div className="bg-white rounded-full p-[3px] shadow-xl">
							<img className="w-6 h-6  rounded-full" src="data:image/png;base64,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" alt="" />
						</div>
						<div className="bg-white rounded-full p-[3px] shadow-xl">
							<img className="w-6 h-6  rounded-full" src="data:image/png;base64,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" alt="" />
						</div>
						<div className="bg-white rounded-full p-[3px] shadow-xl">
							<img className="w-6 h-6  rounded-full" src="data:image/png;base64,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" alt="" />
						</div>
						
					</div>
					<div className="flex w-full items-center space-x-2 text-white">
						<button className="bg-green-200 border-[1px] px-2 py-1 text-green-500 border-green-400 rounded-lg hover:bg-green-200">12</button>
						<button className="bg-green-200 border-[1px] px-2 py-1 text-green-500 border-green-400 rounded-lg hover:bg-green-200 flex "><Fa42Group className="mr-2"/>8</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}
