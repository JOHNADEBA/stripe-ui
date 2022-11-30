import { useRef, useEffect } from "react";
import { useGlobalContext } from "../services/context";

const SubMenu = () => {
	const { showSubMenu, cordinate, allSubMenu: {page, links} } = useGlobalContext();
	const container = useRef(null);
	

	useEffect(() => {
        const subMenu = container.current
		subMenu.style.top = `${cordinate.bottom}px`;
		subMenu.style.left = `${cordinate.center}px`;
	}, [cordinate]);

	return (
		<div
			className={`${showSubMenu ? "submenu show" : "submenu"}`}
			ref={container}
		>
            <h4>{page}</h4>
			<div className={`submenu-center col-2 `}>{links.map((menu, index) => {
				return <a key={index} href={menu.url}>	{menu.icon}  {menu.label} </a>;
			})}</div>
		</div>
	);
};

export default SubMenu;