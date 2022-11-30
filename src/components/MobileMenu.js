import data from "../data";
import { useGlobalContext } from "../services/context";
import { FaTimes } from "react-icons/fa";

const MobileMenu = () => {
	const { showModal } = useGlobalContext();
	return (
		<div>
			<h2 className="bars mobile-bars" onClick={showModal}>
				<FaTimes />
			</h2>
			<div className="mobile-sub-menu">
				{data.map((menu, index) => {
					return (
						<article key={index}>
							<h4>{menu.page}</h4>
							<div className="mobile-a">
								{menu.links.map((submenu, index) => {
									return (
										<a key={index} href={submenu.url}>
											{submenu.icon} <span>{submenu.label}</span>
										</a>
									);
								})}
							</div>
						</article>
					);
				})}
			</div>
		</div>
	);
};

export default MobileMenu;
