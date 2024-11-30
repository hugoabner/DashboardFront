import  logo1  from "../assets/logo1.jpg" 
import  logo2  from "../assets/logo2.jpeg" 

export const Logo = () => {
	return (
		<div>
			<div className="flex ">
				<img src={logo1} alt="logo" className="w-10 block h-10 rounded-full md:flex"/>
				<span className="text-sm font-bold ml-3 hidden md:block">Huaca Del Norte SAC</span>
			</div>
		</div>
	)
}
