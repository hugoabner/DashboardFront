import { TiAttachment } from "react-icons/ti"

export const ProjectCard = ({project}) => {
  return (
	<div className="p-6 bg-white rounded-xl space-y-5">
    <div>
      <h1 className="text-xl font-semibold text-gray-700">{project.name}</h1>
      <p className="text-sm text-gray-500">{project.type}</p>
    </div>
    <p className="text-xs p-2 rounded bg-gray-100">{project.Date}</p>

    <div className="w-full bg-gray-200 rounded-full h-2">
      <div className="w-[40%] bg-indigo-500 rounded-full h-2"></div>
    </div>

    <div className="flex justify-between items-center">
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
      <p className="flex items-center space-x-2 text-gray-500"><TiAttachment /> <span>{project.files}</span></p>
    </div>
  </div>
  )
}
