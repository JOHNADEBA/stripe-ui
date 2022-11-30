import logo from "./images/logo.svg";
import hero from "./images/hero.svg";
import phone from "./images/phone.svg";
import { FaBars } from "react-icons/fa";
import data from "./data";
import "./App.css";

import MobileMenu from "./components/MobileMenu";
import SubMenu from "./components/SubMenu";
import { useGlobalContext } from "./services/context";

function App() {
	const { openModal, hideSubMenu, showModal, openSubMenu, showSubMenu } =
		useGlobalContext();

	const showDesktopSubMenu = (e) => {
		const page = e.target.textContent;
		const boundary = e.target.getBoundingClientRect();
		const bottom = boundary.bottom + 8;
		const center = (boundary.left + boundary.right) / 2;
		showSubMenu(page, { bottom, center });
	};
	// const hideSubMenuHeader = (e) =>{
	//   if (!e.target.classList.contains('main-menu') ) {
	//     hideSubMenu()
	//   }
	// }
	return (
		<div
			className="App"
			style={{ backgroundImage: `url(${hero})`, width: "100%" }}
		>
			<header
				className="App-header"
				// onMouseOver={hideSubMenuHeader}
			>
				<img className="logo" src={logo} alt="logo" />

				{data.map((menu, index) => (
					<p key={index} className="main-menu" onMouseOver={showDesktopSubMenu}>
						{menu.page}
					</p>
				))}

				<h2 className="bars" onClick={showModal}>
					<FaBars />
				</h2>
				<button className="signin-btn">Sign In</button>
			</header>
			<main onMouseOver={hideSubMenu}>
				<div className="left">
					<h2>Payments infrastructure for the internet</h2>
					<p>
						Millions of companies of all sizes—from startups to Fortune 500s—use
						Stripe’s software and APIs to accept payments, send payouts, and
						manage their businesses online.
					</p>

					<button className="start-btn">Start Now</button>
				</div>
				<div className="right">
					<img src={phone} alt="phone" />
				</div>
			</main>

			{openModal && (
				<div className="mobile-cont">
					<MobileMenu />{" "}
				</div>
			)}

			{openSubMenu && <SubMenu />}
		</div>
	);
}

export default App;
