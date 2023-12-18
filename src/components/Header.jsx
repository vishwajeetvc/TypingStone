
import { NavLink } from "react-router-dom"

export default function Header(){
	function navClickHandler(e){
		const ul = e.target.parentElement.parentElement
		ul.classList.add('hidden')
	}
	return (
		<header className="border-b-2  text-2xl bg-slate-800  text-white relative">
			<div className="w-9/12 mx-auto flex h-14 items-end justify-between">
					<div className="img  font-bold text-rose-50 text-4xl px-6 py-3"><NavLink  className="bg-slate-800 text-white visited:bg-slate-800 visited:text-white " to="/">&#9885;</NavLink></div>
					<nav className="flex item-center text-white">
						<ul className="md:flex hidden absolute bg-white md:bg-slate-800 md:text-white text-black md:static top-[100%] right-0 w-full">
							<li>
								<NavLink className="px-28 md:px-6  border-b-2 md:border-none hover:text-white hover:bg-slate-800 py-3 block" onClick={navClickHandler}to='/'>Home</NavLink>
							</li>
							<li>
								<NavLink className="px-28 md:px-6  border-b-2 md:border-none hover:text-white hover:bg-slate-800 py-3 block" onClick={navClickHandler}to='/about'>About</NavLink>
							</li>
							<li>
								<NavLink className="px-28 md:px-6  border-b-2 md:border-none hover:text-white hover:bg-slate-800 py-3 block" onClick={navClickHandler}to='/signup'>Signup</NavLink>
							</li>
							<li>
								<NavLink className="px-28 md:px-6  border-b-2 md:border-none hover:text-white hover:bg-slate-800 py-3 block" onClick={navClickHandler}to='/login'>Login</NavLink>
							</li>
							<li>
								<NavLink className="px-28 md:px-6  border-b-2 md:border-none hover:text-white hover:bg-slate-800 py-3 block" onClick={navClickHandler}to='/lessons'>Lessons</NavLink>
							</li>
						</ul>
						<div onClick={e=>{
							const ul = document.querySelector('nav ul')
							ul.classList.toggle('hidden')
						}} className="md:hidden px-4 py-3 cursor-pointer">&#8803;</div>
					</nav>
			</div>
		</header>
	)
}
