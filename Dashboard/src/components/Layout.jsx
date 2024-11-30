import { Sidebar } from "./Sidebar.jsx"
import { Header } from "./Header.jsx"
import { Outlet } from "react-router-dom"

export const Layout = () => {
	return (
		<div>
			<div className="flex">
					<Sidebar />
				<div className="w-full ml-16 md:ml-56">
					<Header className=""/>
					<Outlet />
				</div>
			</div>
		</div>
	)
}
	