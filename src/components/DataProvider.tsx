import React, { useState } from "react";
import { ProviderProps } from "../interfaces";
import { DataContext } from "../components";

const DataProvider: React.FC<ProviderProps> = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(
		Boolean(localStorage.getItem("isDarkMode")) || true
	);

	const toggleDarkMode = () => {
		setIsDarkMode((prevIsDarkMode) => {
			const newIsDarkMode = !prevIsDarkMode;
			localStorage.setItem("isDarkMode", String(newIsDarkMode));
			console.log("isDarkMode", newIsDarkMode);
			return newIsDarkMode;
		});
	};

	return (
		<DataContext.Provider
			value={{
				isDarkMode,
				toggleDarkMode,
			}}>
			{children}
		</DataContext.Provider>
	);
};

export default DataProvider;
