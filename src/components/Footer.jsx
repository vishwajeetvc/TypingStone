import { NavLink } from "react-router-dom";

export default function Footer(){
	return (
		<footer className="bg-slate-800 text-gray-50">
			<div className="bg-slate-800 py-4 text-white w-1/2 mx-auto flex justify-evenly text-4xl">
				<NavLink to="blabal">&#9832;</NavLink>
				<NavLink to="blabal">&#9781;</NavLink>
				<NavLink to="blabal">&#9775;</NavLink>
				<NavLink to="blabal">&#9763;</NavLink>
			</div>
			<div>
				<h1 className="p-8 font-bold text-center text-4xl">TypingStone</h1>
			</div>
			<address className="text-center">
				<ul className="p-4">
					<li>Bihar : Siwan : Mairwa</li>
					<li>Telephone: +91 1112349889</li>
					<li>Email: vcnvim@gmail.com</li>
				</ul>	
				<p>Copyright &#169; 2023 TypingStone. All rights reserved.</p>
			</address>
		</footer>
	)
}
