import { FaChevronRight } from "react-icons/fa"

export const MemberCard = ({member}) => {
  return (
    <div className="bg-white p-6 rounded-xl space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-700">{member.total_members}</h1>
        <FaChevronRight />
      </div>

      <div>
        <p className="text-xs text-gray-400">{member.job}</p>
        <div className="relative">
        <img 
          src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" 
          alt=""
          className="w-8 h-8 rounded-full border-4 border-white " />
        <img 
          src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" 
          alt=""
          className="w-8 h-8 rounded-full border-4 border-white absolute top-0 left-4" />
        <img 
          src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" 
          alt=""  
          className="w-8 h-8 rounded-full border-4 border-white absolute top-0 left-8" />
      </div >
      </div>
    </div>


  )
}
