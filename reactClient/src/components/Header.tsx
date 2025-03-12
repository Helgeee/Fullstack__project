import { FC } from "react"
import { Link, NavLink } from "react-router-dom"
import { FaBtc, FaSignOutAlt } from "react-icons/fa"

const Header: FC = () => {
	const isAuth = false
	return (
		<header className="flex items-center bg-slate-800 px-4 py-2 shadow-sm backdrop-blur-sm">
			<Link to="/">
				<FaBtc size={20} />
			</Link>
			{/* Menu */}
			{isAuth && (
				<nav className="ml-auto mr-10">
					<ul className="flex items-center gap-5">
						<li>
							<NavLink
								to={"/"}
								className={({ isActive }) =>
									isActive ? "text-white" : "text-white/50"
								}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to={"/Transactions"}
								className={({ isActive }) =>
									isActive ? "text-white" : "text-white/50"
								}
							>
								Transaction
							</NavLink>
						</li>
						<li>
							<NavLink
								to={"/categories"}
								className={({ isActive }) =>
									isActive ? "text-white" : "text-white/50"
								}
							>
								Categories
							</NavLink>
						</li>
					</ul>
				</nav>
			)}

			{/* Actions */}
			{isAuth ? (
				<button className="btn btn-red">
					<span>Log Out</span>
					<FaSignOutAlt />
				</button>
			) : (
				<Link
					className="py-2 text-white/50 hover:text-white ml-auto mr-10"
					to={"auth"}
				>
					Log In / Sign In
				</Link>
			)}
		</header>
	)
}

export default Header
