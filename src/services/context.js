import React,{ useContext, useState } from "react";
import sublinks from '../data' 
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
	const [openModal, setOpenModal] = useState(false);
	const [openSubMenu, setOpenSubMenu] = useState(false);
	const [cordinate, setCordinate] = useState({});
	const [allSubMenu, setAllSubMenu] = useState({ page: "", links: {} });

	const showModal = () => {
		setOpenModal(!openModal);
	};

	const showSubMenu = (page, coords) => {
		const exactPage = sublinks.find((menu) => menu.page === page);
		setAllSubMenu(exactPage);
		setCordinate(coords);
		setOpenSubMenu(true);
	};

	const hideSubMenu = () => {
		setOpenSubMenu(false);
	};

	return (
		<AppContext.Provider
			value={{
				showModal,
				showSubMenu,
				hideSubMenu,
				openModal,
				openSubMenu,
				cordinate,
				allSubMenu,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
